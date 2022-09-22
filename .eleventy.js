const YAML = require('yaml')
const EleventyNavigationPagination = require("@11ty/eleventy-navigation");
const EleventySyntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const RHDSPlugin = require('./_plugins/rhds.cjs');
const { EleventyRenderPlugin } = require('@11ty/eleventy')

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', x => YAML.parse(x));
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addPlugin(EleventySyntaxHighlightPlugin);
  eleventyConfig.addPlugin(EleventyNavigationPagination);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
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
