<script lang="ts" setup>
import { TRANSFORMERS, registerMarkdownShortcuts } from '@meogic/lexical-markdown'
import type { Transformer } from '@meogic/lexical-markdown'
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
