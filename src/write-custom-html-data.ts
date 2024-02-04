import * as fs from 'fs';
import { CustomDataHTMLVScode } from './type';
import path from 'path';

export default async function (data: CustomDataHTMLVScode) {
  const jsonString = JSON.stringify(data, null, 2);
  return fs.promises.writeFile(
    path.resolve(__dirname, '../data/vz-utils.json'),
    jsonString,
    'utf-8',
  );
}
