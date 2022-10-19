<script setup lang="ts">
import { onMounted, provide } from 'vue'
import type { EditorThemeClasses, LexicalNode } from 'lexical'
import { createEditor } from 'lexical'
import { editorKey } from '../composables/inject'
import type { Class } from '../utils'

const props = defineProps<{
  initialConfig: {
    namespace?: string
    nodes?: Class<LexicalNode>[]
    editable?: boolean
    theme?: EditorThemeClasses
  }
}>()

const emit = defineEmits<{
  (e: 'error', error: Error): void
}>()

const editor = createEditor({
  ...props.initialConfig,
  onError(error) {
    emit('error', error)
  },
})

provide(editorKey, editor)

onMounted(() => {
  const isEditable = props.initialConfig.editable

  editor.setEditable(isEditable || false)
})
</script>

<template>
  <slot />
</template>
