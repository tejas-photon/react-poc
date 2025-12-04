
export default {
  // Your DTCG token file
  
  source: ["src/untitled-ui/tokens/design-tokens.dtcg.json"],

  platforms: {
    // --- Web: CSS variables ---
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "raw.css",
          format: "css/variables"
        }
      ]
    },

    // --- Web: JS tokens ---
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "raw.js",
          format: "javascript/es6"
        }
      ]
    },

    // --- iOS (Swift) ---
    ios: {
      transformGroup: "ios-swift",
      buildPath: "build/ios/",
      files: [
        {
          destination: "DesignTokens.swift",
          format: "ios-swift/class.swift",
          className: "DesignTokens",   // name of the generated Swift class
          // optional: prefix for enums / structs etc.
          // typePrefix: "DT"
        }
      ]
    },

    // --- Android (XML resources) ---
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [
        {
          destination: "tokens.xml",
          format: "android/resources"
          // By default this will create <color>, <dimen>, <string>, etc.
          // based on $type (color, dimension, etc.)
        }
      ]
    }
  }
};
