import type { TextNode } from 'lexical';
import type { Resolution, TypeaheadOption } from '../composables';
declare function selectOptionAndCleanUp(selectedEntry: TypeaheadOption): void;
declare function updateSelectedIndex(index: number): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    anchorElementRef: HTMLElement;
    resolution: Resolution;
    options: TypeaheadOption[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
    selectOption: (payload: {
        close: () => void;
        option: TypeaheadOption;
        textNodeContainingQuery: TextNode | null;
        matchingString: string;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    anchorElementRef: HTMLElement;
    resolution: Resolution;
    options: TypeaheadOption[];
}>>> & {
    onClose?: (() => any) | undefined;
    onSelectOption?: ((payload: {
        close: () => void;
        option: TypeaheadOption;
        textNodeContainingQuery: TextNode | null;
        matchingString: string;
    }) => any) | undefined;
}, {}, {}>, {
    default?(_: {
        listItemProps: {
            options: TypeaheadOption[];
            selectOptionAndCleanUp: typeof selectOptionAndCleanUp;
            selectedIndex: number | null;
            setHighlightedIndex: typeof updateSelectedIndex;
        };
        anchorElementRef: HTMLElement;
        matchString: string;
    }): any;
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
