import type { EntityMatch } from '@meogic/lexical-text'
import type { TextNode } from '@meogic/lexical'

import { registerLexicalTextEntity } from '@meogic/lexical-text'
import { mergeRegister } from '@meogic/lexical-utils'
import type { Class } from '../types'
import { useEditor } from './useEditor'
import { useMounted } from './useMounted'

export function useLexicalTextEntity<N extends TextNode>(
  getMatch: (text: string) => null | EntityMatch,
  targetNode: Class<N>,
  createNode: (textNode: TextNode) => N,
): void {
  const editor = useEditor()

  useMounted(() => {
    return mergeRegister(
      ...registerLexicalTextEntity(editor, getMatch, targetNode, createNode),
    )
  })
}
