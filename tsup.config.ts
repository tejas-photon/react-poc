import { defineConfig } from 'tsup';

export default defineConfig({
 entry:['src/index.ts'],
 format:['cjs','esm'],
 dts:true,
 sourcemap:true,
 clean:true,
 external:['react','react-dom'],
 onSuccess: 'cp src/untitled-ui/tokens/generated/raw.css dist/',
 target: 'es2017',
  esbuildOptions(options) {
    // @ts-ignore
    options.jsx = 'automatic';
    // @ts-ignore
    options.jsxImportSource = 'react';
  },
  tsconfig: './tsconfig.build.json'      

});