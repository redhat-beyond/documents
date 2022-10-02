const YAML = require('yaml')
const RHDSPlugin = require('./_plugins/rhds.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', x => YAML.parse(x));
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('tutorial/**/*.{png,jpg,jpeg,svg}');

  eleventyConfig.addPlugin(RHDSPlugin);

  return {
    templateFormats: [
      'md',
      'njk',
      'html',
    ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  }
}
