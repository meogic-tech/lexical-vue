<script lang="ts" setup>
import { LexicalMarkdownShortcutPlugin } from '@meogic/lexical-vue'
import type {
  Transformer,
} from '@meogic/lexical-markdown'
import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from '@meogic/lexical-markdown'

const PLAYGROUND_TRANSFORMERS: Transformer[] = [
  CHECK_LIST,
  ...ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS,
]
</script>

<template>
  <LexicalMarkdownShortcutPlugin :transformers="PLAYGROUND_TRANSFORMERS" />
</template>
