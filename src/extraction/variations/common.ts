import { FrenchTerm } from "../../terms";
import { buildAdjectiveFromGrace } from "./adjective";
import { buildNounFromGrace } from "./noun";
import { buildVerbFromGrace } from "./verb";

export type BuildTermVariationFromGraceParams = {
  type: string;
  entry: string;
  pronunciation?: string;
  kind?: string;
  referenceEntry: string;
  grace: string;
};

export function buildTermVariationFromGrace(
  variationBuildParams: BuildTermVariationFromGraceParams
): FrenchTerm | null {
  switch (variationBuildParams.type) {
    case "verbe":
      return buildVerbFromGrace(variationBuildParams);

    case "nom":
      return buildNounFromGrace(variationBuildParams);

    case "adjectif":
      return buildAdjectiveFromGrace(variationBuildParams);

    default:
      return null;
  }
}
