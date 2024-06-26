import type { HistoryState } from '@lexical/history';
import type { LexicalEditor } from 'lexical';
import { type MaybeRef } from 'vue';
export declare function useHistory(editor: MaybeRef<LexicalEditor>, externalHistoryState?: MaybeRef<HistoryState>, delay?: MaybeRef<number>): void;
