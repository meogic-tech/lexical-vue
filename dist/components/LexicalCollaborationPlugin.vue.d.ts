import type { Doc } from 'yjs';
import type { ExcludedProperties, Provider } from '@lexical/yjs';
import type { InitialEditorStateType } from '../types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<{
    id: string;
    providerFactory: (id: string, yjsDocMap: Map<string, Doc>) => Provider;
    shouldBootstrap: boolean;
    username?: string | undefined;
    cursorColor?: string | undefined;
    cursorsContainerRef?: HTMLElement | null | undefined;
    initialEditorState?: InitialEditorStateType | undefined;
    excludedProperties?: ExcludedProperties | undefined;
    awarenessData?: object | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<{
    id: string;
    providerFactory: (id: string, yjsDocMap: Map<string, Doc>) => Provider;
    shouldBootstrap: boolean;
    username?: string | undefined;
    cursorColor?: string | undefined;
    cursorsContainerRef?: HTMLElement | null | undefined;
    initialEditorState?: InitialEditorStateType | undefined;
    excludedProperties?: ExcludedProperties | undefined;
    awarenessData?: object | undefined;
}>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
