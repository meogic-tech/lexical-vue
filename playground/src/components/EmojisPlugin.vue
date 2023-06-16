<script setup lang="ts">
import { useEditor } from '@meogic/lexical-vue'
import useEmojis from '../composables/useEmojis'

const editor = useEditor()

useEmojis(editor)
</script>

<template />
