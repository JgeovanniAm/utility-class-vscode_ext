export type GlobalAtrr = {
  name: string;
  valueSet: string;
};

export type ValueSetsAttr = {
  name: string;
  description: string;
};

export type ValueSets = {
  name: string;
  values: Array<ValueSetsAttr>;
};

export type CustomDataHTMLVScode = {
  version: number;
  globalAttributes: Array<GlobalAtrr>;
  valueSets: Array<ValueSets>;
};
