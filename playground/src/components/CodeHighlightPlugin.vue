<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { registerCodeHighlighting } from '@meogic/lexical-code'
import { useEditor } from '@meogic/lexical-vue'

const editor = useEditor()
let unregisterListener: () => void

onMounted(() => {
  unregisterListener = registerCodeHighlighting(editor)
})

onUnmounted(() => {
  unregisterListener?.()
})
</script>

<template />
