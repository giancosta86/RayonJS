import { Readable, Transform } from "node:stream";
import bz2 from "unbzip2-stream";
import fetch from "node-fetch";
import { LinguisticPlugin } from "@giancosta86/jardinero-sdk";
import { SqliteWritableBuilder } from "@giancosta86/sqlite-writable";
import { isInProduction } from "@giancosta86/typed-env";
import { FrenchTransform, PAGE_BATCH_PROCESSED_EVENT } from "./extraction";
import { FRENCH_SQLITE_SCHEMA, createFrenchWritableBuilder } from "./sqlite";

const GLAWI_ARCHIVE = "GLAWI_FR_work_D2015-12-26_R2016-05-18.xml.bz2";

const OFFICIAL_GLAWI_URL = `http://redac.univ-tlse2.fr/lexiques/glawi/2016-05-18/${GLAWI_ARCHIVE}`;

const LOCAL_GLAWI_URL = `http://localhost:8000/${GLAWI_ARCHIVE}`;

const glawiUrl = isInProduction(true) ? OFFICIAL_GLAWI_URL : LOCAL_GLAWI_URL;

export class FrenchPlugin extends LinguisticPlugin {
  getId(): string {
    return "info.gianlucacosta.rayon";
  }

  getName(): string {
    return "RayonJS";
  }

  getSqliteSchema(): string {
    return FRENCH_SQLITE_SCHEMA;
  }

  override getStartupQuery(): string {
    return `WITH all_infinitives AS (
  SELECT DISTINCT infinitive
  FROM verbs
)

SELECT '-ER' AS 'Verb ending', COUNT(infinitive) AS 'Total verbs'
FROM all_infinitives
WHERE infinitive LIKE '%er'

UNION ALL

SELECT '-IR' AS 'Verb ending', COUNT(infinitive) AS 'Total verbs'
FROM all_infinitives
WHERE infinitive LIKE '%ir'

UNION ALL

SELECT '-RE' AS 'Verb ending', COUNT(infinitive) AS 'Total verbs'
FROM all_infinitives
WHERE infinitive LIKE '%re'`;
  }

  async createSourceStreams(): Promise<readonly Readable[]> {
    const response = await fetch(glawiUrl);
    if (!response.ok || !response.body) {
      throw new Error(
        `Error when opening the URL of the GLAWI dictionary: ${glawiUrl}`
      );
    }

    return [response.body as Readable, bz2()];
  }

  createExtractionTransforms(): Transform {
    return new FrenchTransform().on(
      PAGE_BATCH_PROCESSED_EVENT,
      processedPages =>
        this.pipelineOutput.sendProcessedPagesNotification(processedPages)
    );
  }

  createSqliteWritableBuilder(): SqliteWritableBuilder {
    return createFrenchWritableBuilder();
  }
}
