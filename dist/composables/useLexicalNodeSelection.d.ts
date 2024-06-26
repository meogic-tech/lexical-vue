import type { NodeKey } from 'lexical';
import { type MaybeRef } from 'vue';
export declare function useLexicalNodeSelection(key: MaybeRef<NodeKey>): {
    isSelected: Readonly<import("vue").Ref<boolean>>;
    setSelected: (selected: boolean) => void;
    clearSelection: () => void;
};
