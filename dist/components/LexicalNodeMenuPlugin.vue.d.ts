import type { CommandListenerPriority, NodeKey, TextNode } from 'lexical';
import type { MenuOption, MenuResolution } from './LexicalMenu/shared';
declare const _default: <TOption extends MenuOption>(__VLS_props: {
    onClose?: (() => any) | undefined;
    parent?: HTMLElement | undefined;
    nodeKey: NodeKey | null;
    onSelectOption?: ((payload: {
        option: TOption;
        textNodeContainingQuery: TextNode | null;
        closeMenu: () => void;
        matchingString: string;
    }) => any) | undefined;
    options: Array<TOption>;
    commandPriority?: CommandListenerPriority | undefined;
    onOpen?: ((payload: MenuResolution) => any) | undefined;
    anchorClassName?: string | undefined;
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
    emit: {
        (e: 'close'): void;
        (e: 'open', payload: MenuResolution): void;
        (e: 'selectOption', payload: {
            option: TOption;
            textNodeContainingQuery: TextNode | null;
            closeMenu: () => void;
            matchingString: string;
        }): void;
    };
    attrs: any;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        onClose?: (() => any) | undefined;
        parent?: HTMLElement | undefined;
        nodeKey: NodeKey | null;
        onSelectOption?: ((payload: {
            option: TOption;
            textNodeContainingQuery: TextNode | null;
            closeMenu: () => void;
            matchingString: string;
        }) => any) | undefined;
        options: Array<TOption>;
        commandPriority?: CommandListenerPriority | undefined;
        onOpen?: ((payload: MenuResolution) => any) | undefined;
        anchorClassName?: string | undefined;
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
    emit: {
        (e: 'close'): void;
        (e: 'open', payload: MenuResolution): void;
        (e: 'selectOption', payload: {
            option: TOption;
            textNodeContainingQuery: TextNode | null;
            closeMenu: () => void;
            matchingString: string;
        }): void;
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            onClose?: (() => any) | undefined;
            parent?: HTMLElement | undefined;
            nodeKey: NodeKey | null;
            onSelectOption?: ((payload: {
                option: TOption;
                textNodeContainingQuery: TextNode | null;
                closeMenu: () => void;
                matchingString: string;
            }) => any) | undefined;
            options: Array<TOption>;
            commandPriority?: CommandListenerPriority | undefined;
            onOpen?: ((payload: MenuResolution) => any) | undefined;
            anchorClassName?: string | undefined;
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
        emit: {
            (e: 'close'): void;
            (e: 'open', payload: MenuResolution): void;
            (e: 'selectOption', payload: {
                option: TOption;
                textNodeContainingQuery: TextNode | null;
                closeMenu: () => void;
                matchingString: string;
            }): void;
        };
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
