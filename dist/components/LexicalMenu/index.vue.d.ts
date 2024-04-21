import type { CommandListenerPriority, LexicalEditor, TextNode } from 'lexical';
import { type MenuOption, type MenuResolution } from './shared';
declare const _default: <TOption extends MenuOption>(__VLS_props: {
    close: () => void;
    onSelectOption?: ((payload: {
        option: TOption;
        textNodeContainingQuery: TextNode | null;
        closeMenu: () => void;
        matchingString: string;
    }) => any) | undefined;
    editor: LexicalEditor;
    anchorElementRef: HTMLElement;
    resolution: MenuResolution;
    options: Array<TOption>;
    shouldSplitNodeWithQuery?: boolean | undefined;
    commandPriority?: CommandListenerPriority | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: {
        default?(_: {
            listItemProps: {
                options: TOption[];
                selectOptionAndCleanUp: (selectedEntry: TOption) => void;
                selectedIndex: number | null;
                setHighlightedIndex: (index: number | null) => void;
            };
            anchorElementRef: HTMLElement;
            matchString: string;
        }): any;
    };
    emit: (e: 'selectOption', payload: {
        option: TOption;
        textNodeContainingQuery: TextNode | null;
        closeMenu: () => void;
        matchingString: string;
    }) => void;
    attrs: any;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        close: () => void;
        onSelectOption?: ((payload: {
            option: TOption;
            textNodeContainingQuery: TextNode | null;
            closeMenu: () => void;
            matchingString: string;
        }) => any) | undefined;
        editor: LexicalEditor;
        anchorElementRef: HTMLElement;
        resolution: MenuResolution;
        options: Array<TOption>;
        shouldSplitNodeWithQuery?: boolean | undefined;
        commandPriority?: CommandListenerPriority | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {
            listItemProps: {
                options: TOption[];
                selectOptionAndCleanUp: (selectedEntry: TOption) => void;
                selectedIndex: number | null;
                setHighlightedIndex: (index: number | null) => void;
            };
            anchorElementRef: HTMLElement;
            matchString: string;
        }): any;
    };
    emit: (e: 'selectOption', payload: {
        option: TOption;
        textNodeContainingQuery: TextNode | null;
        closeMenu: () => void;
        matchingString: string;
    }) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            close: () => void;
            onSelectOption?: ((payload: {
                option: TOption;
                textNodeContainingQuery: TextNode | null;
                closeMenu: () => void;
                matchingString: string;
            }) => any) | undefined;
            editor: LexicalEditor;
            anchorElementRef: HTMLElement;
            resolution: MenuResolution;
            options: Array<TOption>;
            shouldSplitNodeWithQuery?: boolean | undefined;
            commandPriority?: CommandListenerPriority | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {
                listItemProps: {
                    options: TOption[];
                    selectOptionAndCleanUp: (selectedEntry: TOption) => void;
                    selectedIndex: number | null;
                    setHighlightedIndex: (index: number | null) => void;
                };
                anchorElementRef: HTMLElement;
                matchString: string;
            }): any;
        };
        emit: (e: 'selectOption', payload: {
            option: TOption;
            textNodeContainingQuery: TextNode | null;
            closeMenu: () => void;
            matchingString: string;
        }) => void;
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
