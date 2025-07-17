import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/arrayUtils.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  outDir: 'dist',
});
