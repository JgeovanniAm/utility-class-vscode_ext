import { CustomDataHTMLVScode, ValueSetsAttr } from './type';

export default function (utilsArray: string[]): CustomDataHTMLVScode {
  const valueSets: ValueSetsAttr[] = [];
  let index = 0;
  while (index < utilsArray.length) {
    const item = utilsArray[index];
    valueSets.push({
      name: item,
      description: 'vz-utils-class see more:....',
    });
    index++;
  }
  return {
    version: 1.1,
    globalAttributes: [
      {
        name: 'class',
        valueSet: 'vz-utils',
      },
    ],
    valueSets: [
      {
        name: 'vz-utils',
        values: [...valueSets],
      },
    ],
  };
}
