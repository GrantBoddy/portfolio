module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: "projects",
        output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
    };
  };