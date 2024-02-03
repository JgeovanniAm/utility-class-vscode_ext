import axios from 'axios';
import { ExtensionContext } from 'vscode';

export default async function (url: string, ctx: ExtensionContext) {
  const cachedData = ctx.workspaceState.get('cachedData');
  //console.log(cachedData);
  if (cachedData) {
    return cachedData;
  }

  const response = await axios.get(url);
  const responseData = response.data;

  ctx.workspaceState.update('cachedData', responseData);

  return responseData;
}
