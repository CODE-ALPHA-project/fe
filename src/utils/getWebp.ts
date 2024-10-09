export const getWebPPath = (imagePath: string) => {
  return imagePath.replace(/\.(png|jpg|jpeg)$/, ".webp");
};
