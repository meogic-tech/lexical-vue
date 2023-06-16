import { registerDragonSupport } from '@meogic/lexical-dragon'
import { registerRichText } from '@meogic/lexical-rich-text'
import { mergeRegister } from '@meogic/lexical-utils'
import type { LexicalEditor } from '@meogic/lexical'
import { useMounted } from './useMounted'

export function useRichTextSetup(editor: LexicalEditor) {
  useMounted(() => {
    return mergeRegister(
      registerRichText(editor),
      registerDragonSupport(editor),
    )
  })
}
