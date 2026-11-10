const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/img");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "js/is-land.js",
    "node_modules/petite-vue/dist/petite-vue.es.js": "js/petite-vue.js",
  });

  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["_src/threeScene.js"],
      bundle: true,
      minify: true,
      format: "esm",
      outdir: "_site/js",
      sourcemap: true,
    });
  });

  eleventyConfig.addWatchTarget("./_src/threeScene.js");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "_src",
      output: "_site",
      includes: "_includes",
    },
  };
};
