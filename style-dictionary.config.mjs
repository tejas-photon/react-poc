
export default {
  // Your DTCG token file
  
  source: ["src/untitled-ui/tokens/design-tokens.dtcg.json"],

  platforms: {
    // --- Web: CSS variables ---
    css: {
      transformGroup: "css",
      buildPath: "src/untitled-ui/tokens/generated/css/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ]
    },
  }
};
