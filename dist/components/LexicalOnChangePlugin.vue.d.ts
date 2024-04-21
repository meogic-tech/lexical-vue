import { EditorState, LexicalEditor } from 'lexical';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    ignoreInitialChange?: boolean | undefined;
    ignoreSelectionChange?: boolean | undefined;
    modelValue?: string | undefined;
}>, {
    ignoreInitialChange: boolean;
    ignoreSelectionChange: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (editorState: EditorState, editor: LexicalEditor) => void;
    "update:modelValue": (payload: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    ignoreInitialChange?: boolean | undefined;
    ignoreSelectionChange?: boolean | undefined;
    modelValue?: string | undefined;
}>, {
    ignoreInitialChange: boolean;
    ignoreSelectionChange: boolean;
}>>> & {
    onChange?: ((editorState: EditorState, editor: LexicalEditor) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
}, {
    ignoreInitialChange: boolean;
    ignoreSelectionChange: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
