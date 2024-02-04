export default (cssData: string): string[] | null =>
  cssData.match(/(u-\w*--\w*)|(u-\w*)/g) || null;
