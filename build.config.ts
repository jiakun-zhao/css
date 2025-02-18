import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/unocss',
  ],
  clean: false,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
