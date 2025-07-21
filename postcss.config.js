export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optimizaciones adicionales de CSS
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true
      }
    },
    // Minificación CSS
    cssnano: {
      discardComments: {
        removeAll: true
      },
      normalizeWhitespace: true,
      colormin: true,
      convertValues: true,
      discardDuplicates: true,
      discardEmpty: true,
      mergeIdents: true,
      mergeLonghand: true,
      mergeRules: true,
      minifyFontValues: true,
      minifyGradients: true,
      minifyParams: true,
      minifySelectors: true,
      normalizeCharset: true,
      normalizeDisplayValues: true,
      normalizePositions: true,
      normalizeRepeatStyle: true,
      normalizeString: true,
      normalizeTimingFunctions: true,
      normalizeUnicode: true,
      normalizeUrl: true,
      orderedValues: true,
      reduceIdents: true,
      reduceInitial: true,
      reduceTransforms: true,
      svgo: true,
      uniqueSelectors: true
    }
  },
};