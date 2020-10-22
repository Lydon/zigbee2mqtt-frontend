
import { GenericExposedFeature, BinaryFeature, NumericFeature, EnumFeature, LightFeature, CompositeFeature, SwitchFeature, CoverFeature, LockFeature } from "../../types";

export function isBinaryFeature(feature: GenericExposedFeature | CompositeFeature): feature is BinaryFeature {
  return feature.type === "binary";
}

export function isNumericFeature(feature: GenericExposedFeature | CompositeFeature): feature is NumericFeature {
  return feature.type === "numeric";
}

export function isEnumFeature(feature: GenericExposedFeature | CompositeFeature): feature is EnumFeature {
  return feature.type === "enum";
}

export function isLightFeature(feature: GenericExposedFeature | CompositeFeature): feature is LightFeature {
  return feature.type === "light";
}
export function isSwitchFeature(feature: GenericExposedFeature | CompositeFeature): feature is SwitchFeature {
  return feature.type === "switch";
}

export function isCoverFeature(feature: GenericExposedFeature | CompositeFeature): feature is CoverFeature {
  return feature.type === "cover";
}

export function isLockFeature(feature: GenericExposedFeature | CompositeFeature): feature is LockFeature {
  return feature.type === "lock";
}