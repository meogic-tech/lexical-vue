import type { CommandListenerPriority } from 'lexical';
import type { AutoEmbedOption, EmbedConfig } from './shared';
declare const _default: <TEmbedConfig extends EmbedConfig<unknown, import("./shared").EmbedMatchResult<unknown>>>(__VLS_props: {
    onOpenEmbedModalForConfig?: ((embedConfig: TEmbedConfig) => any) | undefined;
    embedConfigs: Array<TEmbedConfig>;
    getMenuOptions: (activeEmbedConfig: TEmbedConfig, embedFn: () => void, dismissFn: () => void) => Array<AutoEmbedOption>;
    menuCommandPriority?: CommandListenerPriority | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: {
        default?(_: {
            listItemProps: {
                options: AutoEmbedOption[];
                selectOptionAndCleanUp: (selectedEntry: AutoEmbedOption) => void;
                selectedIndex: number | null;
                setHighlightedIndex: (index: number | null) => void;
            };
            anchorElementRef: HTMLElement;
            matchString: string;
        }): any;
    };
    emit: (e: 'openEmbedModalForConfig', embedConfig: TEmbedConfig) => void;
    attrs: any;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        onOpenEmbedModalForConfig?: ((embedConfig: TEmbedConfig) => any) | undefined;
        embedConfigs: Array<TEmbedConfig>;
        getMenuOptions: (activeEmbedConfig: TEmbedConfig, embedFn: () => void, dismissFn: () => void) => Array<AutoEmbedOption>;
        menuCommandPriority?: CommandListenerPriority | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {
            listItemProps: {
                options: AutoEmbedOption[];
                selectOptionAndCleanUp: (selectedEntry: AutoEmbedOption) => void;
                selectedIndex: number | null;
                setHighlightedIndex: (index: number | null) => void;
            };
            anchorElementRef: HTMLElement;
            matchString: string;
        }): any;
    };
    emit: (e: 'openEmbedModalForConfig', embedConfig: TEmbedConfig) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            onOpenEmbedModalForConfig?: ((embedConfig: TEmbedConfig) => any) | undefined;
            embedConfigs: Array<TEmbedConfig>;
            getMenuOptions: (activeEmbedConfig: TEmbedConfig, embedFn: () => void, dismissFn: () => void) => Array<AutoEmbedOption>;
            menuCommandPriority?: CommandListenerPriority | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {
                listItemProps: {
                    options: AutoEmbedOption[];
                    selectOptionAndCleanUp: (selectedEntry: AutoEmbedOption) => void;
                    selectedIndex: number | null;
                    setHighlightedIndex: (index: number | null) => void;
                };
                anchorElementRef: HTMLElement;
                matchString: string;
            }): any;
        };
        emit: (e: 'openEmbedModalForConfig', embedConfig: TEmbedConfig) => void;
    } | undefined;
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
