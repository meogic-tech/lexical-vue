<script setup lang="ts">
import type { HistoryState } from '@meogic/lexical-history'
import { useEditor, useHistory } from '../composables'

const props = defineProps<{
  externalHistoryState?: HistoryState
}>()

const editor = useEditor()
useHistory(editor, props.externalHistoryState)
</script>

<template />
