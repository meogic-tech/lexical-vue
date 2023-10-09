import type { TextNode } from 'lexical';
import type { Resolution, TriggerFn, TypeaheadOption } from '../composables';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    anchorClassName?: string | undefined;
    triggerFn: TriggerFn;
    options: TypeaheadOption[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
    open: (payload: Resolution) => void;
    queryChange: (payload: string | null) => void;
    selectOption: (payload: {
        close: () => void;
        option: TypeaheadOption;
        textNodeContainingQuery: TextNode | null;
        matchingString: string;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    anchorClassName?: string | undefined;
    triggerFn: TriggerFn;
    options: TypeaheadOption[];
}>>> & {
    onClose?: (() => any) | undefined;
    onSelectOption?: ((payload: {
        close: () => void;
        option: TypeaheadOption;
        textNodeContainingQuery: TextNode | null;
        matchingString: string;
    }) => any) | undefined;
    onOpen?: ((payload: Resolution) => any) | undefined;
    onQueryChange?: ((payload: string | null) => any) | undefined;
}, {}, {}>, {
    default?(_: any): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
