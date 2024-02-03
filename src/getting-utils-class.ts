export default async (cssData: string): Promise<string[] | null> =>
  cssData.match(/(u-\w*--\w*)|(u-\w*)/g) || null;
