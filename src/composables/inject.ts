import type { InjectionKey } from 'vue'
import type { LexicalEditor } from '@meogic/lexical'

export const editorKey: InjectionKey<LexicalEditor> = Symbol('Lexical editor')
