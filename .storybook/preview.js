import { CodeBlock } from './../src/components/code'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    components: {
      code: CodeBlock,
    },
  },
}
