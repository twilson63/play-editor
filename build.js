import { build } from 'esbuild'

build({
  entryPoints: ['src/editor.js'],
  outdir: './dist',
  minify: true,
  bundle: true,
  format: 'esm'
})

