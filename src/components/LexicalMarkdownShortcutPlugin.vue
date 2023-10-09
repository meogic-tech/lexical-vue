<script lang="ts" setup>
import { TRANSFORMERS, registerMarkdownShortcuts } from '@lexical/markdown'
import type { Transformer } from '@lexical/markdown'
import { useEditor, useMounted } from '../composables'

const props = withDefaults(defineProps<{
  transformers?: Transformer[]
}>(), {
  transformers: () => [...TRANSFORMERS],
})
const editor = useEditor()

useMounted(() => {
  return registerMarkdownShortcuts(editor, props.transformers)
})
</script>

<template />
