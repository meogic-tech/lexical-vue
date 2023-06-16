import type { HistoryState } from '@meogic/lexical-history'
import type { LexicalEditor } from '@meogic/lexical'
import { computed, unref, watchPostEffect } from 'vue'

import { createEmptyHistoryState, registerHistory } from '@meogic/lexical-history'
import type { MaybeRef } from '../types'

export function useHistory(
  editor: MaybeRef<LexicalEditor>,
  externalHistoryState?: MaybeRef<HistoryState>,
  delay?: MaybeRef<number>,
) {
  const historyState = computed<HistoryState>(
    () => unref(externalHistoryState) || createEmptyHistoryState(),
  )

  watchPostEffect((onInvalidate) => {
    const unregisterListener = registerHistory(unref(editor), historyState.value, unref(delay) || 1000)

    onInvalidate(() => {
      unregisterListener()
    })
  })
}
