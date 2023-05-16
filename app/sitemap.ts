export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `https://areliverpoolwinning.com/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
