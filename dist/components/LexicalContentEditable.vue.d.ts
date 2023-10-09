declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaActivedescendant?: string | undefined;
    ariaAutocomplete?: "none" | "inline" | "list" | "both" | undefined;
    ariaControls?: string | undefined;
    ariaDescribedby?: string | undefined;
    ariaExpanded?: boolean | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledby?: string | undefined;
    ariaMultiline?: boolean | undefined;
    ariaOwns?: string | undefined;
    ariaRequired?: boolean | undefined;
    autoCapitalize?: boolean | undefined;
    autoComplete?: boolean | undefined;
    autoCorrect?: boolean | undefined;
    id?: string | undefined;
    editable?: boolean | undefined;
    role?: string | undefined;
    spellcheck?: boolean | undefined;
    tabindex?: number | undefined;
    enableGrammarly?: boolean | undefined;
}>, {
    role: string;
    spellcheck: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaActivedescendant?: string | undefined;
    ariaAutocomplete?: "none" | "inline" | "list" | "both" | undefined;
    ariaControls?: string | undefined;
    ariaDescribedby?: string | undefined;
    ariaExpanded?: boolean | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledby?: string | undefined;
    ariaMultiline?: boolean | undefined;
    ariaOwns?: string | undefined;
    ariaRequired?: boolean | undefined;
    autoCapitalize?: boolean | undefined;
    autoComplete?: boolean | undefined;
    autoCorrect?: boolean | undefined;
    id?: string | undefined;
    editable?: boolean | undefined;
    role?: string | undefined;
    spellcheck?: boolean | undefined;
    tabindex?: number | undefined;
    enableGrammarly?: boolean | undefined;
}>, {
    role: string;
    spellcheck: boolean;
}>>>, {
    role: string;
    spellcheck: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
