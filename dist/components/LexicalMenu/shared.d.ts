import type { LexicalCommand, LexicalEditor } from 'lexical';
import type { Component, ComponentPublicInstance, Ref } from 'vue';
export interface MenuTextMatch {
    leadOffset: number;
    matchingString: string;
    replaceableString: string;
}
export interface MenuResolution {
    match?: MenuTextMatch;
    getRect: () => DOMRect;
}
export declare const PUNCTUATION = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
export declare class MenuOption {
    key: string;
    ref: HTMLElement | null;
    constructor(key: string);
    setRefElement(el: Element | ComponentPublicInstance | null): void;
}
export type MenuRenderFn<TOption extends MenuOption> = (anchorElementRef: Ref<HTMLElement | null>, itemProps: {
    selectedIndex: number | null;
    selectOptionAndCleanUp: (option: TOption) => void;
    setHighlightedIndex: (index: number) => void;
    options: Array<TOption>;
}, matchingString: string | null) => Component | null;
export declare function getScrollParent(element: HTMLElement, includeHidden: boolean): HTMLElement | HTMLBodyElement;
export declare function useDynamicPositioning(resolution: Ref<MenuResolution | null>, targetElement: Ref<HTMLElement | null>, onReposition: () => void, onVisibilityChange?: (isInView: boolean) => void): void;
export declare const SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND: LexicalCommand<{
    index: number;
    option: MenuOption;
}>;
export declare function useMenuAnchorRef(resolution: Ref<MenuResolution | null>, setResolution: (r: MenuResolution | null) => void, className?: string, parent?: HTMLElement): Ref<HTMLElement>;
export type TriggerFn = (text: string, editor: LexicalEditor) => MenuTextMatch | null;
