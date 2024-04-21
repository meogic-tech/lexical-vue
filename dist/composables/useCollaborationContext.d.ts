import type { Doc } from 'yjs';
export interface CollaborationContextType {
    clientID: number;
    color: string;
    isCollabActive: boolean;
    name: string;
    yjsDocMap: Map<string, Doc>;
}
declare const _default: import("vue").Ref<{
    clientID: number;
    color: string;
    isCollabActive: boolean;
    name: string;
    yjsDocMap: Map<string, {
        gc: boolean;
        gcFilter: (arg0: import("yjs").Item) => boolean;
        clientID: number;
        guid: string;
        collectionid: string | null;
        share: Map<string, {
            _item: {
                origin: {
                    client: number;
                    clock: number;
                } | null;
                left: any | null;
                right: any | null;
                rightOrigin: {
                    client: number;
                    clock: number;
                } | null;
                parent: {
                    client: number;
                    clock: number;
                } | {
                    _item: any | null;
                    _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: any | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: any;
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: any | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                } | null;
                parentSub: string | null;
                redone: {
                    client: number;
                    clock: number;
                } | null;
                content: {
                    getLength: () => number;
                    getContent: () => any[];
                    isCountable: () => boolean;
                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                    delete: (_transaction: import("yjs").Transaction) => void;
                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                    getRef: () => number;
                };
                info: number;
                marker: boolean;
                keep: boolean;
                readonly countable: boolean;
                deleted: boolean;
                markDeleted: () => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                readonly next: any | null;
                readonly prev: any | null;
                readonly lastId: {
                    client: number;
                    clock: number;
                };
                mergeWith: (right: import("yjs").Item) => boolean;
                delete: (transaction: import("yjs").Transaction) => void;
                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            } | null;
            _map: Map<string, {
                origin: {
                    client: number;
                    clock: number;
                } | null;
                left: any | null;
                right: any | null;
                rightOrigin: {
                    client: number;
                    clock: number;
                } | null;
                parent: {
                    client: number;
                    clock: number;
                } | {
                    _item: any | null;
                    _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: any | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: any;
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: any | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                } | null;
                parentSub: string | null;
                redone: {
                    client: number;
                    clock: number;
                } | null;
                content: {
                    getLength: () => number;
                    getContent: () => any[];
                    isCountable: () => boolean;
                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                    delete: (_transaction: import("yjs").Transaction) => void;
                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                    getRef: () => number;
                };
                info: number;
                marker: boolean;
                keep: boolean;
                readonly countable: boolean;
                deleted: boolean;
                markDeleted: () => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                readonly next: any | null;
                readonly prev: any | null;
                readonly lastId: {
                    client: number;
                    clock: number;
                };
                mergeWith: (right: import("yjs").Item) => boolean;
                delete: (transaction: import("yjs").Transaction) => void;
                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
            _start: {
                origin: {
                    client: number;
                    clock: number;
                } | null;
                left: any | null;
                right: any | null;
                rightOrigin: {
                    client: number;
                    clock: number;
                } | null;
                parent: {
                    client: number;
                    clock: number;
                } | {
                    _item: any | null;
                    _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: any | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: any;
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: any | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                } | null;
                parentSub: string | null;
                redone: {
                    client: number;
                    clock: number;
                } | null;
                content: {
                    getLength: () => number;
                    getContent: () => any[];
                    isCountable: () => boolean;
                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                    delete: (_transaction: import("yjs").Transaction) => void;
                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                    getRef: () => number;
                };
                info: number;
                marker: boolean;
                keep: boolean;
                readonly countable: boolean;
                deleted: boolean;
                markDeleted: () => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                readonly next: any | null;
                readonly prev: any | null;
                readonly lastId: {
                    client: number;
                    clock: number;
                };
                mergeWith: (right: import("yjs").Item) => boolean;
                delete: (transaction: import("yjs").Transaction) => void;
                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            } | null;
            doc: any | null;
            _length: number;
            _eH: {
                l: ((arg0: import("yjs").YEvent<any>, arg1: import("yjs").Transaction) => void)[];
            };
            _dEH: {
                l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
            };
            _searchMarker: {
                p: {
                    origin: {
                        client: number;
                        clock: number;
                    } | null;
                    left: any | null;
                    right: any | null;
                    rightOrigin: {
                        client: number;
                        clock: number;
                    } | null;
                    parent: {
                        client: number;
                        clock: number;
                    } | {
                        _item: any | null;
                        _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                        _start: any | null;
                        doc: any | null;
                        _length: number;
                        _eH: {
                            l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                        };
                        _dEH: {
                            l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                        };
                        _searchMarker: any[] | null;
                        readonly parent: any | null;
                        _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                        _copy: () => import("yjs").AbstractType<any>;
                        clone: () => import("yjs").AbstractType<any>;
                        _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                        readonly _first: any | null;
                        _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                        observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        toJSON: () => any;
                    } | null;
                    parentSub: string | null;
                    redone: {
                        client: number;
                        clock: number;
                    } | null;
                    content: {
                        getLength: () => number;
                        getContent: () => any[];
                        isCountable: () => boolean;
                        copy: () => import("yjs/dist/src/internals").AbstractContent;
                        splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                        mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                        integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                        delete: (_transaction: import("yjs").Transaction) => void;
                        gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                        write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                        getRef: () => number;
                    };
                    info: number;
                    marker: boolean;
                    keep: boolean;
                    readonly countable: boolean;
                    deleted: boolean;
                    markDeleted: () => void;
                    getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                    readonly next: any | null;
                    readonly prev: any | null;
                    readonly lastId: {
                        client: number;
                        clock: number;
                    };
                    mergeWith: (right: import("yjs").Item) => boolean;
                    delete: (transaction: import("yjs").Transaction) => void;
                    gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                    write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                    id: {
                        client: number;
                        clock: number;
                    };
                    length: number;
                    integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                };
                index: number;
                timestamp: number;
            }[] | null;
            readonly parent: {
                _item: {
                    origin: {
                        client: number;
                        clock: number;
                    } | null;
                    left: any | null;
                    right: any | null;
                    rightOrigin: {
                        client: number;
                        clock: number;
                    } | null;
                    parent: {
                        client: number;
                        clock: number;
                    } | any | null;
                    parentSub: string | null;
                    redone: {
                        client: number;
                        clock: number;
                    } | null;
                    content: {
                        getLength: () => number;
                        getContent: () => any[];
                        isCountable: () => boolean;
                        copy: () => import("yjs/dist/src/internals").AbstractContent;
                        splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                        mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                        integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                        delete: (_transaction: import("yjs").Transaction) => void;
                        gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                        write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                        getRef: () => number;
                    };
                    info: number;
                    marker: boolean;
                    keep: boolean;
                    readonly countable: boolean;
                    deleted: boolean;
                    markDeleted: () => void;
                    getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                    readonly next: any | null;
                    readonly prev: any | null;
                    readonly lastId: {
                        client: number;
                        clock: number;
                    };
                    mergeWith: (right: import("yjs").Item) => boolean;
                    delete: (transaction: import("yjs").Transaction) => void;
                    gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                    write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                    id: {
                        client: number;
                        clock: number;
                    };
                    length: number;
                    integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                } | null;
                _map: Map<string, {
                    origin: {
                        client: number;
                        clock: number;
                    } | null;
                    left: any | null;
                    right: any | null;
                    rightOrigin: {
                        client: number;
                        clock: number;
                    } | null;
                    parent: {
                        client: number;
                        clock: number;
                    } | any | null;
                    parentSub: string | null;
                    redone: {
                        client: number;
                        clock: number;
                    } | null;
                    content: {
                        getLength: () => number;
                        getContent: () => any[];
                        isCountable: () => boolean;
                        copy: () => import("yjs/dist/src/internals").AbstractContent;
                        splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                        mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                        integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                        delete: (_transaction: import("yjs").Transaction) => void;
                        gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                        write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                        getRef: () => number;
                    };
                    info: number;
                    marker: boolean;
                    keep: boolean;
                    readonly countable: boolean;
                    deleted: boolean;
                    markDeleted: () => void;
                    getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                    readonly next: any | null;
                    readonly prev: any | null;
                    readonly lastId: {
                        client: number;
                        clock: number;
                    };
                    mergeWith: (right: import("yjs").Item) => boolean;
                    delete: (transaction: import("yjs").Transaction) => void;
                    gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                    write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                    id: {
                        client: number;
                        clock: number;
                    };
                    length: number;
                    integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                _start: {
                    origin: {
                        client: number;
                        clock: number;
                    } | null;
                    left: any | null;
                    right: any | null;
                    rightOrigin: {
                        client: number;
                        clock: number;
                    } | null;
                    parent: {
                        client: number;
                        clock: number;
                    } | any | null;
                    parentSub: string | null;
                    redone: {
                        client: number;
                        clock: number;
                    } | null;
                    content: {
                        getLength: () => number;
                        getContent: () => any[];
                        isCountable: () => boolean;
                        copy: () => import("yjs/dist/src/internals").AbstractContent;
                        splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                        mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                        integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                        delete: (_transaction: import("yjs").Transaction) => void;
                        gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                        write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                        getRef: () => number;
                    };
                    info: number;
                    marker: boolean;
                    keep: boolean;
                    readonly countable: boolean;
                    deleted: boolean;
                    markDeleted: () => void;
                    getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                    readonly next: any | null;
                    readonly prev: any | null;
                    readonly lastId: {
                        client: number;
                        clock: number;
                    };
                    mergeWith: (right: import("yjs").Item) => boolean;
                    delete: (transaction: import("yjs").Transaction) => void;
                    gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                    write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                    id: {
                        client: number;
                        clock: number;
                    };
                    length: number;
                    integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                } | null;
                doc: any | null;
                _length: number;
                _eH: {
                    l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                };
                _dEH: {
                    l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                };
                _searchMarker: {
                    p: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    };
                    index: number;
                    timestamp: number;
                }[] | null;
                readonly parent: any | null;
                _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                _copy: () => import("yjs").AbstractType<any>;
                clone: () => import("yjs").AbstractType<any>;
                _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                readonly _first: {
                    origin: {
                        client: number;
                        clock: number;
                    } | null;
                    left: any | null;
                    right: any | null;
                    rightOrigin: {
                        client: number;
                        clock: number;
                    } | null;
                    parent: {
                        client: number;
                        clock: number;
                    } | any | null;
                    parentSub: string | null;
                    redone: {
                        client: number;
                        clock: number;
                    } | null;
                    content: {
                        getLength: () => number;
                        getContent: () => any[];
                        isCountable: () => boolean;
                        copy: () => import("yjs/dist/src/internals").AbstractContent;
                        splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                        mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                        integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                        delete: (_transaction: import("yjs").Transaction) => void;
                        gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                        write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                        getRef: () => number;
                    };
                    info: number;
                    marker: boolean;
                    keep: boolean;
                    readonly countable: boolean;
                    deleted: boolean;
                    markDeleted: () => void;
                    getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                    readonly next: any | null;
                    readonly prev: any | null;
                    readonly lastId: {
                        client: number;
                        clock: number;
                    };
                    mergeWith: (right: import("yjs").Item) => boolean;
                    delete: (transaction: import("yjs").Transaction) => void;
                    gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                    write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                    id: {
                        client: number;
                        clock: number;
                    };
                    length: number;
                    integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                } | null;
                _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                toJSON: () => any;
            } | null;
            _integrate: (y: Doc, item: import("yjs").Item | null) => void;
            _copy: () => import("yjs").AbstractType<import("yjs").YEvent<any>>;
            clone: () => import("yjs").AbstractType<import("yjs").YEvent<any>>;
            _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
            readonly _first: {
                origin: {
                    client: number;
                    clock: number;
                } | null;
                left: any | null;
                right: any | null;
                rightOrigin: {
                    client: number;
                    clock: number;
                } | null;
                parent: {
                    client: number;
                    clock: number;
                } | {
                    _item: any | null;
                    _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: any | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: any;
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: any | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                } | null;
                parentSub: string | null;
                redone: {
                    client: number;
                    clock: number;
                } | null;
                content: {
                    getLength: () => number;
                    getContent: () => any[];
                    isCountable: () => boolean;
                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                    delete: (_transaction: import("yjs").Transaction) => void;
                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                    getRef: () => number;
                };
                info: number;
                marker: boolean;
                keep: boolean;
                readonly countable: boolean;
                deleted: boolean;
                markDeleted: () => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                readonly next: any | null;
                readonly prev: any | null;
                readonly lastId: {
                    client: number;
                    clock: number;
                };
                mergeWith: (right: import("yjs").Item) => boolean;
                delete: (transaction: import("yjs").Transaction) => void;
                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            } | null;
            _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
            observe: (f: (arg0: import("yjs").YEvent<any>, arg1: import("yjs").Transaction) => void) => void;
            observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
            unobserve: (f: (arg0: import("yjs").YEvent<any>, arg1: import("yjs").Transaction) => void) => void;
            unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
            toJSON: () => any;
        }> & Omit<Map<string, import("yjs").AbstractType<import("yjs").YEvent<any>>>, keyof Map<any, any>>;
        store: {
            clients: Map<number, ({
                origin: {
                    client: number;
                    clock: number;
                } | null;
                left: any | null;
                right: any | null;
                rightOrigin: {
                    client: number;
                    clock: number;
                } | null;
                parent: {
                    client: number;
                    clock: number;
                } | {
                    _item: any | null;
                    _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: any | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: any;
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: any | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                } | null;
                parentSub: string | null;
                redone: {
                    client: number;
                    clock: number;
                } | null;
                content: {
                    getLength: () => number;
                    getContent: () => any[];
                    isCountable: () => boolean;
                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                    delete: (_transaction: import("yjs").Transaction) => void;
                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                    getRef: () => number;
                };
                info: number;
                marker: boolean;
                keep: boolean;
                readonly countable: boolean;
                deleted: boolean;
                markDeleted: () => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                readonly next: any | null;
                readonly prev: any | null;
                readonly lastId: {
                    client: number;
                    clock: number;
                };
                mergeWith: (right: import("yjs").Item) => boolean;
                delete: (transaction: import("yjs").Transaction) => void;
                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            } | {
                delete: () => void;
                mergeWith: (right: import("yjs").GC) => boolean;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                readonly deleted: boolean;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            })[]> & Omit<Map<number, (import("yjs").Item | import("yjs").GC)[]>, keyof Map<any, any>>;
            pendingStructs: {
                missing: Map<number, number> & Omit<Map<number, number>, keyof Map<any, any>>;
                update: {
                    [x: number]: number;
                    readonly BYTES_PER_ELEMENT: number;
                    readonly buffer: {
                        readonly byteLength: number;
                        slice: (begin: number, end?: number | undefined) => ArrayBuffer;
                        readonly [Symbol.toStringTag]: string;
                    } | {
                        readonly byteLength: number;
                        slice: (begin: number, end?: number | undefined) => SharedArrayBuffer;
                        readonly [Symbol.species]: SharedArrayBuffer;
                        readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                    };
                    readonly byteLength: number;
                    readonly byteOffset: number;
                    copyWithin: (target: number, start: number, end?: number | undefined) => Uint8Array;
                    every: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean;
                    fill: (value: number, start?: number | undefined, end?: number | undefined) => Uint8Array;
                    filter: (predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any) => Uint8Array;
                    find: (predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number | undefined;
                    findIndex: (predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number;
                    forEach: (callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any) => void;
                    indexOf: (searchElement: number, fromIndex?: number | undefined) => number;
                    join: (separator?: string | undefined) => string;
                    lastIndexOf: (searchElement: number, fromIndex?: number | undefined) => number;
                    readonly length: number;
                    map: (callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any) => Uint8Array;
                    reduce: {
                        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                        <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
                    };
                    reduceRight: {
                        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                        (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                        <U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Uint8Array) => U_1, initialValue: U_1): U_1;
                    };
                    reverse: () => Uint8Array;
                    set: (array: ArrayLike<number>, offset?: number | undefined) => void;
                    slice: (start?: number | undefined, end?: number | undefined) => Uint8Array;
                    some: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean;
                    sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array;
                    subarray: (begin?: number | undefined, end?: number | undefined) => Uint8Array;
                    toLocaleString: () => string;
                    toString: () => string;
                    valueOf: () => Uint8Array;
                    entries: () => IterableIterator<[number, number]>;
                    keys: () => IterableIterator<number>;
                    values: () => IterableIterator<number>;
                    includes: (searchElement: number, fromIndex?: number | undefined) => boolean;
                    at: (index: number) => number | undefined;
                    findLast: {
                        <S extends number>(predicate: (value: number, index: number, array: Uint8Array) => value is S, thisArg?: any): S | undefined;
                        (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): number | undefined;
                    };
                    findLastIndex: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => number;
                    toReversed: () => Uint8Array;
                    toSorted: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array;
                    with: (index: number, value: number) => Uint8Array;
                    [Symbol.iterator]: () => IterableIterator<number>;
                    readonly [Symbol.toStringTag]: "Uint8Array";
                };
            } | null;
            pendingDs: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin: number, end?: number | undefined) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin: number, end?: number | undefined) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number | undefined) => Uint8Array;
                every: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number | undefined, end?: number | undefined) => Uint8Array;
                filter: (predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any) => Uint8Array;
                find: (predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number | undefined) => number;
                join: (separator?: string | undefined) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number | undefined) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any) => Uint8Array;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
                    <U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Uint8Array) => U_1, initialValue: U_1): U_1;
                };
                reverse: () => Uint8Array;
                set: (array: ArrayLike<number>, offset?: number | undefined) => void;
                slice: (start?: number | undefined, end?: number | undefined) => Uint8Array;
                some: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array;
                subarray: (begin?: number | undefined, end?: number | undefined) => Uint8Array;
                toLocaleString: () => string;
                toString: () => string;
                valueOf: () => Uint8Array;
                entries: () => IterableIterator<[number, number]>;
                keys: () => IterableIterator<number>;
                values: () => IterableIterator<number>;
                includes: (searchElement: number, fromIndex?: number | undefined) => boolean;
                at: (index: number) => number | undefined;
                findLast: {
                    <S extends number>(predicate: (value: number, index: number, array: Uint8Array) => value is S, thisArg?: any): S | undefined;
                    (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): number | undefined;
                };
                findLastIndex: (predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any) => number;
                toReversed: () => Uint8Array;
                toSorted: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array;
                with: (index: number, value: number) => Uint8Array;
                [Symbol.iterator]: () => IterableIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | null;
        };
        _transaction: {
            doc: any;
            deleteSet: {
                clients: Map<number, {
                    clock: number;
                    len: number;
                }[]> & Omit<Map<number, import("yjs/dist/src/internals").DeleteItem[]>, keyof Map<any, any>>;
            };
            beforeState: Map<number, number> & Omit<Map<number, number>, keyof Map<any, any>>;
            afterState: Map<number, number> & Omit<Map<number, number>, keyof Map<any, any>>;
            changed: Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, Set<string | null> & Omit<Set<string | null>, keyof Set<any>>> & Omit<Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, Set<string | null>>, keyof Map<any, any>>;
            changedParentTypes: Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, {
                target: any;
                currentTarget: {
                    _item: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    _map: Map<string, {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        };
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                };
                transaction: any;
                _changes: Object | null;
                _keys: (Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }> & Omit<Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }>, keyof Map<any, any>>) | null;
                _delta: {
                    insert?: string | object | any[] | {
                        _item: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _map: Map<string, {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                        _start: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        doc: any | null;
                        _length: number;
                        _eH: {
                            l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                        };
                        _dEH: {
                            l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                        };
                        _searchMarker: {
                            p: {
                                origin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                left: any | null;
                                right: any | null;
                                rightOrigin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                parent: {
                                    client: number;
                                    clock: number;
                                } | any | null;
                                parentSub: string | null;
                                redone: {
                                    client: number;
                                    clock: number;
                                } | null;
                                content: {
                                    getLength: () => number;
                                    getContent: () => any[];
                                    isCountable: () => boolean;
                                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                    delete: (_transaction: import("yjs").Transaction) => void;
                                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                    getRef: () => number;
                                };
                                info: number;
                                marker: boolean;
                                keep: boolean;
                                readonly countable: boolean;
                                deleted: boolean;
                                markDeleted: () => void;
                                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                                readonly next: any | null;
                                readonly prev: any | null;
                                readonly lastId: {
                                    client: number;
                                    clock: number;
                                };
                                mergeWith: (right: import("yjs").Item) => boolean;
                                delete: (transaction: import("yjs").Transaction) => void;
                                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                                id: {
                                    client: number;
                                    clock: number;
                                };
                                length: number;
                                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                            };
                            index: number;
                            timestamp: number;
                        }[] | null;
                        readonly parent: any | null;
                        _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                        _copy: () => import("yjs").AbstractType<any>;
                        clone: () => import("yjs").AbstractType<any>;
                        _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                        readonly _first: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                        observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        toJSON: () => any;
                    } | undefined;
                    retain?: number | undefined;
                    delete?: number | undefined;
                    attributes?: {
                        [x: string]: any;
                    } | undefined;
                }[] | null;
                _path: (string | number)[] | null;
                readonly path: (string | number)[];
                deletes: (struct: import("yjs").AbstractStruct) => boolean;
                readonly keys: Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }> & Omit<Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }>, keyof Map<any, any>>;
                readonly delta: {
                    insert?: string | object | any[] | {
                        _item: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _map: Map<string, {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                        _start: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        doc: any | null;
                        _length: number;
                        _eH: {
                            l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                        };
                        _dEH: {
                            l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                        };
                        _searchMarker: {
                            p: {
                                origin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                left: any | null;
                                right: any | null;
                                rightOrigin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                parent: {
                                    client: number;
                                    clock: number;
                                } | any | null;
                                parentSub: string | null;
                                redone: {
                                    client: number;
                                    clock: number;
                                } | null;
                                content: {
                                    getLength: () => number;
                                    getContent: () => any[];
                                    isCountable: () => boolean;
                                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                    delete: (_transaction: import("yjs").Transaction) => void;
                                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                    getRef: () => number;
                                };
                                info: number;
                                marker: boolean;
                                keep: boolean;
                                readonly countable: boolean;
                                deleted: boolean;
                                markDeleted: () => void;
                                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                                readonly next: any | null;
                                readonly prev: any | null;
                                readonly lastId: {
                                    client: number;
                                    clock: number;
                                };
                                mergeWith: (right: import("yjs").Item) => boolean;
                                delete: (transaction: import("yjs").Transaction) => void;
                                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                                id: {
                                    client: number;
                                    clock: number;
                                };
                                length: number;
                                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                            };
                            index: number;
                            timestamp: number;
                        }[] | null;
                        readonly parent: any | null;
                        _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                        _copy: () => import("yjs").AbstractType<any>;
                        clone: () => import("yjs").AbstractType<any>;
                        _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                        readonly _first: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                        observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        toJSON: () => any;
                    } | undefined;
                    retain?: number | undefined;
                    delete?: number | undefined;
                    attributes?: {
                        [x: string]: any;
                    } | undefined;
                }[];
                adds: (struct: import("yjs").AbstractStruct) => boolean;
                readonly changes: {
                    added: Set<{
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | {
                            _item: any | null;
                            _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                            _start: any | null;
                            doc: any | null;
                            _length: number;
                            _eH: {
                                l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                            };
                            _dEH: {
                                l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                            };
                            _searchMarker: {
                                p: any;
                                index: number;
                                timestamp: number;
                            }[] | null;
                            readonly parent: any | null;
                            _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                            _copy: () => import("yjs").AbstractType<any>;
                            clone: () => import("yjs").AbstractType<any>;
                            _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                            readonly _first: any | null;
                            _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                            observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            toJSON: () => any;
                        } | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Set<import("yjs").Item>, keyof Set<any>>;
                    deleted: Set<{
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | {
                            _item: any | null;
                            _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                            _start: any | null;
                            doc: any | null;
                            _length: number;
                            _eH: {
                                l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                            };
                            _dEH: {
                                l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                            };
                            _searchMarker: {
                                p: any;
                                index: number;
                                timestamp: number;
                            }[] | null;
                            readonly parent: any | null;
                            _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                            _copy: () => import("yjs").AbstractType<any>;
                            clone: () => import("yjs").AbstractType<any>;
                            _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                            readonly _first: any | null;
                            _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                            observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            toJSON: () => any;
                        } | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Set<import("yjs").Item>, keyof Set<any>>;
                    keys: Map<string, {
                        action: "delete" | "add" | "update";
                        oldValue: any;
                    }> & Omit<Map<string, {
                        action: "delete" | "add" | "update";
                        oldValue: any;
                    }>, keyof Map<any, any>>;
                    delta: {
                        insert?: string | any[] | undefined;
                        delete?: number | undefined;
                        retain?: number | undefined;
                    }[];
                };
            }[]> & Omit<Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, import("yjs").YEvent<any>[]>, keyof Map<any, any>>;
            _mergeStructs: {
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                readonly deleted: boolean;
                mergeWith: (right: import("yjs").AbstractStruct) => boolean;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number, encodingRef: number) => void;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            }[];
            origin: any;
            meta: Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>;
            local: boolean;
            subdocsAdded: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            subdocsRemoved: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            subdocsLoaded: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            _needFormattingCleanup: boolean;
        } | null;
        _transactionCleanups: {
            doc: any;
            deleteSet: {
                clients: Map<number, {
                    clock: number;
                    len: number;
                }[]> & Omit<Map<number, import("yjs/dist/src/internals").DeleteItem[]>, keyof Map<any, any>>;
            };
            beforeState: Map<number, number> & Omit<Map<number, number>, keyof Map<any, any>>;
            afterState: Map<number, number> & Omit<Map<number, number>, keyof Map<any, any>>;
            changed: Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, Set<string | null> & Omit<Set<string | null>, keyof Set<any>>> & Omit<Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, Set<string | null>>, keyof Map<any, any>>;
            changedParentTypes: Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, {
                target: any;
                currentTarget: {
                    _item: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    _map: Map<string, {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                    _start: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    doc: any | null;
                    _length: number;
                    _eH: {
                        l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                    };
                    _dEH: {
                        l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                    };
                    _searchMarker: {
                        p: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        };
                        index: number;
                        timestamp: number;
                    }[] | null;
                    readonly parent: any | null;
                    _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                    _copy: () => import("yjs").AbstractType<any>;
                    clone: () => import("yjs").AbstractType<any>;
                    _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                    readonly _first: {
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | any | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    } | null;
                    _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                    observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                    unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                    toJSON: () => any;
                };
                transaction: any;
                _changes: Object | null;
                _keys: (Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }> & Omit<Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }>, keyof Map<any, any>>) | null;
                _delta: {
                    insert?: string | object | any[] | {
                        _item: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _map: Map<string, {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                        _start: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        doc: any | null;
                        _length: number;
                        _eH: {
                            l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                        };
                        _dEH: {
                            l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                        };
                        _searchMarker: {
                            p: {
                                origin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                left: any | null;
                                right: any | null;
                                rightOrigin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                parent: {
                                    client: number;
                                    clock: number;
                                } | any | null;
                                parentSub: string | null;
                                redone: {
                                    client: number;
                                    clock: number;
                                } | null;
                                content: {
                                    getLength: () => number;
                                    getContent: () => any[];
                                    isCountable: () => boolean;
                                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                    delete: (_transaction: import("yjs").Transaction) => void;
                                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                    getRef: () => number;
                                };
                                info: number;
                                marker: boolean;
                                keep: boolean;
                                readonly countable: boolean;
                                deleted: boolean;
                                markDeleted: () => void;
                                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                                readonly next: any | null;
                                readonly prev: any | null;
                                readonly lastId: {
                                    client: number;
                                    clock: number;
                                };
                                mergeWith: (right: import("yjs").Item) => boolean;
                                delete: (transaction: import("yjs").Transaction) => void;
                                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                                id: {
                                    client: number;
                                    clock: number;
                                };
                                length: number;
                                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                            };
                            index: number;
                            timestamp: number;
                        }[] | null;
                        readonly parent: any | null;
                        _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                        _copy: () => import("yjs").AbstractType<any>;
                        clone: () => import("yjs").AbstractType<any>;
                        _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                        readonly _first: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                        observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        toJSON: () => any;
                    } | undefined;
                    retain?: number | undefined;
                    delete?: number | undefined;
                    attributes?: {
                        [x: string]: any;
                    } | undefined;
                }[] | null;
                _path: (string | number)[] | null;
                readonly path: (string | number)[];
                deletes: (struct: import("yjs").AbstractStruct) => boolean;
                readonly keys: Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }> & Omit<Map<string, {
                    action: "delete" | "add" | "update";
                    oldValue: any;
                    newValue: any;
                }>, keyof Map<any, any>>;
                readonly delta: {
                    insert?: string | object | any[] | {
                        _item: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _map: Map<string, {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        }> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                        _start: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        doc: any | null;
                        _length: number;
                        _eH: {
                            l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                        };
                        _dEH: {
                            l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                        };
                        _searchMarker: {
                            p: {
                                origin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                left: any | null;
                                right: any | null;
                                rightOrigin: {
                                    client: number;
                                    clock: number;
                                } | null;
                                parent: {
                                    client: number;
                                    clock: number;
                                } | any | null;
                                parentSub: string | null;
                                redone: {
                                    client: number;
                                    clock: number;
                                } | null;
                                content: {
                                    getLength: () => number;
                                    getContent: () => any[];
                                    isCountable: () => boolean;
                                    copy: () => import("yjs/dist/src/internals").AbstractContent;
                                    splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                    mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                    integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                    delete: (_transaction: import("yjs").Transaction) => void;
                                    gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                    write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                    getRef: () => number;
                                };
                                info: number;
                                marker: boolean;
                                keep: boolean;
                                readonly countable: boolean;
                                deleted: boolean;
                                markDeleted: () => void;
                                getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                                readonly next: any | null;
                                readonly prev: any | null;
                                readonly lastId: {
                                    client: number;
                                    clock: number;
                                };
                                mergeWith: (right: import("yjs").Item) => boolean;
                                delete: (transaction: import("yjs").Transaction) => void;
                                gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                                id: {
                                    client: number;
                                    clock: number;
                                };
                                length: number;
                                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                            };
                            index: number;
                            timestamp: number;
                        }[] | null;
                        readonly parent: any | null;
                        _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                        _copy: () => import("yjs").AbstractType<any>;
                        clone: () => import("yjs").AbstractType<any>;
                        _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                        readonly _first: {
                            origin: {
                                client: number;
                                clock: number;
                            } | null;
                            left: any | null;
                            right: any | null;
                            rightOrigin: {
                                client: number;
                                clock: number;
                            } | null;
                            parent: {
                                client: number;
                                clock: number;
                            } | any | null;
                            parentSub: string | null;
                            redone: {
                                client: number;
                                clock: number;
                            } | null;
                            content: {
                                getLength: () => number;
                                getContent: () => any[];
                                isCountable: () => boolean;
                                copy: () => import("yjs/dist/src/internals").AbstractContent;
                                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                                delete: (_transaction: import("yjs").Transaction) => void;
                                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                                getRef: () => number;
                            };
                            info: number;
                            marker: boolean;
                            keep: boolean;
                            readonly countable: boolean;
                            deleted: boolean;
                            markDeleted: () => void;
                            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                            readonly next: any | null;
                            readonly prev: any | null;
                            readonly lastId: {
                                client: number;
                                clock: number;
                            };
                            mergeWith: (right: import("yjs").Item) => boolean;
                            delete: (transaction: import("yjs").Transaction) => void;
                            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                            id: {
                                client: number;
                                clock: number;
                            };
                            length: number;
                            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                        } | null;
                        _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                        observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                        unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                        toJSON: () => any;
                    } | undefined;
                    retain?: number | undefined;
                    delete?: number | undefined;
                    attributes?: {
                        [x: string]: any;
                    } | undefined;
                }[];
                adds: (struct: import("yjs").AbstractStruct) => boolean;
                readonly changes: {
                    added: Set<{
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | {
                            _item: any | null;
                            _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                            _start: any | null;
                            doc: any | null;
                            _length: number;
                            _eH: {
                                l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                            };
                            _dEH: {
                                l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                            };
                            _searchMarker: {
                                p: any;
                                index: number;
                                timestamp: number;
                            }[] | null;
                            readonly parent: any | null;
                            _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                            _copy: () => import("yjs").AbstractType<any>;
                            clone: () => import("yjs").AbstractType<any>;
                            _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                            readonly _first: any | null;
                            _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                            observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            toJSON: () => any;
                        } | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Set<import("yjs").Item>, keyof Set<any>>;
                    deleted: Set<{
                        origin: {
                            client: number;
                            clock: number;
                        } | null;
                        left: any | null;
                        right: any | null;
                        rightOrigin: {
                            client: number;
                            clock: number;
                        } | null;
                        parent: {
                            client: number;
                            clock: number;
                        } | {
                            _item: any | null;
                            _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                            _start: any | null;
                            doc: any | null;
                            _length: number;
                            _eH: {
                                l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                            };
                            _dEH: {
                                l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                            };
                            _searchMarker: {
                                p: any;
                                index: number;
                                timestamp: number;
                            }[] | null;
                            readonly parent: any | null;
                            _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                            _copy: () => import("yjs").AbstractType<any>;
                            clone: () => import("yjs").AbstractType<any>;
                            _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                            readonly _first: any | null;
                            _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                            observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                            unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                            toJSON: () => any;
                        } | null;
                        parentSub: string | null;
                        redone: {
                            client: number;
                            clock: number;
                        } | null;
                        content: {
                            getLength: () => number;
                            getContent: () => any[];
                            isCountable: () => boolean;
                            copy: () => import("yjs/dist/src/internals").AbstractContent;
                            splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                            mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                            integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                            delete: (_transaction: import("yjs").Transaction) => void;
                            gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                            write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                            getRef: () => number;
                        };
                        info: number;
                        marker: boolean;
                        keep: boolean;
                        readonly countable: boolean;
                        deleted: boolean;
                        markDeleted: () => void;
                        getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
                        readonly next: any | null;
                        readonly prev: any | null;
                        readonly lastId: {
                            client: number;
                            clock: number;
                        };
                        mergeWith: (right: import("yjs").Item) => boolean;
                        delete: (transaction: import("yjs").Transaction) => void;
                        gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
                        write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
                        id: {
                            client: number;
                            clock: number;
                        };
                        length: number;
                        integrate: (transaction: import("yjs").Transaction, offset: number) => void;
                    }> & Omit<Set<import("yjs").Item>, keyof Set<any>>;
                    keys: Map<string, {
                        action: "delete" | "add" | "update";
                        oldValue: any;
                    }> & Omit<Map<string, {
                        action: "delete" | "add" | "update";
                        oldValue: any;
                    }>, keyof Map<any, any>>;
                    delta: {
                        insert?: string | any[] | undefined;
                        delete?: number | undefined;
                        retain?: number | undefined;
                    }[];
                };
            }[]> & Omit<Map<import("yjs").AbstractType<import("yjs").YEvent<any>>, import("yjs").YEvent<any>[]>, keyof Map<any, any>>;
            _mergeStructs: {
                id: {
                    client: number;
                    clock: number;
                };
                length: number;
                readonly deleted: boolean;
                mergeWith: (right: import("yjs").AbstractStruct) => boolean;
                write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number, encodingRef: number) => void;
                integrate: (transaction: import("yjs").Transaction, offset: number) => void;
            }[];
            origin: any;
            meta: Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>;
            local: boolean;
            subdocsAdded: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            subdocsRemoved: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            subdocsLoaded: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
            _needFormattingCleanup: boolean;
        }[];
        subdocs: Set<any> & Omit<Set<Doc>, keyof Set<any>>;
        _item: {
            origin: {
                client: number;
                clock: number;
            } | null;
            left: any | null;
            right: any | null;
            rightOrigin: {
                client: number;
                clock: number;
            } | null;
            parent: {
                client: number;
                clock: number;
            } | {
                _item: any | null;
                _map: Map<string, any> & Omit<Map<string, import("yjs").Item>, keyof Map<any, any>>;
                _start: any | null;
                doc: any | null;
                _length: number;
                _eH: {
                    l: ((arg0: any, arg1: import("yjs").Transaction) => void)[];
                };
                _dEH: {
                    l: ((arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void)[];
                };
                _searchMarker: {
                    p: any;
                    index: number;
                    timestamp: number;
                }[] | null;
                readonly parent: any | null;
                _integrate: (y: Doc, item: import("yjs").Item | null) => void;
                _copy: () => import("yjs").AbstractType<any>;
                clone: () => import("yjs").AbstractType<any>;
                _write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2) => void;
                readonly _first: any | null;
                _callObserver: (transaction: import("yjs").Transaction, _parentSubs: Set<string | null>) => void;
                observe: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                observeDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                unobserve: (f: (arg0: any, arg1: import("yjs").Transaction) => void) => void;
                unobserveDeep: (f: (arg0: import("yjs").YEvent<any>[], arg1: import("yjs").Transaction) => void) => void;
                toJSON: () => any;
            } | null;
            parentSub: string | null;
            redone: {
                client: number;
                clock: number;
            } | null;
            content: {
                getLength: () => number;
                getContent: () => any[];
                isCountable: () => boolean;
                copy: () => import("yjs/dist/src/internals").AbstractContent;
                splice: (_offset: number) => import("yjs/dist/src/internals").AbstractContent;
                mergeWith: (_right: import("yjs/dist/src/internals").AbstractContent) => boolean;
                integrate: (_transaction: import("yjs").Transaction, _item: import("yjs").Item) => void;
                delete: (_transaction: import("yjs").Transaction) => void;
                gc: (_store: import("yjs/dist/src/internals").StructStore) => void;
                write: (_encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, _offset: number) => void;
                getRef: () => number;
            };
            info: number;
            marker: boolean;
            keep: boolean;
            readonly countable: boolean;
            deleted: boolean;
            markDeleted: () => void;
            getMissing: (transaction: import("yjs").Transaction, store: import("yjs/dist/src/internals").StructStore) => number | null;
            readonly next: any | null;
            readonly prev: any | null;
            readonly lastId: {
                client: number;
                clock: number;
            };
            mergeWith: (right: import("yjs").Item) => boolean;
            delete: (transaction: import("yjs").Transaction) => void;
            gc: (store: import("yjs/dist/src/internals").StructStore, parentGCd: boolean) => void;
            write: (encoder: import("yjs").UpdateEncoderV1 | import("yjs").UpdateEncoderV2, offset: number) => void;
            id: {
                client: number;
                clock: number;
            };
            length: number;
            integrate: (transaction: import("yjs").Transaction, offset: number) => void;
        } | null;
        shouldLoad: boolean;
        autoLoad: boolean;
        meta: any;
        isLoaded: boolean;
        isSynced: boolean;
        whenLoaded: {
            then: <TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<any>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
            readonly [Symbol.toStringTag]: string;
        };
        whenSynced: {
            then: <TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<any>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<any>;
            readonly [Symbol.toStringTag]: string;
        };
        load: () => void;
        getSubdocs: () => Set<Doc>;
        getSubdocGuids: () => Set<string>;
        transact: <T>(f: (arg0: import("yjs").Transaction) => T, origin?: any) => T;
        get: <Type extends new () => import("yjs").AbstractType<any>>(name: string, TypeConstructor?: Type | undefined) => InstanceType<Type>;
        getArray: <T_1>(name?: string | undefined) => import("yjs").Array<T_1>;
        getText: (name?: string | undefined) => import("yjs").Text;
        getMap: <T_2>(name?: string | undefined) => import("yjs").Map<T_2>;
        getXmlElement: (name?: string | undefined) => import("yjs").XmlElement<{
            [key: string]: string;
        }>;
        getXmlFragment: (name?: string | undefined) => import("yjs").XmlFragment;
        toJSON: () => {
            [x: string]: any;
        };
        _observers: Map<string, Set<any> & Omit<Set<any>, keyof Set<any>>> & Omit<Map<string, Set<any>>, keyof Map<any, any>>;
        on: <NAME extends "load" | "sync" | "subdocs" | "destroy" | "update" | "updateV2" | "beforeAllTransactions" | "beforeTransaction" | "beforeObserverCalls" | "afterTransaction" | "afterTransactionCleanup" | "afterAllTransactions">(name: NAME, f: import("yjs/dist/src/internals").DocEvents[NAME]) => import("yjs/dist/src/internals").DocEvents[NAME];
        once: <NAME_1 extends "load" | "sync" | "subdocs" | "destroy" | "update" | "updateV2" | "beforeAllTransactions" | "beforeTransaction" | "beforeObserverCalls" | "afterTransaction" | "afterTransactionCleanup" | "afterAllTransactions">(name: NAME_1, f: import("yjs/dist/src/internals").DocEvents[NAME_1]) => void;
        off: <NAME_2 extends "load" | "sync" | "subdocs" | "destroy" | "update" | "updateV2" | "beforeAllTransactions" | "beforeTransaction" | "beforeObserverCalls" | "afterTransaction" | "afterTransactionCleanup" | "afterAllTransactions">(name: NAME_2, f: import("yjs/dist/src/internals").DocEvents[NAME_2]) => void;
        emit: <NAME_3 extends "load" | "sync" | "subdocs" | "destroy" | "update" | "updateV2" | "beforeAllTransactions" | "beforeTransaction" | "beforeObserverCalls" | "afterTransaction" | "afterTransactionCleanup" | "afterAllTransactions">(name: NAME_3, args: Parameters<import("yjs/dist/src/internals").DocEvents[NAME_3]>) => void;
        destroy: () => void;
    }> & Omit<Map<string, Doc>, keyof Map<any, any>>;
}>;
export default _default;
