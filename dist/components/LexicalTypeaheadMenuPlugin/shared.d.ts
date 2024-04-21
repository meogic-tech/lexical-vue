import type { CommandListenerPriority, LexicalCommand } from 'lexical';
import type { MenuOption, MenuRenderFn, MenuResolution, MenuTextMatch, TriggerFn } from '../LexicalMenu/shared';
export declare const PUNCTUATION = "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
export declare function getScrollParent(element: HTMLElement, includeHidden: boolean): HTMLElement | HTMLBodyElement;
export { useDynamicPositioning } from '../LexicalMenu/shared';
export declare const SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND: LexicalCommand<{
    index: number;
    option: MenuOption;
}>;
export declare function useBasicTypeaheadTriggerMatch(trigger: string, { minLength, maxLength }: {
    minLength?: number;
    maxLength?: number;
}): TriggerFn;
export interface TypeaheadMenuPluginProps<TOption extends MenuOption> {
    options: Array<TOption>;
    triggerFn: TriggerFn;
    anchorClassName?: string;
    commandPriority?: CommandListenerPriority;
    parent?: HTMLElement;
}
export { MenuOption, MenuRenderFn, MenuResolution, MenuTextMatch, TriggerFn };
