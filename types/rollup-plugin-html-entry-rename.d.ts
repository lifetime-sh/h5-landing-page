// types/rollup-plugin-html-entry-rename.d.ts

declare module 'rollup-plugin-html-entry-rename' {
  const plugin: (renameFn: (fileName: string) => string) => any
  export default plugin
}
