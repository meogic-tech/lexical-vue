import { registerDragonSupport } from '@meogic/lexical-dragon'
import { registerPlainText } from '@meogic/lexical-plain-text'
import { mergeRegister } from '@meogic/lexical-utils'
import type { LexicalEditor } from '@meogic/lexical'
import { useMounted } from './useMounted'

export function usePlainTextSetup(editor: LexicalEditor) {
  useMounted(() => {
    return mergeRegister(
      registerPlainText(editor),
      registerDragonSupport(editor),
    )
  })
}
