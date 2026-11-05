module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/img");

  return {
    dir: {
      input: "_src",
      output: "_site",
      includes: "_includes",
    },
  };
};
