"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  $createDecoratorBlockNode: () => $createDecoratorBlockNode,
  $isDecoratorBlockNode: () => $isDecoratorBlockNode,
  AutoEmbedOption: () => AutoEmbedOption,
  DecoratorBlockNode: () => DecoratorBlockNode,
  INSERT_EMBED_COMMAND: () => INSERT_EMBED_COMMAND,
  LexicalAutoEmbedPlugin: () => LexicalAutoEmbedPlugin_default,
  LexicalAutoFocusPlugin: () => LexicalAutoFocusPlugin_default,
  LexicalAutoLinkPlugin: () => LexicalAutoLinkPlugin_default,
  LexicalAutoScrollPlugin: () => LexicalAutoScrollPlugin_default,
  LexicalBlockWithAlignableContents: () => LexicalBlockWithAlignableContents_default,
  LexicalCharacterLimitPlugin: () => LexicalCharacterLimitPlugin_default,
  LexicalCheckListPlugin: () => LexicalCheckListPlugin_default,
  LexicalClearEditorPlugin: () => LexicalClearEditorPlugin_default,
  LexicalClickableLinkPlugin: () => LexicalClickableLinkPlugin_default,
  LexicalCollaborationPlugin: () => LexicalCollaborationPlugin_default,
  LexicalComposer: () => LexicalComposer_default,
  LexicalContentEditable: () => LexicalContentEditable_default,
  LexicalContextMenuPlugin: () => LexicalContextMenuPlugin_default,
  LexicalDecoratedTeleports: () => LexicalDecoratedTeleports_default,
  LexicalHashtagPlugin: () => LexicalHashtagPlugin_default,
  LexicalHistoryPlugin: () => LexicalHistoryPlugin_default,
  LexicalLinkPlugin: () => LexicalLinkPlugin_default,
  LexicalListPlugin: () => LexicalListPlugin_default,
  LexicalMarkdownShortcutPlugin: () => LexicalMarkdownShortcutPlugin_default,
  LexicalNodeMenuPlugin: () => LexicalNodeMenuPlugin_default,
  LexicalOnChangePlugin: () => LexicalOnChangePlugin_default,
  LexicalPlainTextPlugin: () => LexicalPlainTextPlugin_default,
  LexicalRichTextPlugin: () => LexicalRichTextPlugin_default,
  LexicalTabIndentationPlugin: () => LexicalTabIndentationPlugin_default,
  LexicalTablePlugin: () => LexicalTablePlugin_default,
  LexicalTreeViewPlugin: () => LexicalTreeViewPlugin_default,
  LexicalTypeaheadMenuPlugin: () => LexicalTypeaheadMenuPlugin_default,
  MenuOption: () => MenuOption2,
  URL_MATCHER: () => URL_MATCHER,
  mergePrevious: () => mergePrevious,
  useBasicTypeaheadTriggerMatch: () => useBasicTypeaheadTriggerMatch,
  useCanShowPlaceholder: () => useCanShowPlaceholder,
  useCharacterLimit: () => useCharacterLimit,
  useDecorators: () => useDecorators,
  useEditor: () => useEditor,
  useEffect: () => useEffect,
  useHistory: () => useHistory,
  useLexicalCommandsLog: () => useLexicalCommandsLog,
  useLexicalComposer: () => useLexicalComposer,
  useLexicalIsTextContentEmpty: () => useLexicalIsTextContentEmpty,
  useLexicalNodeSelection: () => useLexicalNodeSelection,
  useLexicalTextEntity: () => useLexicalTextEntity,
  useList: () => useList,
  useMounted: () => useMounted,
  usePlainTextSetup: () => usePlainTextSetup,
  useRichTextSetup: () => useRichTextSetup,
  useYjsCollaboration: () => useYjsCollaboration,
  useYjsFocusTracking: () => useYjsFocusTracking,
  useYjsHistory: () => useYjsHistory
});
module.exports = __toCommonJS(src_exports);

// src/composables/useCanShowPlaceholder.ts
var import_vue2 = require("vue");
var import_text = require("@lexical/text");
var import_utils = require("@lexical/utils");

// src/composables/useMounted.ts
var import_vue = require("vue");
function useMounted(cb) {
  let unregister;
  (0, import_vue.onMounted)(() => {
    unregister = cb();
  });
  (0, import_vue.onUnmounted)(() => {
    unregister?.();
  });
}

// src/composables/useCanShowPlaceholder.ts
function canShowPlaceholderFromCurrentEditorState(editor) {
  const currentCanShowPlaceholder = editor.getEditorState().read((0, import_text.$canShowPlaceholderCurry)(editor.isComposing()));
  return currentCanShowPlaceholder;
}
function useCanShowPlaceholder(editor) {
  const initialState = editor.getEditorState().read((0, import_text.$canShowPlaceholderCurry)(editor.isComposing()));
  const canShowPlaceholder = (0, import_vue2.ref)(initialState);
  function resetCanShowPlaceholder() {
    const currentCanShowPlaceholder = canShowPlaceholderFromCurrentEditorState(editor);
    canShowPlaceholder.value = currentCanShowPlaceholder;
  }
  useMounted(() => {
    return (0, import_utils.mergeRegister)(
      editor.registerUpdateListener(() => {
        resetCanShowPlaceholder();
      }),
      editor.registerEditableListener(() => {
        resetCanShowPlaceholder();
      })
    );
  });
  return (0, import_vue2.readonly)(canShowPlaceholder);
}

// src/composables/useCharacterLimit.ts
var import_overflow = require("@lexical/overflow");
var import_text2 = require("@lexical/text");
var import_utils2 = require("@lexical/utils");
var import_lexical = require("lexical");
var import_tiny_invariant = __toESM(require("tiny-invariant"), 1);
function useCharacterLimit(editor, maxCharacters, optional = Object.freeze({})) {
  const {
    strlen = (input) => input.length,
    // UTF-16
    remainingCharacters = (_characters) => {
    }
  } = optional;
  useMounted(() => {
    if (!editor.hasNodes([import_overflow.OverflowNode])) {
      (0, import_tiny_invariant.default)(
        false,
        "useCharacterLimit: OverflowNode not registered on editor"
      );
    }
    let text = editor.getEditorState().read(import_text2.$rootTextContent);
    let lastComputedTextLength = 0;
    return (0, import_utils2.mergeRegister)(
      editor.registerTextContentListener((currentText) => {
        text = currentText;
      }),
      editor.registerUpdateListener(({ dirtyLeaves }) => {
        const isComposing = editor.isComposing();
        const hasDirtyLeaves = dirtyLeaves.size > 0;
        if (isComposing || !hasDirtyLeaves)
          return;
        const textLength = strlen(text);
        const textLengthAboveThreshold = textLength > maxCharacters || lastComputedTextLength !== null && lastComputedTextLength > maxCharacters;
        const diff = maxCharacters - textLength;
        remainingCharacters(diff);
        if (lastComputedTextLength === null || textLengthAboveThreshold) {
          const offset = findOffset(text, maxCharacters, strlen);
          editor.update(
            () => {
              $wrapOverflowedNodes(offset);
            },
            {
              tag: "history-merge"
            }
          );
        }
        lastComputedTextLength = textLength;
      })
    );
  });
}
function findOffset(text, maxCharacters, strlen) {
  const Segmenter = Intl.Segmenter;
  let offsetUtf16 = 0;
  let offset = 0;
  if (typeof Segmenter === "function") {
    const segmenter = new Segmenter();
    const graphemes = segmenter.segment(text);
    for (const { segment: grapheme } of graphemes) {
      const nextOffset = offset + strlen(grapheme);
      if (nextOffset > maxCharacters)
        break;
      offset = nextOffset;
      offsetUtf16 += grapheme.length;
    }
  } else {
    const codepoints = Array.from(text);
    const codepointsLength = codepoints.length;
    for (let i = 0; i < codepointsLength; i++) {
      const codepoint = codepoints[i];
      const nextOffset = offset + strlen(codepoint);
      if (nextOffset > maxCharacters)
        break;
      offset = nextOffset;
      offsetUtf16 += codepoint.length;
    }
  }
  return offsetUtf16;
}
function $wrapOverflowedNodes(offset) {
  const dfsNodes = (0, import_utils2.$dfs)();
  const dfsNodesLength = dfsNodes.length;
  let accumulatedLength = 0;
  for (let i = 0; i < dfsNodesLength; i += 1) {
    const { node } = dfsNodes[i];
    if ((0, import_overflow.$isOverflowNode)(node)) {
      const previousLength = accumulatedLength;
      const nextLength = accumulatedLength + node.getTextContentSize();
      if (nextLength <= offset) {
        const parent = node.getParent();
        const previousSibling = node.getPreviousSibling();
        const nextSibling = node.getNextSibling();
        $unwrapNode(node);
        const selection = (0, import_lexical.$getSelection)();
        if ((0, import_lexical.$isRangeSelection)(selection) && (!selection.anchor.getNode().isAttached() || !selection.focus.getNode().isAttached())) {
          if ((0, import_lexical.$isTextNode)(previousSibling))
            previousSibling.select();
          else if ((0, import_lexical.$isTextNode)(nextSibling))
            nextSibling.select();
          else if (parent !== null)
            parent.select();
        }
      } else if (previousLength < offset) {
        const descendant = node.getFirstDescendant();
        const descendantLength = descendant !== null ? descendant.getTextContentSize() : 0;
        const previousPlusDescendantLength = previousLength + descendantLength;
        const firstDescendantIsSimpleText = (0, import_lexical.$isTextNode)(descendant) && descendant.isSimpleText();
        const firstDescendantDoesNotOverflow = previousPlusDescendantLength <= offset;
        if (firstDescendantIsSimpleText || firstDescendantDoesNotOverflow)
          $unwrapNode(node);
      }
    } else if ((0, import_lexical.$isLeafNode)(node)) {
      const previousAccumulatedLength = accumulatedLength;
      accumulatedLength += node.getTextContentSize();
      if (accumulatedLength > offset && !(0, import_overflow.$isOverflowNode)(node.getParent())) {
        const previousSelection = (0, import_lexical.$getSelection)();
        let overflowNode;
        if (previousAccumulatedLength < offset && (0, import_lexical.$isTextNode)(node) && node.isSimpleText()) {
          const [, overflowedText] = node.splitText(
            offset - previousAccumulatedLength
          );
          overflowNode = $wrapNode(overflowedText);
        } else {
          overflowNode = $wrapNode(node);
        }
        if (previousSelection !== null)
          (0, import_lexical.$setSelection)(previousSelection);
        mergePrevious(overflowNode);
      }
    }
  }
}
function $wrapNode(node) {
  const overflowNode = (0, import_overflow.$createOverflowNode)();
  node.insertBefore(overflowNode);
  overflowNode.append(node);
  return overflowNode;
}
function $unwrapNode(node) {
  const children = node.getChildren();
  const childrenLength = children.length;
  for (let i = 0; i < childrenLength; i++)
    node.insertBefore(children[i]);
  node.remove();
  return childrenLength > 0 ? children[childrenLength - 1] : null;
}
function mergePrevious(overflowNode) {
  const previousNode = overflowNode.getPreviousSibling();
  if (!(0, import_overflow.$isOverflowNode)(previousNode))
    return;
  const firstChild = overflowNode.getFirstChild();
  const previousNodeChildren = previousNode.getChildren();
  const previousNodeChildrenLength = previousNodeChildren.length;
  if (firstChild === null) {
    overflowNode.append(...previousNodeChildren);
  } else {
    for (let i = 0; i < previousNodeChildrenLength; i++)
      firstChild.insertBefore(previousNodeChildren[i]);
  }
  const selection = (0, import_lexical.$getSelection)();
  if ((0, import_lexical.$isRangeSelection)(selection)) {
    const anchor = selection.anchor;
    const anchorNode = anchor.getNode();
    const focus = selection.focus;
    const focusNode = anchor.getNode();
    if (anchorNode.is(previousNode)) {
      anchor.set(overflowNode.getKey(), anchor.offset, "element");
    } else if (anchorNode.is(overflowNode)) {
      anchor.set(
        overflowNode.getKey(),
        previousNodeChildrenLength + anchor.offset,
        "element"
      );
    }
    if (focusNode.is(previousNode)) {
      focus.set(overflowNode.getKey(), focus.offset, "element");
    } else if (focusNode.is(overflowNode)) {
      focus.set(
        overflowNode.getKey(),
        previousNodeChildrenLength + focus.offset,
        "element"
      );
    }
  }
  previousNode.remove();
}

// src/composables/useDecorators.ts
var import_vue3 = require("vue");
function useDecorators(editor) {
  const decorators = (0, import_vue3.shallowRef)(editor.getDecorators());
  useMounted(() => {
    return editor.registerDecoratorListener((nextDecorators) => {
      decorators.value = nextDecorators;
    });
  });
  return (0, import_vue3.computed)(() => {
    const decoratedTeleports = [];
    const decoratorKeys = Object.keys((0, import_vue3.unref)(decorators));
    for (let i = 0; i < decoratorKeys.length; i++) {
      const nodeKey = decoratorKeys[i];
      const vueDecorator = decorators.value[nodeKey];
      const element = editor.getElementByKey(nodeKey);
      if (element !== null) {
        decoratedTeleports.push(
          (0, import_vue3.h)(import_vue3.Teleport, {
            to: element
          }, vueDecorator)
        );
      }
    }
    return decoratedTeleports;
  });
}

// src/composables/useLexicalComposer.ts
var import_vue4 = require("vue");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"), 1);

// src/composables/inject.ts
var LexicalEditorProviderKey = "LexicalEditorProviderKey";

// src/composables/useLexicalComposer.ts
function useLexicalComposer() {
  const editor = (0, import_vue4.inject)(LexicalEditorProviderKey);
  if (!editor) {
    (0, import_tiny_invariant2.default)(
      false,
      "useLexicalComposer: cannot find a LexicalComposer"
    );
  }
  return editor;
}
var useEditor = useLexicalComposer;

// src/composables/useHistory.ts
var import_vue5 = require("vue");
var import_history = require("@lexical/history");
function useHistory(editor, externalHistoryState, delay) {
  const historyState = (0, import_vue5.computed)(
    () => (0, import_vue5.unref)(externalHistoryState) || (0, import_history.createEmptyHistoryState)()
  );
  (0, import_vue5.watchEffect)((onInvalidate) => {
    const unregisterListener = (0, import_history.registerHistory)((0, import_vue5.unref)(editor), historyState.value, (0, import_vue5.unref)(delay) || 1e3);
    onInvalidate(unregisterListener);
  });
}

// src/composables/useLexicalIsTextContentEmpty.ts
var import_vue6 = require("vue");
var import_text3 = require("@lexical/text");
function useLexicalIsTextContentEmpty(editor, trim) {
  const isEmpty = (0, import_vue6.ref)(
    editor.getEditorState().read((0, import_text3.$isRootTextContentEmptyCurry)(editor.isComposing(), trim))
  );
  useMounted(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      const isComposing = editor.isComposing();
      isEmpty.value = editorState.read(
        (0, import_text3.$isRootTextContentEmptyCurry)(isComposing, trim)
      );
    });
  });
  return (0, import_vue6.readonly)(isEmpty);
}

// src/composables/useLexicalNodeSelection.ts
var import_lexical2 = require("lexical");
var import_vue7 = require("vue");
function isNodeSelected(editor, key) {
  return editor.getEditorState().read(() => {
    const node = (0, import_lexical2.$getNodeByKey)(key);
    if (node === null)
      return false;
    return node.isSelected();
  });
}
function useLexicalNodeSelection(key) {
  const editor = useLexicalComposer();
  const isSelected = (0, import_vue7.ref)(isNodeSelected(editor, (0, import_vue7.unref)(key)));
  (0, import_vue7.watchEffect)((onInvalidate) => {
    const unregisterListener = editor.registerUpdateListener(() => {
      isSelected.value = isNodeSelected(editor, (0, import_vue7.unref)(key));
    });
    onInvalidate(() => {
      unregisterListener();
    });
  });
  const setSelected = (selected) => {
    editor.update(() => {
      let selection = (0, import_lexical2.$getSelection)();
      if (!(0, import_lexical2.$isNodeSelection)(selection)) {
        selection = (0, import_lexical2.$createNodeSelection)();
        (0, import_lexical2.$setSelection)(selection);
      }
      if ((0, import_lexical2.$isNodeSelection)(selection)) {
        if (selected)
          selection.add((0, import_vue7.unref)(key));
        else
          selection.delete((0, import_vue7.unref)(key));
      }
    });
  };
  const clearSelection = () => {
    editor.update(() => {
      const selection = (0, import_lexical2.$getSelection)();
      if ((0, import_lexical2.$isNodeSelection)(selection))
        selection.clear();
    });
  };
  return {
    isSelected: (0, import_vue7.readonly)(isSelected),
    setSelected,
    clearSelection
  };
}

// src/composables/useLexicalTextEntity.ts
var import_text4 = require("@lexical/text");
var import_utils3 = require("@lexical/utils");
function useLexicalTextEntity(getMatch, targetNode, createNode) {
  const editor = useLexicalComposer();
  useMounted(() => {
    return (0, import_utils3.mergeRegister)(
      ...(0, import_text4.registerLexicalTextEntity)(editor, getMatch, targetNode, createNode)
    );
  });
}

// src/composables/useList.ts
var import_list = require("@lexical/list");
var import_utils4 = require("@lexical/utils");
var import_lexical3 = require("lexical");
function useList(editor) {
  useMounted(() => {
    return (0, import_utils4.mergeRegister)(
      editor.registerCommand(
        import_list.INSERT_ORDERED_LIST_COMMAND,
        () => {
          (0, import_list.insertList)(editor, "number");
          return true;
        },
        import_lexical3.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_list.INSERT_UNORDERED_LIST_COMMAND,
        () => {
          (0, import_list.insertList)(editor, "bullet");
          return true;
        },
        import_lexical3.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_list.REMOVE_LIST_COMMAND,
        () => {
          (0, import_list.removeList)(editor);
          return true;
        },
        import_lexical3.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical3.INSERT_PARAGRAPH_COMMAND,
        () => {
          const hasHandledInsertParagraph = (0, import_list.$handleListInsertParagraph)();
          if (hasHandledInsertParagraph)
            return true;
          return false;
        },
        import_lexical3.COMMAND_PRIORITY_LOW
      )
    );
  });
}

// src/composables/usePlainTextSetup.ts
var import_dragon = require("@lexical/dragon");
var import_plain_text = require("@lexical/plain-text");
var import_utils5 = require("@lexical/utils");
function usePlainTextSetup(editor) {
  useMounted(() => {
    return (0, import_utils5.mergeRegister)(
      (0, import_plain_text.registerPlainText)(editor),
      (0, import_dragon.registerDragonSupport)(editor)
    );
  });
}

// src/composables/useRichTextSetup.ts
var import_dragon2 = require("@lexical/dragon");
var import_rich_text = require("@lexical/rich-text");
var import_utils6 = require("@lexical/utils");
function useRichTextSetup(editor) {
  useMounted(() => {
    return (0, import_utils6.mergeRegister)(
      (0, import_rich_text.registerRichText)(editor),
      (0, import_dragon2.registerDragonSupport)(editor)
    );
  });
}

// src/composables/useEffect.ts
var import_vue8 = require("vue");
function useEffect(cb, options) {
  (0, import_vue8.watchEffect)((onInvalidate) => {
    const unregister = cb();
    onInvalidate(() => unregister?.());
  }, {
    flush: "post",
    ...options
  });
}

// src/composables/useYjsCollaboration.ts
var import_utils7 = require("@lexical/utils");
var import_yjs = require("@lexical/yjs");
var import_lexical4 = require("lexical");
var import_yjs2 = require("yjs");
var import_vue9 = require("vue");
function useYjsCollaboration(editor, id, provider, docMap, name, color, shouldBootstrap, initialEditorState, excludedProperties, awarenessData) {
  const isReloadingDoc = (0, import_vue9.ref)(false);
  const doc = (0, import_vue9.ref)(docMap.get(id));
  const binding = (0, import_vue9.computed)(() => (0, import_yjs.createBinding)(editor, provider, id, (0, import_vue9.toRaw)(doc.value), docMap, excludedProperties));
  const connect = () => {
    provider.connect();
  };
  const disconnect = () => {
    try {
      provider.disconnect();
    } catch (e) {
    }
  };
  useEffect(() => {
    const { root } = binding.value;
    const { awareness } = provider;
    const onStatus = ({ status }) => {
      editor.dispatchCommand(import_yjs.CONNECTED_COMMAND, status === "connected");
    };
    const onSync = (isSynced) => {
      if (shouldBootstrap && isSynced && root.isEmpty() && root._xmlText._length === 0 && isReloadingDoc.value === false)
        initializeEditor(editor, initialEditorState);
      isReloadingDoc.value = false;
    };
    const onAwarenessUpdate = () => {
      (0, import_yjs.syncCursorPositions)(binding.value, provider);
    };
    const onYjsTreeChanges = (events, transaction) => {
      const origin = transaction.origin;
      if ((0, import_vue9.toRaw)(origin) !== binding.value) {
        const isFromUndoManger = origin instanceof import_yjs2.UndoManager;
        (0, import_yjs.syncYjsChangesToLexical)(binding.value, provider, events, isFromUndoManger);
      }
    };
    (0, import_yjs.initLocalState)(
      provider,
      name,
      color,
      document.activeElement === editor.getRootElement(),
      awarenessData || {}
    );
    const onProviderDocReload = (ydoc) => {
      clearEditorSkipCollab(editor, binding.value);
      doc.value = ydoc;
      docMap.set(id, ydoc);
      isReloadingDoc.value = true;
    };
    provider.on("reload", onProviderDocReload);
    provider.on("status", onStatus);
    provider.on("sync", onSync);
    awareness.on("update", onAwarenessUpdate);
    root.getSharedType().observeDeep(onYjsTreeChanges);
    const removeListener = editor.registerUpdateListener(
      ({ prevEditorState, editorState, dirtyLeaves, dirtyElements, normalizedNodes, tags }) => {
        if (tags.has("skip-collab") === false) {
          (0, import_yjs.syncLexicalUpdateToYjs)(
            binding.value,
            provider,
            prevEditorState,
            editorState,
            dirtyElements,
            dirtyLeaves,
            normalizedNodes,
            tags
          );
        }
      }
    );
    connect();
    return () => {
      if (isReloadingDoc.value === false)
        disconnect();
      provider.off("sync", onSync);
      provider.off("status", onStatus);
      provider.off("reload", onProviderDocReload);
      awareness.off("update", onAwarenessUpdate);
      root.getSharedType().unobserveDeep(onYjsTreeChanges);
      docMap.delete(id);
      removeListener();
    };
  });
  useEffect(() => {
    return editor.registerCommand(
      import_yjs.TOGGLE_CONNECT_COMMAND,
      (payload) => {
        if (connect !== void 0 && disconnect !== void 0) {
          const shouldConnect = payload;
          if (shouldConnect) {
            console.log("Collaboration connected!");
            connect();
          } else {
            console.log("Collaboration disconnected!");
            disconnect();
          }
        }
        return true;
      },
      import_lexical4.COMMAND_PRIORITY_EDITOR
    );
  });
  return binding;
}
function useYjsFocusTracking(editor, provider, name, color, awarenessData) {
  useEffect(() => {
    return (0, import_utils7.mergeRegister)(
      editor.registerCommand(
        import_lexical4.FOCUS_COMMAND,
        () => {
          (0, import_yjs.setLocalStateFocus)(provider, name, color, true, awarenessData || {});
          return false;
        },
        import_lexical4.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        import_lexical4.BLUR_COMMAND,
        () => {
          (0, import_yjs.setLocalStateFocus)(provider, name, color, false, awarenessData || {});
          return false;
        },
        import_lexical4.COMMAND_PRIORITY_EDITOR
      )
    );
  });
}
function useYjsHistory(editor, binding) {
  const undoManager = (0, import_vue9.computed)(() => (0, import_yjs.createUndoManager)(binding, binding.root.getSharedType()));
  useEffect(() => {
    const undo = () => {
      undoManager.value.undo();
    };
    const redo = () => {
      undoManager.value.redo();
    };
    return (0, import_utils7.mergeRegister)(
      editor.registerCommand(
        import_lexical4.UNDO_COMMAND,
        () => {
          undo();
          return true;
        },
        import_lexical4.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        import_lexical4.REDO_COMMAND,
        () => {
          redo();
          return true;
        },
        import_lexical4.COMMAND_PRIORITY_EDITOR
      )
    );
  });
  const clearHistory = () => {
    undoManager.value.clear();
  };
  return clearHistory;
}
function initializeEditor(editor, initialEditorState) {
  editor.update(
    () => {
      const root = (0, import_lexical4.$getRoot)();
      if (root.isEmpty()) {
        if (initialEditorState) {
          switch (typeof initialEditorState) {
            case "string": {
              const parsedEditorState = editor.parseEditorState(initialEditorState);
              editor.setEditorState(parsedEditorState, { tag: "history-merge" });
              break;
            }
            case "object": {
              editor.setEditorState(initialEditorState, { tag: "history-merge" });
              break;
            }
            case "function": {
              editor.update(
                () => {
                  const root1 = (0, import_lexical4.$getRoot)();
                  if (root1.isEmpty())
                    initialEditorState(editor);
                },
                { tag: "history-merge" }
              );
              break;
            }
          }
        } else {
          const paragraph = (0, import_lexical4.$createParagraphNode)();
          root.append(paragraph);
          const { activeElement } = document;
          if ((0, import_lexical4.$getSelection)() !== null || activeElement !== null && activeElement === editor.getRootElement())
            paragraph.select();
        }
      }
    },
    {
      tag: "history-merge"
    }
  );
}
function clearEditorSkipCollab(editor, binding) {
  editor.update(
    () => {
      const root = (0, import_lexical4.$getRoot)();
      root.clear();
      root.select();
    },
    {
      tag: "skip-collab"
    }
  );
  if (binding.cursors == null)
    return;
  const cursors = binding.cursors;
  if (cursors == null)
    return;
  const cursorsContainer = binding.cursorsContainer;
  if (cursorsContainer == null)
    return;
  const cursorsArr = Array.from(cursors.values());
  for (let i = 0; i < cursorsArr.length; i++) {
    const cursor = cursorsArr[i];
    const selection = cursor.selection;
    if (selection && selection.selections !== null) {
      const selections = selection.selections;
      for (let j = 0; j < selections.length; j++)
        cursorsContainer.removeChild(selections[i]);
    }
  }
}

// src/composables/useLexicalCommandsLog.ts
var import_lexical5 = require("lexical");
var import_vue10 = require("vue");
function useLexicalCommandsLog(editor) {
  const loggedCommands = (0, import_vue10.ref)([]);
  useMounted(() => {
    const unregisterCommandListeners = /* @__PURE__ */ new Set();
    for (const [command] of editor._commands) {
      unregisterCommandListeners.add(
        editor.registerCommand(
          command,
          (payload) => {
            loggedCommands.value = [
              ...loggedCommands.value,
              {
                payload,
                type: command.type ? command.type : "UNKNOWN"
              }
            ];
            if (loggedCommands.value.length > 10)
              loggedCommands.value.shift();
            return false;
          },
          import_lexical5.COMMAND_PRIORITY_HIGH
        )
      );
    }
    return () => {
      unregisterCommandListeners.forEach((unregister) => unregister());
    };
  });
  return (0, import_vue10.readonly)(loggedCommands);
}

// src/components/LexicalDecoratedTeleports.ts
var import_vue11 = require("vue");
var LexicalDecoratedTeleports_default = (0, import_vue11.defineComponent)({
  name: "LexicalDecoratedTeleports",
  setup() {
    const editor = useLexicalComposer();
    const decorators = useDecorators(editor);
    return () => decorators.value;
  }
});

// src/components/LexicalContentEditable.vue
var import_vue12 = require("vue");
var import_vue13 = require("vue");
var import_vue14 = require("vue");
var _hoisted_1 = ["id", "aria-activedescendant", "aria-autocomplete", "aria-controls", "aria-describedby", "aria-expanded", "aria-label", "aria-labelledby", "aria-multiline", "aria-owns", "aria-required", "autocapitalize", "autocomplete", "autocorrect", "contenteditable", "role", "spellcheck", "tabindex"];
var _sfc_main = /* @__PURE__ */ (0, import_vue12.defineComponent)({
  __name: "LexicalContentEditable",
  props: {
    ariaActivedescendant: {},
    ariaAutocomplete: {},
    ariaControls: {},
    ariaDescribedby: {},
    ariaExpanded: { type: Boolean },
    ariaLabel: {},
    ariaLabelledby: {},
    ariaMultiline: { type: Boolean },
    ariaOwns: {},
    ariaRequired: { type: Boolean },
    autoCapitalize: { type: Boolean },
    autoComplete: { type: Boolean },
    autoCorrect: { type: Boolean },
    id: {},
    editable: { type: Boolean },
    role: { default: "textbox" },
    spellcheck: { type: Boolean, default: true },
    tabindex: {},
    enableGrammarly: { type: Boolean }
  },
  setup(__props) {
    const root = (0, import_vue14.ref)(null);
    const editor = useLexicalComposer();
    const editable = (0, import_vue14.ref)(false);
    useMounted(() => {
      if (root.value) {
        editor.setRootElement(root.value);
        editable.value = editor.isEditable();
      }
      return editor.registerEditableListener((currentIsEditable) => {
        editable.value = currentIsEditable;
      });
    });
    return (_ctx, _cache) => {
      return (0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
        id: _ctx.id,
        ref_key: "root",
        ref: root,
        "aria-activedescendant": !editable.value ? void 0 : _ctx.ariaActivedescendant,
        "aria-autocomplete": !editable.value ? void 0 : _ctx.ariaAutocomplete,
        "aria-controls": !editable.value ? void 0 : _ctx.ariaControls,
        "aria-describedby": _ctx.ariaDescribedby,
        "aria-expanded": !editable.value ? void 0 : _ctx.role === "combobox" ? !!_ctx.ariaExpanded ? _ctx.ariaExpanded : void 0 : void 0,
        "aria-label": _ctx.ariaLabel,
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-multiline": _ctx.ariaMultiline,
        "aria-owns": !editable.value ? void 0 : _ctx.ariaOwns,
        "aria-required": _ctx.ariaRequired,
        autocapitalize: `${_ctx.autoCapitalize}`,
        autocomplete: _ctx.autoComplete,
        autocorrect: `${_ctx.autoCorrect}`,
        contenteditable: editable.value,
        role: !editable.value ? void 0 : _ctx.role,
        spellcheck: _ctx.spellcheck,
        tabindex: _ctx.tabindex
      }, null, 8, _hoisted_1);
    };
  }
});
var LexicalContentEditable_default = _sfc_main;

// src/components/LexicalPlainTextPlugin.vue
var import_vue15 = require("vue");
var import_vue16 = require("vue");
var _sfc_main2 = /* @__PURE__ */ (0, import_vue15.defineComponent)({
  __name: "LexicalPlainTextPlugin",
  setup(__props) {
    const editor = useLexicalComposer();
    const showPlaceholder = useCanShowPlaceholder(editor);
    usePlainTextSetup(editor);
    return (_ctx, _cache) => {
      return (0, import_vue16.openBlock)(), (0, import_vue16.createElementBlock)(
        import_vue16.Fragment,
        null,
        [
          (0, import_vue16.unref)(showPlaceholder) ? (0, import_vue16.renderSlot)(_ctx.$slots, "placeholder", { key: 0 }) : (0, import_vue16.createCommentVNode)("v-if", true),
          (0, import_vue16.renderSlot)(_ctx.$slots, "contentEditable"),
          (0, import_vue16.createVNode)((0, import_vue16.unref)(LexicalDecoratedTeleports_default))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
var LexicalPlainTextPlugin_default = _sfc_main2;

// src/components/LexicalComposer.vue
var import_vue17 = require("vue");
var import_vue18 = require("vue");
var import_vue19 = require("vue");
var import_lexical6 = require("lexical");
var _sfc_main3 = /* @__PURE__ */ (0, import_vue17.defineComponent)({
  __name: "LexicalComposer",
  props: {
    initialConfig: {}
  },
  emits: ["error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const HISTORY_MERGE_OPTIONS = { tag: "history-merge" };
    const editor = (0, import_lexical6.createEditor)({
      editable: props.initialConfig.editable,
      html: props.initialConfig.html,
      namespace: props.initialConfig.namespace,
      nodes: props.initialConfig.nodes,
      theme: props.initialConfig.theme,
      onError(error) {
        emit("error", error, editor);
      }
    });
    initializeEditor2(editor, props.initialConfig.editorState);
    function initializeEditor2(editor2, initialEditorState) {
      if (initialEditorState === null)
        return;
      if (initialEditorState === void 0) {
        editor2.update(() => {
          const root = (0, import_lexical6.$getRoot)();
          if (root.isEmpty()) {
            const paragraph = (0, import_lexical6.$createParagraphNode)();
            root.append(paragraph);
            const activeElement = document.activeElement;
            if ((0, import_lexical6.$getSelection)() !== null || activeElement !== null && activeElement === editor2.getRootElement())
              paragraph.select();
          }
        }, HISTORY_MERGE_OPTIONS);
      } else if (initialEditorState !== null) {
        switch (typeof initialEditorState) {
          case "string": {
            const parsedEditorState = editor2.parseEditorState(initialEditorState);
            editor2.setEditorState(parsedEditorState, HISTORY_MERGE_OPTIONS);
            break;
          }
          case "object": {
            editor2.setEditorState(initialEditorState, HISTORY_MERGE_OPTIONS);
            break;
          }
          case "function": {
            editor2.update(() => {
              const root = (0, import_lexical6.$getRoot)();
              if (root.isEmpty())
                initialEditorState(editor2);
            }, HISTORY_MERGE_OPTIONS);
            break;
          }
        }
      }
    }
    (0, import_vue19.provide)(LexicalEditorProviderKey, editor);
    (0, import_vue19.onMounted)(() => {
      const isEditable = props.initialConfig.editable;
      editor.setEditable(isEditable !== void 0 ? isEditable : true);
    });
    return (_ctx, _cache) => {
      return (0, import_vue18.renderSlot)(_ctx.$slots, "default");
    };
  }
});
var LexicalComposer_default = _sfc_main3;

// src/components/LexicalOnChangePlugin.vue
var import_vue20 = require("vue");
var import_vue21 = require("vue");
var import_lexical7 = require("lexical");
var _sfc_main4 = /* @__PURE__ */ (0, import_vue20.defineComponent)({
  __name: "LexicalOnChangePlugin",
  props: {
    ignoreInitialChange: { type: Boolean, default: true },
    ignoreSelectionChange: { type: Boolean, default: false },
    modelValue: {}
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useLexicalComposer();
    let unregisterListener;
    const getRoot = import_lexical7.$getRoot;
    (0, import_vue21.onMounted)(() => {
      unregisterListener = editor.registerUpdateListener(({ editorState, dirtyElements, dirtyLeaves, prevEditorState, tags }) => {
        if (props.ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0)
          return;
        if (props.ignoreInitialChange && prevEditorState.isEmpty())
          return;
        emit("change", editorState, editor);
        editorState.read(() => {
          emit("update:modelValue", getRoot().getTextContent());
        });
      });
    });
    (0, import_vue21.onUnmounted)(() => {
      unregisterListener?.();
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalOnChangePlugin_default = _sfc_main4;

// src/components/LexicalHistoryPlugin.vue
var import_vue22 = require("vue");
var _sfc_main5 = /* @__PURE__ */ (0, import_vue22.defineComponent)({
  __name: "LexicalHistoryPlugin",
  props: {
    externalHistoryState: {}
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    useHistory(editor, props.externalHistoryState);
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalHistoryPlugin_default = _sfc_main5;

// src/components/LexicalTreeViewPlugin.vue
var import_vue23 = require("vue");
var import_vue24 = require("vue");
var import_html = require("@lexical/html");
var import_link = require("@lexical/link");
var import_mark = require("@lexical/mark");
var import_table = require("@lexical/table");
var import_utils8 = require("@lexical/utils");
var import_lexical8 = require("lexical");
var import_vue25 = require("vue");
var _hoisted_12 = {
  key: 0,
  style: { "padding": "20px" }
};
var _hoisted_2 = /* @__PURE__ */ (0, import_vue24.createElementVNode)(
  "span",
  { style: { "margin-right": "20px" } },
  " Detected large EditorState, this can impact debugging performance. ",
  -1
  /* HOISTED */
);
var _hoisted_3 = { key: 1 };
var _hoisted_4 = ["max"];
var _sfc_main6 = /* @__PURE__ */ (0, import_vue23.defineComponent)({
  __name: "LexicalTreeViewPlugin",
  props: {
    treeTypeButtonClassName: {},
    timeTravelButtonClassName: {},
    timeTravelPanelSliderClassName: {},
    timeTravelPanelButtonClassName: {},
    timeTravelPanelClassName: {},
    viewClassName: {}
  },
  setup(__props) {
    const NON_SINGLE_WIDTH_CHARS_REPLACEMENT = Object.freeze({
      "	": "\\t",
      "\n": "\\n"
    });
    const NON_SINGLE_WIDTH_CHARS_REGEX = new RegExp(
      Object.keys(NON_SINGLE_WIDTH_CHARS_REPLACEMENT).join("|"),
      "g"
    );
    const SYMBOLS = Object.freeze({
      ancestorHasNextSibling: "|",
      ancestorIsLastChild: " ",
      hasNextSibling: "\u251C",
      isLastChild: "\u2514",
      selectedChar: "^",
      selectedLine: ">"
    });
    function printRangeSelection(selection) {
      let res = "";
      const formatText = printFormatProperties(selection);
      res += `: range ${formatText !== "" ? `{ ${formatText} }` : ""}`;
      const anchor = selection.anchor;
      const focus = selection.focus;
      const anchorOffset = anchor.offset;
      const focusOffset = focus.offset;
      res += `
  \u251C anchor { key: ${anchor.key}, offset: ${anchorOffset === null ? "null" : anchorOffset}, type: ${anchor.type} }`;
      res += `
  \u2514 focus { key: ${focus.key}, offset: ${focusOffset === null ? "null" : focusOffset}, type: ${focus.type} }`;
      return res;
    }
    function generateContent(editor2, commandsLog2, exportDOM) {
      const editorState = editor2.getEditorState();
      const editorConfig = editor2._config;
      const compositionKey = editor2._compositionKey;
      const editable = editor2._editable;
      if (exportDOM) {
        let htmlString = "";
        editorState.read(() => {
          htmlString = printPrettyHTML((0, import_html.$generateHtmlFromNodes)(editor2));
        });
        return htmlString;
      }
      let res = " root\n";
      const selectionString = editorState.read(() => {
        const selection = (0, import_lexical8.$getSelection)();
        visitTree((0, import_lexical8.$getRoot)(), (node, indent) => {
          const nodeKey = node.getKey();
          const nodeKeyDisplay = `(${nodeKey})`;
          const typeDisplay = node.getType() || "";
          const isSelected = node.isSelected();
          const idsDisplay = (0, import_mark.$isMarkNode)(node) ? ` id: [ ${node.getIDs().join(", ")} ] ` : "";
          res += `${isSelected ? SYMBOLS.selectedLine : " "} ${indent.join(
            " "
          )} ${nodeKeyDisplay} ${typeDisplay} ${idsDisplay} ${printNode(node)}
`;
          res += printSelectedCharsLine({
            indent,
            isSelected,
            node,
            nodeKeyDisplay,
            selection,
            typeDisplay
          });
        });
        return selection === null ? ": null" : (0, import_lexical8.$isRangeSelection)(selection) ? printRangeSelection(selection) : (0, import_table.$isTableSelection)(selection) ? printTableSelection(selection) : printNodeSelection(selection);
      });
      res += `
 selection${selectionString}`;
      res += "\n\n commands:";
      if (commandsLog2.length) {
        for (const { type, payload } of commandsLog2) {
          res += `
  \u2514 { type: ${type}, payload: ${payload instanceof Event ? payload.constructor.name : payload} }`;
        }
      } else {
        res += "\n  \u2514 None dispatched.";
      }
      res += "\n\n editor:";
      res += `
  \u2514 namespace ${editorConfig.namespace}`;
      if (compositionKey !== null)
        res += `
  \u2514 compositionKey ${compositionKey}`;
      res += `
  \u2514 editable ${String(editable)}`;
      return res;
    }
    function printNodeSelection(selection) {
      if (!(0, import_lexical8.$isNodeSelection)(selection))
        return "";
      return `: node
  \u2514 [${Array.from(selection._nodes).join(", ")}]`;
    }
    function printTableSelection(selection) {
      return `: table
  \u2514 { table: ${selection.tableKey}, anchorCell: ${selection.anchor.key}, focusCell: ${selection.focus.key} }`;
    }
    function visitTree(currentNode, visitor, indent = []) {
      const childNodes = currentNode.getChildren();
      const childNodesLength = childNodes.length;
      childNodes.forEach((childNode, i) => {
        visitor(
          childNode,
          indent.concat(
            i === childNodesLength - 1 ? SYMBOLS.isLastChild : SYMBOLS.hasNextSibling
          )
        );
        if ((0, import_lexical8.$isElementNode)(childNode)) {
          visitTree(
            childNode,
            visitor,
            indent.concat(
              i === childNodesLength - 1 ? SYMBOLS.ancestorIsLastChild : SYMBOLS.ancestorHasNextSibling
            )
          );
        }
      });
    }
    function normalize(text) {
      return Object.entries(NON_SINGLE_WIDTH_CHARS_REPLACEMENT).reduce(
        (acc, [key, value]) => acc.replace(new RegExp(key, "g"), String(value)),
        text
      );
    }
    function printNode(node) {
      if ((0, import_lexical8.$isTextNode)(node)) {
        const text = node.getTextContent();
        const title = text.length === 0 ? "(empty)" : `"${normalize(text)}"`;
        const properties = printAllTextNodeProperties(node);
        return [title, properties.length !== 0 ? `{ ${properties} }` : null].filter(Boolean).join(" ").trim();
      } else if ((0, import_link.$isLinkNode)(node)) {
        const link = node.getURL();
        const title = link.length === 0 ? "(empty)" : `"${normalize(link)}"`;
        const properties = printAllLinkNodeProperties(node);
        return [title, properties.length !== 0 ? `{ ${properties} }` : null].filter(Boolean).join(" ").trim();
      } else {
        return "";
      }
    }
    const FORMAT_PREDICATES = [
      (node) => node.hasFormat("bold") && "Bold",
      (node) => node.hasFormat("code") && "Code",
      (node) => node.hasFormat("italic") && "Italic",
      (node) => node.hasFormat("strikethrough") && "Strikethrough",
      (node) => node.hasFormat("subscript") && "Subscript",
      (node) => node.hasFormat("superscript") && "Superscript",
      (node) => node.hasFormat("underline") && "Underline"
    ];
    const DETAIL_PREDICATES = [
      (node) => node.isDirectionless() && "Directionless",
      (node) => node.isUnmergeable() && "Unmergeable"
    ];
    const MODE_PREDICATES = [
      (node) => node.isToken() && "Token",
      (node) => node.isSegmented() && "Segmented"
    ];
    function printAllTextNodeProperties(node) {
      return [
        printFormatProperties(node),
        printDetailProperties(node),
        printModeProperties(node)
      ].filter(Boolean).join(", ");
    }
    function printAllLinkNodeProperties(node) {
      return [
        printTargetProperties(node),
        printRelProperties(node),
        printTitleProperties(node)
      ].filter(Boolean).join(", ");
    }
    function printDetailProperties(nodeOrSelection) {
      let str = DETAIL_PREDICATES.map((predicate) => predicate(nodeOrSelection)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (str !== "")
        str = `detail: ${str}`;
      return str;
    }
    function printModeProperties(nodeOrSelection) {
      let str = MODE_PREDICATES.map((predicate) => predicate(nodeOrSelection)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (str !== "")
        str = `mode: ${str}`;
      return str;
    }
    function printFormatProperties(nodeOrSelection) {
      let str = FORMAT_PREDICATES.map((predicate) => predicate(nodeOrSelection)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (str !== "")
        str = `format: ${str}`;
      return str;
    }
    function printTargetProperties(node) {
      let str = node.getTarget();
      if (str != null)
        str = `target: ${str}`;
      return str;
    }
    function printRelProperties(node) {
      let str = node.getRel();
      if (str != null)
        str = `rel: ${str}`;
      return str;
    }
    function printTitleProperties(node) {
      let str = node.getTitle();
      if (str != null)
        str = `title: ${str}`;
      return str;
    }
    function printSelectedCharsLine({
      indent,
      isSelected,
      node,
      nodeKeyDisplay,
      selection,
      typeDisplay
    }) {
      if (!(0, import_lexical8.$isTextNode)(node) || !(0, import_lexical8.$isRangeSelection)(selection) || !isSelected || (0, import_lexical8.$isElementNode)(node))
        return "";
      const anchor = selection.anchor;
      const focus = selection.focus;
      if (node.getTextContent() === "" || anchor.getNode() === selection.focus.getNode() && anchor.offset === focus.offset)
        return "";
      const [start, end] = $getSelectionStartEnd(node, selection);
      if (start === end)
        return "";
      const selectionLastIndent = indent[indent.length - 1] === SYMBOLS.hasNextSibling ? SYMBOLS.ancestorHasNextSibling : SYMBOLS.ancestorIsLastChild;
      const indentionChars = [
        ...indent.slice(0, indent.length - 1),
        selectionLastIndent
      ];
      const unselectedChars = Array(start + 1).fill(" ");
      const selectedChars = Array(end - start).fill(SYMBOLS.selectedChar);
      const paddingLength = typeDisplay.length + 3;
      const nodePrintSpaces = Array(nodeKeyDisplay.length + paddingLength).fill(
        " "
      );
      return `${[
        SYMBOLS.selectedLine,
        indentionChars.join(" "),
        [...nodePrintSpaces, ...unselectedChars, ...selectedChars].join("")
      ].join(" ")}
`;
    }
    function printPrettyHTML(str) {
      const div = document.createElement("div");
      div.innerHTML = str.trim();
      return prettifyHTML(div, 0).innerHTML;
    }
    function prettifyHTML(node, level) {
      const indentBefore = Array.from({ length: level++ + 1 }).join("  ");
      const indentAfter = Array.from({ length: level - 1 }).join("  ");
      let textNode;
      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode(`
${indentBefore}`);
        node.insertBefore(textNode, node.children[i]);
        prettifyHTML(node.children[i], level);
        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode(`
${indentAfter}`);
          node.appendChild(textNode);
        }
      }
      return node;
    }
    function $getSelectionStartEnd(node, selection) {
      const anchorAndFocus = selection.getStartEndPoints();
      if ((0, import_lexical8.$isNodeSelection)(selection) || anchorAndFocus === null)
        return [-1, -1];
      const [anchor, focus] = anchorAndFocus;
      const textContent = node.getTextContent();
      const textLength = textContent.length;
      let start = -1;
      let end = -1;
      if (anchor.type === "text" && focus.type === "text") {
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        if (anchorNode === focusNode && node === anchorNode && anchor.offset !== focus.offset) {
          [start, end] = anchor.offset < focus.offset ? [anchor.offset, focus.offset] : [focus.offset, anchor.offset];
        } else if (node === anchorNode) {
          [start, end] = anchorNode.isBefore(focusNode) ? [anchor.offset, textLength] : [0, anchor.offset];
        } else if (node === focusNode) {
          [start, end] = focusNode.isBefore(anchorNode) ? [focus.offset, textLength] : [0, focus.offset];
        } else {
          [start, end] = [0, textLength];
        }
      }
      const numNonSingleWidthCharBeforeSelection = (textContent.slice(0, start).match(NON_SINGLE_WIDTH_CHARS_REGEX) || []).length;
      const numNonSingleWidthCharInSelection = (textContent.slice(start, end).match(NON_SINGLE_WIDTH_CHARS_REGEX) || []).length;
      return [
        start + numNonSingleWidthCharBeforeSelection,
        end + numNonSingleWidthCharBeforeSelection + numNonSingleWidthCharInSelection
      ];
    }
    const editor = useLexicalComposer();
    const timeStampedEditorStates = (0, import_vue25.ref)([]);
    const content = (0, import_vue25.ref)("");
    const timeTravelEnabled = (0, import_vue25.ref)(false);
    const showExportDOM = (0, import_vue25.ref)(false);
    const playingIndexRef = (0, import_vue25.ref)(0);
    const treeElementRef = (0, import_vue25.ref)(null);
    const inputRef = (0, import_vue25.ref)(null);
    const isPlaying = (0, import_vue25.ref)(false);
    const isLimited = (0, import_vue25.ref)(false);
    const showLimited = (0, import_vue25.ref)(false);
    const lastEditorStateRef = (0, import_vue25.ref)(null);
    const commandsLog = useLexicalCommandsLog(editor);
    function generateTree(editorState) {
      const treeText = generateContent(editor, commandsLog.value, showExportDOM.value);
      content.value = treeText;
      if (!timeTravelEnabled.value) {
        timeStampedEditorStates.value = [
          ...timeStampedEditorStates.value,
          [Date.now(), editorState]
        ];
      }
    }
    (0, import_vue25.watchEffect)(() => {
      const editorState = editor.getEditorState();
      if (!showLimited.value && editorState._nodeMap.size < 1e3)
        content.value = generateContent(editor, commandsLog.value, showExportDOM.value);
    });
    (0, import_vue25.watchEffect)((onInvalidate) => {
      const unregisterListener = (0, import_utils8.mergeRegister)(
        editor.registerUpdateListener(({ editorState }) => {
          if (!showLimited.value && editorState._nodeMap.size > 1e3) {
            lastEditorStateRef.value = editorState;
            isLimited.value = true;
            if (!showLimited.value)
              return;
          }
          generateTree(editorState);
        }),
        editor.registerEditableListener(() => {
          const treeText = generateContent(editor, commandsLog.value, showExportDOM.value);
          content.value = treeText;
        })
      );
      onInvalidate(() => {
        unregisterListener();
      });
    });
    const totalEditorStates = (0, import_vue25.computed)(() => timeStampedEditorStates.value.length);
    let timeoutId;
    (0, import_vue25.watchEffect)((onInvalidate) => {
      if (isPlaying.value) {
        const play = () => {
          const currentIndex = playingIndexRef.value;
          if (currentIndex === totalEditorStates.value - 1) {
            isPlaying.value = false;
            return;
          }
          const currentTime = timeStampedEditorStates.value[currentIndex][0];
          const nextTime = timeStampedEditorStates.value[currentIndex + 1][0];
          const timeDiff = nextTime - currentTime;
          timeoutId = setTimeout(() => {
            playingIndexRef.value++;
            const index = playingIndexRef.value;
            const input = inputRef.value;
            if (input !== null)
              input.value = String(index);
            editor.setEditorState(timeStampedEditorStates.value[index][1]);
            play();
          }, timeDiff);
        };
        play();
      }
      onInvalidate(() => {
        clearTimeout(timeoutId);
      });
    });
    let element = null;
    (0, import_vue25.watchEffect)((onInvalidate) => {
      element = treeElementRef.value;
      if (element !== null) {
        element.__lexicalEditor = editor;
        onInvalidate(() => {
          element.__lexicalEditor = null;
        });
      }
    });
    function enableTimeTravel() {
      const rootElement = editor.getRootElement();
      if (rootElement !== null) {
        rootElement.contentEditable = "false";
        playingIndexRef.value = totalEditorStates.value - 1;
        timeTravelEnabled.value = true;
      }
    }
    function updateEditorState(e) {
      const editorStateIndex = Number(e.target.value);
      const timeStampedEditorState = timeStampedEditorStates.value[editorStateIndex];
      if (timeStampedEditorState) {
        playingIndexRef.value = editorStateIndex;
        editor.setEditorState(timeStampedEditorState[1]);
      }
    }
    function exit() {
      const rootElement = editor.getRootElement();
      if (rootElement) {
        rootElement.contentEditable = "true";
        const index = timeStampedEditorStates.value.length - 1;
        const timeStampedEditorState = timeStampedEditorStates.value[index];
        editor.setEditorState(timeStampedEditorState[1]);
        const input = inputRef.value;
        if (input)
          input.value = String(index);
        timeTravelEnabled.value = false;
        isPlaying.value = false;
      }
    }
    return (_ctx, _cache) => {
      return (0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)(
        "div",
        {
          class: (0, import_vue24.normalizeClass)(_ctx.viewClassName)
        },
        [
          showLimited.value && isLimited.value ? ((0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)("div", _hoisted_12, [
            _hoisted_2,
            (0, import_vue24.createElementVNode)("button", {
              style: { "background": "transparent", "border": "1px solid white", "color": "white", "cursor": "pointer", "padding": "5px" },
              onClick: _cache[0] || (_cache[0] = ($event) => {
                {
                  showLimited.value = false;
                  const editorState = lastEditorStateRef.value;
                  if (editorState !== null) {
                    lastEditorStateRef.value = null;
                    generateTree(editorState);
                  }
                }
              })
            }, " Show full tree ")
          ])) : (0, import_vue24.createCommentVNode)("v-if", true),
          !showLimited.value ? ((0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)("div", _hoisted_3, [
            (0, import_vue24.createElementVNode)(
              "button",
              {
                class: (0, import_vue24.normalizeClass)(_ctx.treeTypeButtonClassName),
                type: "button",
                onClick: _cache[1] || (_cache[1] = ($event) => showExportDOM.value = !showExportDOM.value)
              },
              (0, import_vue24.toDisplayString)(showExportDOM.value ? "Tree" : "Export DOM"),
              3
              /* TEXT, CLASS */
            )
          ])) : (0, import_vue24.createCommentVNode)("v-if", true),
          !timeTravelEnabled.value && (showLimited.value || !isLimited.value) && totalEditorStates.value > 2 ? ((0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)(
            "button",
            {
              key: 2,
              class: (0, import_vue24.normalizeClass)(_ctx.timeTravelButtonClassName),
              onClick: enableTimeTravel
            },
            " Time Travel ",
            2
            /* CLASS */
          )) : (0, import_vue24.createCommentVNode)("v-if", true),
          showLimited.value || !isLimited.value ? ((0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)(
            "pre",
            {
              key: 3,
              ref_key: "treeElementRef",
              ref: treeElementRef
            },
            (0, import_vue24.toDisplayString)(content.value),
            513
            /* TEXT, NEED_PATCH */
          )) : (0, import_vue24.createCommentVNode)("v-if", true),
          timeTravelEnabled.value && (showLimited.value || !isLimited.value) ? ((0, import_vue24.openBlock)(), (0, import_vue24.createElementBlock)(
            "div",
            {
              key: 4,
              class: (0, import_vue24.normalizeClass)(_ctx.timeTravelPanelClassName)
            },
            [
              (0, import_vue24.createElementVNode)(
                "button",
                {
                  class: (0, import_vue24.normalizeClass)(_ctx.timeTravelPanelButtonClassName),
                  onClick: _cache[2] || (_cache[2] = ($event) => {
                    {
                      if (playingIndexRef.value === totalEditorStates.value - 1) {
                        playingIndexRef.value = 1;
                      }
                      isPlaying.value = !isPlaying.value;
                    }
                  })
                },
                (0, import_vue24.toDisplayString)(isPlaying.value ? "Pause" : "Play"),
                3
                /* TEXT, CLASS */
              ),
              (0, import_vue24.createElementVNode)("input", {
                ref_key: "inputRef",
                ref: inputRef,
                class: (0, import_vue24.normalizeClass)(_ctx.timeTravelPanelSliderClassName),
                type: "range",
                min: "1",
                max: totalEditorStates.value - 1,
                onInput: updateEditorState
              }, null, 42, _hoisted_4),
              (0, import_vue24.createElementVNode)(
                "button",
                {
                  class: (0, import_vue24.normalizeClass)(_ctx.timeTravelPanelButtonClassName),
                  onClick: exit
                },
                " Exit ",
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )) : (0, import_vue24.createCommentVNode)("v-if", true)
        ],
        2
        /* CLASS */
      );
    };
  }
});
var LexicalTreeViewPlugin_default = _sfc_main6;

// src/components/LexicalAutoFocusPlugin.vue
var import_vue26 = require("vue");
var import_vue27 = require("vue");
var _sfc_main7 = /* @__PURE__ */ (0, import_vue26.defineComponent)({
  __name: "LexicalAutoFocusPlugin",
  props: {
    defaultSelection: {}
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    (0, import_vue27.onMounted)(() => {
      (0, import_vue27.nextTick)(() => {
        editor.focus(
          () => {
            const activeElement = document.activeElement;
            const rootElement = editor.getRootElement();
            if (rootElement !== null && (activeElement === null || !rootElement.contains(activeElement))) {
              rootElement.focus({ preventScroll: true });
            }
          },
          { defaultSelection: props.defaultSelection }
        );
      });
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalAutoFocusPlugin_default = _sfc_main7;

// src/components/LexicalRichTextPlugin.vue
var import_vue28 = require("vue");
var import_vue29 = require("vue");
var _sfc_main8 = /* @__PURE__ */ (0, import_vue28.defineComponent)({
  __name: "LexicalRichTextPlugin",
  setup(__props) {
    const editor = useLexicalComposer();
    const showPlaceholder = useCanShowPlaceholder(editor);
    useRichTextSetup(editor);
    return (_ctx, _cache) => {
      return (0, import_vue29.openBlock)(), (0, import_vue29.createElementBlock)(
        import_vue29.Fragment,
        null,
        [
          (0, import_vue29.renderSlot)(_ctx.$slots, "contentEditable"),
          (0, import_vue29.unref)(showPlaceholder) ? (0, import_vue29.renderSlot)(_ctx.$slots, "placeholder", { key: 0 }) : (0, import_vue29.createCommentVNode)("v-if", true),
          (0, import_vue29.createVNode)((0, import_vue29.unref)(LexicalDecoratedTeleports_default))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
var LexicalRichTextPlugin_default = _sfc_main8;

// src/components/LexicalListPlugin.vue
var import_vue30 = require("vue");
var _sfc_main9 = /* @__PURE__ */ (0, import_vue30.defineComponent)({
  __name: "LexicalListPlugin",
  setup(__props) {
    const editor = useLexicalComposer();
    useList(editor);
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalListPlugin_default = _sfc_main9;

// src/components/LexicalLinkPlugin.vue
var import_vue31 = require("vue");
var import_link2 = require("@lexical/link");
var import_lexical9 = require("lexical");
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_utils9 = require("@lexical/utils");
var _sfc_main10 = /* @__PURE__ */ (0, import_vue31.defineComponent)({
  __name: "LexicalLinkPlugin",
  props: {
    validateUrl: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    useMounted(() => {
      if (!editor.hasNodes([import_link2.LinkNode]))
        (0, import_tiny_invariant3.default)(false, "LinkPlugin: LinkNode not registered on editor");
      return (0, import_utils9.mergeRegister)(
        editor.registerCommand(
          import_link2.TOGGLE_LINK_COMMAND,
          (payload) => {
            if (payload === null) {
              (0, import_link2.toggleLink)(payload);
              return true;
            } else if (typeof payload === "string") {
              if (props.validateUrl === void 0 || props.validateUrl(payload)) {
                (0, import_link2.toggleLink)(payload);
                return true;
              }
              return false;
            } else {
              const { url, target, rel, title } = payload;
              (0, import_link2.toggleLink)(url, { rel, target, title });
              return true;
            }
          },
          import_lexical9.COMMAND_PRIORITY_LOW
        ),
        props.validateUrl !== void 0 ? editor.registerCommand(
          import_lexical9.PASTE_COMMAND,
          (event) => {
            const selection = (0, import_lexical9.$getSelection)();
            if (!(0, import_lexical9.$isRangeSelection)(selection) || selection.isCollapsed() || !(event instanceof ClipboardEvent) || event.clipboardData == null)
              return false;
            const clipboardText = event.clipboardData.getData("text");
            if (!props.validateUrl?.(clipboardText))
              return false;
            if (!selection.getNodes().some((node) => (0, import_lexical9.$isElementNode)(node))) {
              editor.dispatchCommand(import_link2.TOGGLE_LINK_COMMAND, clipboardText);
              event.preventDefault();
              return true;
            }
            return false;
          },
          import_lexical9.COMMAND_PRIORITY_LOW
        ) : () => {
        }
      );
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalLinkPlugin_default = _sfc_main10;

// src/components/LexicalTablePlugin.vue
var import_vue32 = require("vue");
var import_table2 = require("@lexical/table");
var import_utils10 = require("@lexical/utils");
var import_lexical10 = require("lexical");
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var _sfc_main11 = /* @__PURE__ */ (0, import_vue32.defineComponent)({
  __name: "LexicalTablePlugin",
  props: {
    hasCellMerge: { type: Boolean, default: true },
    hasCellBackgroundColor: { type: Boolean, default: true },
    hasTabHandler: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    useMounted(() => {
      if (!editor.hasNodes([import_table2.TableNode, import_table2.TableCellNode, import_table2.TableRowNode])) {
        (0, import_tiny_invariant4.default)(
          false,
          "TablePlugin: TableNode, TableCellNode or TableRowNode not registered on editor"
        );
      }
      return editor.registerCommand(
        import_table2.INSERT_TABLE_COMMAND,
        ({ columns, rows, includeHeaders }) => {
          const tableNode = (0, import_table2.$createTableNodeWithDimensions)(
            Number(rows),
            Number(columns),
            includeHeaders
          );
          (0, import_utils10.$insertNodeToNearestRoot)(tableNode);
          const firstDescendant = tableNode.getFirstDescendant();
          if ((0, import_lexical10.$isTextNode)(firstDescendant))
            firstDescendant.select();
          return true;
        },
        import_lexical10.COMMAND_PRIORITY_EDITOR
      );
    });
    useMounted(() => {
      const tableSelections = /* @__PURE__ */ new Map();
      const initializeTableNode = (tableNode) => {
        const nodeKey = tableNode.getKey();
        const tableElement = editor.getElementByKey(
          nodeKey
        );
        if (tableElement && !tableSelections.has(nodeKey)) {
          const tableSelection = (0, import_table2.applyTableHandlers)(
            tableNode,
            tableElement,
            editor,
            props.hasTabHandler
          );
          tableSelections.set(nodeKey, tableSelection);
        }
      };
      editor.getEditorState().read(() => {
        const tableNodes = (0, import_lexical10.$nodesOfType)(import_table2.TableNode);
        for (const tableNode of tableNodes) {
          if ((0, import_table2.$isTableNode)(tableNode))
            initializeTableNode(tableNode);
        }
      });
      const unregisterMutationListener = editor.registerMutationListener(
        import_table2.TableNode,
        (nodeMutations) => {
          for (const [nodeKey, mutation] of nodeMutations) {
            if (mutation === "created") {
              editor.getEditorState().read(() => {
                const tableNode = (0, import_lexical10.$getNodeByKey)(nodeKey);
                if ((0, import_table2.$isTableNode)(tableNode))
                  initializeTableNode(tableNode);
              });
            } else if (mutation === "destroyed") {
              const tableSelection = tableSelections.get(nodeKey);
              if (tableSelection !== void 0) {
                tableSelection.removeListeners();
                tableSelections.delete(nodeKey);
              }
            }
          }
        }
      );
      return () => {
        unregisterMutationListener();
        for (const [, tableSelection] of tableSelections)
          tableSelection.removeListeners();
      };
    });
    useEffect(() => {
      if (props.hasCellMerge)
        return;
      return editor.registerNodeTransform(import_table2.TableCellNode, (node) => {
        if (node.getColSpan() > 1 || node.getRowSpan() > 1) {
          const [, , gridNode] = (0, import_table2.$getNodeTriplet)(node);
          const [gridMap] = (0, import_table2.$computeTableMap)(gridNode, node, node);
          const rowsCount = gridMap.length;
          const columnsCount = gridMap[0].length;
          let row = gridNode.getFirstChild();
          (0, import_tiny_invariant4.default)(
            (0, import_table2.$isTableRowNode)(row),
            "Expected TableNode first child to be a RowNode"
          );
          const unmerged = [];
          for (let i = 0; i < rowsCount; i++) {
            if (i !== 0) {
              row = row.getNextSibling();
              (0, import_tiny_invariant4.default)(
                (0, import_table2.$isTableRowNode)(row),
                "Expected TableNode first child to be a RowNode"
              );
            }
            let lastRowCell = null;
            for (let j = 0; j < columnsCount; j++) {
              const cellMap = gridMap[i][j];
              const cell = cellMap.cell;
              if (cellMap.startRow === i && cellMap.startColumn === j) {
                lastRowCell = cell;
                unmerged.push(cell);
              } else if (cell.getColSpan() > 1 || cell.getRowSpan() > 1) {
                (0, import_tiny_invariant4.default)(
                  (0, import_table2.$isTableCellNode)(cell),
                  "Expected TableNode cell to be a TableCellNode"
                );
                const newCell = (0, import_table2.$createTableCellNode)(cell.__headerState);
                if (lastRowCell !== null)
                  lastRowCell.insertAfter(newCell);
                else
                  (0, import_utils10.$insertFirst)(row, newCell);
              }
            }
          }
          for (const cell of unmerged) {
            cell.setColSpan(1);
            cell.setRowSpan(1);
          }
        }
      });
    });
    useEffect(() => {
      if (props.hasCellBackgroundColor)
        return;
      return editor.registerNodeTransform(import_table2.TableCellNode, (node) => {
        if (node.getBackgroundColor() !== null)
          node.setBackgroundColor(null);
      });
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalTablePlugin_default = _sfc_main11;

// src/components/LexicalClearEditorPlugin.vue
var import_vue33 = require("vue");
var import_lexical11 = require("lexical");
var import_vue34 = require("vue");
var _sfc_main12 = /* @__PURE__ */ (0, import_vue33.defineComponent)({
  __name: "LexicalClearEditorPlugin",
  emits: ["clear"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const editor = useLexicalComposer();
    const attrs = (0, import_vue34.useAttrs)();
    useMounted(() => {
      const emitExists = Boolean(attrs.onClear);
      return editor.registerCommand(
        import_lexical11.CLEAR_EDITOR_COMMAND,
        (_payload) => {
          editor.update(() => {
            if (emitExists) {
              const root = (0, import_lexical11.$getRoot)();
              const selection = (0, import_lexical11.$getSelection)();
              const paragraph = (0, import_lexical11.$createParagraphNode)();
              root.clear();
              root.append(paragraph);
              if (selection !== null)
                paragraph.select();
            } else {
              emit("clear");
            }
          });
          return true;
        },
        import_lexical11.COMMAND_PRIORITY_EDITOR
      );
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalClearEditorPlugin_default = _sfc_main12;

// src/components/LexicalCharacterLimitPlugin.vue
var import_vue35 = require("vue");
var import_vue36 = require("vue");
var import_vue37 = require("vue");
var CHARACTER_LIMIT = 5;
var _sfc_main13 = /* @__PURE__ */ (0, import_vue35.defineComponent)({
  __name: "LexicalCharacterLimitPlugin",
  props: {
    charset: { default: "UTF-16" }
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    let textEncoderInstance = null;
    function textEncoder() {
      if (window.TextEncoder === void 0)
        return null;
      if (textEncoderInstance === null)
        textEncoderInstance = new window.TextEncoder();
      return textEncoderInstance;
    }
    function utf8Length(text) {
      const currentTextEncoder = textEncoder();
      if (currentTextEncoder === null) {
        const m = encodeURIComponent(text).match(/%[89ABab]/g);
        return text.length + (m ? m.length : 0);
      }
      return currentTextEncoder.encode(text).length;
    }
    const remainingCharacters = (0, import_vue37.ref)(0);
    function setRemainingCharacters(payload) {
      remainingCharacters.value = payload;
    }
    const characterLimitProps = (0, import_vue37.computed)(
      () => ({
        remainingCharacters: setRemainingCharacters,
        strlen: (text) => {
          if (props.charset === "UTF-8")
            return utf8Length(text);
          else if (props.charset === "UTF-16")
            return text.length;
          else
            throw new Error("Unrecognized charset");
        }
      })
    );
    useCharacterLimit(editor, CHARACTER_LIMIT, characterLimitProps.value);
    return (_ctx, _cache) => {
      return (0, import_vue36.openBlock)(), (0, import_vue36.createElementBlock)(
        "span",
        {
          class: (0, import_vue36.normalizeClass)(`characters-limit ${remainingCharacters.value < 0 ? "characters-limit-exceeded" : ""}`)
        },
        (0, import_vue36.toDisplayString)(remainingCharacters.value),
        3
        /* TEXT, CLASS */
      );
    };
  }
});
var LexicalCharacterLimitPlugin_default = _sfc_main13;

// src/components/LexicalAutoScrollPlugin.vue
var import_vue38 = require("vue");
var import_lexical12 = require("lexical");
var _sfc_main14 = /* @__PURE__ */ (0, import_vue38.defineComponent)({
  __name: "LexicalAutoScrollPlugin",
  props: {
    scrollRef: {}
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    useMounted(() => {
      return editor.registerUpdateListener(({ tags, editorState }) => {
        const scrollElement = props.scrollRef;
        if (!scrollElement || !tags.has("scroll-into-view"))
          return;
        const selection = editorState.read(() => (0, import_lexical12.$getSelection)());
        if (!(0, import_lexical12.$isRangeSelection)(selection) || !selection.isCollapsed())
          return;
        const anchorElement = editor.getElementByKey(selection.anchor.key);
        if (anchorElement === null)
          return;
        const scrollRect = scrollElement.getBoundingClientRect();
        const rect = anchorElement.getBoundingClientRect();
        if (rect.bottom > scrollRect.bottom)
          anchorElement.scrollIntoView(false);
        else if (rect.top < scrollRect.top)
          anchorElement.scrollIntoView();
      });
    });
    return () => {
    };
  }
});
var LexicalAutoScrollPlugin_default = _sfc_main14;

// src/components/LexicalHashtagPlugin.vue
var import_vue39 = require("vue");
var import_hashtag = require("@lexical/hashtag");
var import_vue40 = require("vue");
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var _sfc_main15 = /* @__PURE__ */ (0, import_vue39.defineComponent)({
  __name: "LexicalHashtagPlugin",
  setup(__props) {
    function getHashtagRegexStringChars() {
      const latinAccents = "\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253-\u0254\u0256-\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF";
      const nonLatinChars = "\u0400-\u04FF\u0500-\u0527\u2DE0-\u2DFF\uA640-\uA69F\u0591-\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB12-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFB4F\u0610-\u061A\u0620-\u065F\u066E-\u06D3\u06D5-\u06DC\u06DE-\u06E8\u06EA-\u06EF\u06FA-\u06FC\u06FF\u0750-\u077F\u08A0\u08A2-\u08AC\u08E4-\u08FE\uFB50-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\u200C-\u200C\u0E01-\u0E3A\u0E40-\u0E4E\u1100-\u11FF\u3130-\u3185\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\uFFA1-\uFFDC";
      const charCode = String.fromCharCode;
      const cjkChars = `\u30A1-\u30FA\u30FC-\u30FE\uFF66-\uFF9F\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u3041-\u3096\u3099-\u309E\u3400-\u4DBF\u4E00-\u9FFF${// Kanji (Unified)
      // Disabled as it breaks the Regex.
      // charCode(0x20000) + '-' + charCode(0x2A6DF) + // Kanji (CJK Extension B)
      charCode(173824)}-${charCode(177983)}${charCode(177984)}-${charCode(178207)}${charCode(194560)}-${charCode(195103)}\u3003\u3005\u303B`;
      const otherChars = latinAccents + nonLatinChars + cjkChars;
      const unicodeLetters = "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u0241\u0250-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EE\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03F5\u03F7-\u0481\u048A-\u04CE\u04D0-\u04F9\u0500-\u050F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u076D\u0780-\u07A5\u07B1\u0904-\u0939\u093D\u0950\u0958-\u0961\u097D\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60-\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60-\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021\u1023-\u1027\u1029-\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1D00-\u1DBF\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2131\u2133-\u2139\u213C-\u213F\u2145-\u2149\u2C00-\u2C2E\u2C30-\u2C5E\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FBB\uA000-\uA48C\uA800-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      const unicodeAccents = "\u0300-\u036F\u0483-\u0486\u0591-\u05B9\u05BB-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u0615\u064B-\u065E\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962-\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7\u09E2-\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A70-\u0A71\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B43\u0B47-\u0B48\u0B4B-\u0B4D\u0B56-\u0B57\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C82-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5-\u0CD6\u0D02-\u0D03\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D82-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2-\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F3E-\u0F3F\u0F71-\u0F84\u0F86-\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102C-\u1032\u1036-\u1039\u1056-\u1059\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8-\u19C9\u1A17-\u1A1B\u1DC0-\u1DC3\u20D0-\u20DC\u20E1\u20E5-\u20EB\u302A-\u302F\u3099-\u309A\uA802\uA806\uA80B\uA823-\uA827\uFB1E\uFE00-\uFE0F\uFE20-\uFE23";
      const unicodeDigits = "0-9\u0660-\u0669\u06F0-\u06F9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\uFF10-\uFF19";
      const alpha = unicodeLetters + unicodeAccents + otherChars;
      const numeric = `${unicodeDigits}_`;
      const alphanumeric = alpha + numeric;
      const hashChars = "#\\uFF03";
      return {
        alpha,
        alphanumeric,
        hashChars
      };
    }
    function getHashtagRegexString() {
      const { alpha, alphanumeric, hashChars } = getHashtagRegexStringChars();
      const hashtagAlpha = `[${alpha}]`;
      const hashtagAlphanumeric = `[${alphanumeric}]`;
      const hashtagBoundary = `^|$|[^&/${alphanumeric}]`;
      const hashCharList = `[${hashChars}]`;
      const hashtag = `(${hashtagBoundary})(${hashCharList})(${hashtagAlphanumeric}*${hashtagAlpha}${hashtagAlphanumeric}*)`;
      return hashtag;
    }
    const REGEX = new RegExp(getHashtagRegexString(), "i");
    const editor = useLexicalComposer();
    (0, import_vue40.onMounted)(() => {
      if (!editor.hasNodes([import_hashtag.HashtagNode]))
        (0, import_tiny_invariant5.default)(false, "HashtagPlugin: HashtagNode not registered on editor");
    });
    function createHashtagNode(textNode) {
      return (0, import_hashtag.$createHashtagNode)(textNode.getTextContent());
    }
    function getHashtagMatch(text) {
      const matchArr = REGEX.exec(text);
      if (matchArr === null)
        return null;
      const hashtagLength = matchArr[3].length + 1;
      const startOffset = matchArr.index + matchArr[1].length;
      const endOffset = startOffset + hashtagLength;
      return { end: endOffset, start: startOffset };
    }
    useLexicalTextEntity(getHashtagMatch, import_hashtag.HashtagNode, createHashtagNode);
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalHashtagPlugin_default = _sfc_main15;

// src/components/LexicalDecoratorBlockNode.ts
var import_lexical13 = require("lexical");
var DecoratorBlockNode = class extends import_lexical13.DecoratorNode {
  __format;
  constructor(format, key) {
    super(key);
    this.__format = format || "";
  }
  exportJSON() {
    return {
      format: this.__format || "",
      type: "decorator-block",
      version: 1
    };
  }
  createDOM() {
    return document.createElement("div");
  }
  updateDOM() {
    return false;
  }
  setFormat(format) {
    const self = this.getWritable();
    self.__format = format;
  }
};
function $createDecoratorBlockNode() {
  return new DecoratorBlockNode();
}
function $isDecoratorBlockNode(node) {
  return node instanceof DecoratorBlockNode;
}

// src/components/LexicalBlockWithAlignableContents.vue
var import_vue41 = require("vue");
var import_vue42 = require("vue");
var import_utils11 = require("@lexical/utils");
var import_lexical14 = require("lexical");
var import_vue43 = require("vue");
var _sfc_main16 = /* @__PURE__ */ (0, import_vue41.defineComponent)({
  __name: "LexicalBlockWithAlignableContents",
  props: {
    format: {},
    nodeKey: {},
    baseClass: {},
    focusClass: {}
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    const { isSelected, setSelected, clearSelection } = useLexicalNodeSelection(props.nodeKey);
    const containerRef = (0, import_vue43.ref)(null);
    function onDelete(event) {
      if (isSelected.value && (0, import_lexical14.$isNodeSelection)((0, import_lexical14.$getSelection)())) {
        event.preventDefault();
        const node = (0, import_lexical14.$getNodeByKey)(props.nodeKey);
        if ((0, import_lexical14.$isDecoratorNode)(node))
          node?.remove();
      }
      return false;
    }
    useMounted(() => {
      return (0, import_utils11.mergeRegister)(
        editor.registerCommand(
          import_lexical14.FORMAT_ELEMENT_COMMAND,
          (formatType) => {
            if (isSelected.value) {
              const selection = (0, import_lexical14.$getSelection)();
              if ((0, import_lexical14.$isNodeSelection)(selection)) {
                const node = (0, import_lexical14.$getNodeByKey)(props.nodeKey);
                if (node && $isDecoratorBlockNode(node))
                  node.setFormat(formatType);
              } else if ((0, import_lexical14.$isRangeSelection)(selection)) {
                const nodes = selection.getNodes();
                for (const node of nodes) {
                  if ($isDecoratorBlockNode(node)) {
                    node.setFormat(formatType);
                  } else {
                    const element = (0, import_utils11.$getNearestBlockElementAncestorOrThrow)(node);
                    element.setFormat(formatType);
                  }
                }
              }
              return true;
            }
            return false;
          },
          import_lexical14.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical14.CLICK_COMMAND,
          (event) => {
            if (event.target === containerRef.value) {
              event.preventDefault();
              if (!event.shiftKey)
                clearSelection();
              setSelected(!isSelected.value);
              return true;
            }
            return false;
          },
          import_lexical14.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical14.KEY_DELETE_COMMAND,
          onDelete,
          import_lexical14.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical14.KEY_BACKSPACE_COMMAND,
          onDelete,
          import_lexical14.COMMAND_PRIORITY_LOW
        )
      );
    });
    return (_ctx, _cache) => {
      return (0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
        "div",
        {
          ref_key: "containerRef",
          ref: containerRef,
          style: (0, import_vue42.normalizeStyle)(`text-align: ${_ctx.format}`),
          class: (0, import_vue42.normalizeClass)([_ctx.baseClass, (0, import_vue42.unref)(isSelected) ? _ctx.focusClass : ""])
        },
        [
          (0, import_vue42.renderSlot)(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
var LexicalBlockWithAlignableContents_default = _sfc_main16;

// src/components/LexicalCheckListPlugin.vue
var import_vue44 = require("vue");
var import_lexical15 = require("lexical");
var import_list2 = require("@lexical/list");
var import_utils12 = require("@lexical/utils");

// src/composables/listenerManager.ts
var handleClickAndPointerDownListenersCount = 0;
var handleClickAndPointerDownListenersUnregister;
function registerClickAndPointerListeners(register, unregister) {
  if (handleClickAndPointerDownListenersCount++ === 0) {
    register();
    handleClickAndPointerDownListenersUnregister = unregister;
  }
  return () => {
    if (--handleClickAndPointerDownListenersCount === 0) {
      handleClickAndPointerDownListenersUnregister?.();
      handleClickAndPointerDownListenersUnregister = void 0;
    }
  };
}

// src/components/LexicalCheckListPlugin.vue
var _sfc_main17 = /* @__PURE__ */ (0, import_vue44.defineComponent)({
  __name: "LexicalCheckListPlugin",
  setup(__props) {
    const editor = useLexicalComposer();
    useMounted(() => {
      return (0, import_utils12.mergeRegister)(
        editor.registerCommand(
          import_list2.INSERT_CHECK_LIST_COMMAND,
          () => {
            (0, import_list2.insertList)(editor, "check");
            return true;
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical15.KEY_ARROW_DOWN_COMMAND,
          (event) => {
            return handleArrownUpOrDown(event, editor, false);
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical15.KEY_ARROW_UP_COMMAND,
          (event) => {
            return handleArrownUpOrDown(event, editor, true);
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical15.KEY_ESCAPE_COMMAND,
          (_event) => {
            const activeItem = getActiveCheckListItem();
            if (activeItem != null) {
              const rootElement = editor.getRootElement();
              if (rootElement != null)
                rootElement.focus();
              return true;
            }
            return false;
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical15.KEY_SPACE_COMMAND,
          (event) => {
            const activeItem = getActiveCheckListItem();
            if (activeItem != null) {
              editor.update(() => {
                const listItemNode = (0, import_lexical15.$getNearestNodeFromDOMNode)(activeItem);
                if ((0, import_list2.$isListItemNode)(listItemNode)) {
                  event.preventDefault();
                  listItemNode.toggleChecked();
                }
              });
              return true;
            }
            return false;
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        editor.registerCommand(
          import_lexical15.KEY_ARROW_LEFT_COMMAND,
          (event) => {
            return editor.getEditorState().read(() => {
              const selection = (0, import_lexical15.$getSelection)();
              if ((0, import_lexical15.$isRangeSelection)(selection) && selection.isCollapsed()) {
                const { anchor } = selection;
                const isElement = anchor.type === "element";
                if (isElement || anchor.offset === 0) {
                  const anchorNode = anchor.getNode();
                  const elementNode = (0, import_utils12.$findMatchingParent)(
                    anchorNode,
                    (node) => (0, import_lexical15.$isElementNode)(node) && !node.isInline()
                  );
                  if ((0, import_list2.$isListItemNode)(elementNode)) {
                    const parent = elementNode.getParent();
                    if ((0, import_list2.$isListNode)(parent) && parent.getListType() === "check" && (isElement || elementNode.getFirstDescendant() === anchorNode)) {
                      const domNode = editor.getElementByKey(elementNode.__key);
                      if (domNode != null && document.activeElement !== domNode) {
                        domNode.focus();
                        event.preventDefault();
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            });
          },
          import_lexical15.COMMAND_PRIORITY_LOW
        ),
        listenPointerDown()
      );
    });
    function listenPointerDown() {
      return registerClickAndPointerListeners(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("pointerdown", handlePointerDown);
      }, () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("pointerdown", handlePointerDown);
      });
    }
    function handleCheckItemEvent(event, callback) {
      const target = event.target;
      if (!(target instanceof HTMLElement))
        return;
      const firstChild = target.firstChild;
      if (firstChild != null && (firstChild.tagName === "UL" || firstChild.tagName === "OL"))
        return;
      const parentNode = target.parentNode;
      if (!parentNode || parentNode.__lexicalListType !== "check")
        return;
      const pageX = event.pageX;
      const rect = target.getBoundingClientRect();
      if (target.dir === "rtl" ? pageX < rect.right && pageX > rect.right - 20 : pageX > rect.left && pageX < rect.left + 20)
        callback();
    }
    function handleClick(event) {
      handleCheckItemEvent(event, () => {
        const domNode = event.target;
        const editor2 = findEditor(domNode);
        if (editor2 !== null) {
          editor2.update(() => {
            const node = (0, import_lexical15.$getNearestNodeFromDOMNode)(domNode);
            if ((0, import_list2.$isListItemNode)(node)) {
              domNode.focus();
              node.toggleChecked();
            }
          });
        }
      });
    }
    function handlePointerDown(event) {
      handleCheckItemEvent(event, () => {
        event.preventDefault();
      });
    }
    function findEditor(target) {
      let node = target;
      while (node) {
        if (node.__lexicalEditor)
          return node.__lexicalEditor;
        node = node.parentNode;
      }
      return null;
    }
    function getActiveCheckListItem() {
      const { activeElement } = document;
      return activeElement !== null && activeElement.tagName === "LI" && activeElement.parentNode !== null && activeElement.parentNode.__lexicalListType === "check" ? activeElement : null;
    }
    function findCheckListItemSibling(node, backward) {
      let sibling = backward ? node.getPreviousSibling() : node.getNextSibling();
      let parent = node;
      while (sibling == null && (0, import_list2.$isListItemNode)(parent)) {
        parent = parent.getParentOrThrow().getParent();
        if (parent !== null) {
          sibling = backward ? parent.getPreviousSibling() : parent.getNextSibling();
        }
      }
      while ((0, import_list2.$isListItemNode)(sibling)) {
        const firstChild = backward ? sibling.getLastChild() : sibling.getFirstChild();
        if (!(0, import_list2.$isListNode)(firstChild))
          return sibling;
        sibling = backward ? firstChild.getLastChild() : firstChild.getFirstChild();
      }
      return null;
    }
    function handleArrownUpOrDown(event, editor2, backward) {
      const activeItem = getActiveCheckListItem();
      if (activeItem != null) {
        editor2.update(() => {
          const listItem = (0, import_lexical15.$getNearestNodeFromDOMNode)(activeItem);
          if (!(0, import_list2.$isListItemNode)(listItem))
            return;
          const nextListItem = findCheckListItemSibling(listItem, backward);
          if (nextListItem != null) {
            nextListItem.selectStart();
            const dom = editor2.getElementByKey(nextListItem.__key);
            if (dom != null) {
              event.preventDefault();
              setTimeout(() => {
                dom.focus();
              }, 0);
            }
          }
        });
      }
      return false;
    }
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalCheckListPlugin_default = _sfc_main17;

// src/components/LexicalMarkdownShortcutPlugin.vue
var import_vue45 = require("vue");
var import_markdown = require("@lexical/markdown");
var _sfc_main18 = /* @__PURE__ */ (0, import_vue45.defineComponent)({
  __name: "LexicalMarkdownShortcutPlugin",
  props: {
    transformers: { default: () => [...import_markdown.TRANSFORMERS] }
  },
  setup(__props) {
    const props = __props;
    const editor = useLexicalComposer();
    useMounted(() => {
      return (0, import_markdown.registerMarkdownShortcuts)(editor, props.transformers);
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalMarkdownShortcutPlugin_default = _sfc_main18;

// src/components/LexicalTabIndentationPlugin.vue
var import_vue46 = require("vue");
var import_lexical16 = require("lexical");
var _sfc_main19 = /* @__PURE__ */ (0, import_vue46.defineComponent)({
  __name: "LexicalTabIndentationPlugin",
  setup(__props) {
    const editor = useLexicalComposer();
    useMounted(() => {
      return editor.registerCommand(
        import_lexical16.KEY_TAB_COMMAND,
        (event) => {
          const selection = (0, import_lexical16.$getSelection)();
          if (!(0, import_lexical16.$isRangeSelection)(selection))
            return false;
          event.preventDefault();
          return editor.dispatchCommand(
            event.shiftKey ? import_lexical16.OUTDENT_CONTENT_COMMAND : import_lexical16.INDENT_CONTENT_COMMAND,
            void 0
          );
        },
        import_lexical16.COMMAND_PRIORITY_EDITOR
      );
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalTabIndentationPlugin_default = _sfc_main19;

// src/components/LexicalCollaborationPlugin.vue
var import_vue48 = require("vue");
var import_vue49 = require("vue");
var import_vue50 = require("vue");

// src/composables/useCollaborationContext.ts
var import_vue47 = require("vue");
var entries = [
  ["Cat", "rgb(125, 50, 0)"],
  ["Dog", "rgb(100, 0, 0)"],
  ["Rabbit", "rgb(150, 0, 0)"],
  ["Frog", "rgb(200, 0, 0)"],
  ["Fox", "rgb(200, 75, 0)"],
  ["Hedgehog", "rgb(0, 75, 0)"],
  ["Pigeon", "rgb(0, 125, 0)"],
  ["Squirrel", "rgb(75, 100, 0)"],
  ["Bear", "rgb(125, 100, 0)"],
  ["Tiger", "rgb(0, 0, 150)"],
  ["Leopard", "rgb(0, 0, 200)"],
  ["Zebra", "rgb(0, 0, 250)"],
  ["Wolf", "rgb(0, 100, 150)"],
  ["Owl", "rgb(0, 100, 100)"],
  ["Gull", "rgb(100, 0, 100)"],
  ["Squid", "rgb(150, 0, 150)"]
];
var randomEntry = entries[Math.floor(Math.random() * entries.length)];
var useCollaborationContext_default = (0, import_vue47.ref)({
  clientID: 0,
  color: randomEntry[1],
  isCollabActive: false,
  name: randomEntry[0],
  yjsDocMap: /* @__PURE__ */ new Map()
});

// src/components/LexicalCollaborationPlugin.vue
var _sfc_main20 = /* @__PURE__ */ (0, import_vue48.defineComponent)({
  __name: "LexicalCollaborationPlugin",
  props: {
    id: {},
    providerFactory: { type: Function },
    shouldBootstrap: { type: Boolean },
    username: {},
    cursorColor: {},
    cursorsContainerRef: {},
    initialEditorState: { type: [null, String, Object, Function] },
    excludedProperties: {},
    awarenessData: {}
  },
  setup(__props) {
    const props = __props;
    (0, import_vue50.watchEffect)(() => {
      if (props.username !== void 0)
        useCollaborationContext_default.value.name = props.username;
      if (props.cursorColor !== void 0)
        useCollaborationContext_default.value.color = props.cursorColor;
    });
    const editor = useLexicalComposer();
    useEffect(() => {
      useCollaborationContext_default.value.isCollabActive = true;
      return () => {
        if (editor._parentEditor == null)
          useCollaborationContext_default.value.isCollabActive = false;
      };
    });
    const provider = (0, import_vue50.computed)(() => props.providerFactory(props.id, useCollaborationContext_default.value.yjsDocMap));
    const binding = useYjsCollaboration(
      editor,
      props.id,
      provider.value,
      useCollaborationContext_default.value.yjsDocMap,
      useCollaborationContext_default.value.name,
      useCollaborationContext_default.value.color,
      props.shouldBootstrap,
      props.initialEditorState,
      props.excludedProperties,
      props.awarenessData
    );
    (0, import_vue50.watchEffect)(() => {
      useCollaborationContext_default.value.clientID = binding.value.clientID;
    });
    useYjsHistory(editor, binding.value);
    useYjsFocusTracking(
      editor,
      provider.value,
      useCollaborationContext_default.value.name,
      useCollaborationContext_default.value.color,
      props.awarenessData
    );
    return (_ctx, _cache) => {
      return (0, import_vue49.openBlock)(), (0, import_vue49.createBlock)(import_vue49.Teleport, {
        to: _ctx.cursorsContainerRef || "body"
      }, [
        (0, import_vue49.createElementVNode)(
          "div",
          {
            ref: (element) => (0, import_vue49.unref)(binding).cursorsContainer = element
          },
          null,
          512
          /* NEED_PATCH */
        )
      ], 8, ["to"]);
    };
  }
});
var LexicalCollaborationPlugin_default = _sfc_main20;

// src/components/LexicalClickableLinkPlugin.vue
var import_vue51 = require("vue");
var import_link3 = require("@lexical/link");
var import_utils13 = require("@lexical/utils");
var import_lexical17 = require("lexical");
var _sfc_main21 = /* @__PURE__ */ (0, import_vue51.defineComponent)({
  __name: "LexicalClickableLinkPlugin",
  props: {
    newTab: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    function findMatchingDOM(startNode, predicate) {
      let node = startNode;
      while (node != null) {
        if (predicate(node))
          return node;
        node = node.parentNode;
      }
      return null;
    }
    const editor = useLexicalComposer();
    useMounted(() => {
      const onClick = (event) => {
        const target = event.target;
        if (!(target instanceof Node))
          return;
        const nearestEditor = (0, import_lexical17.getNearestEditorFromDOMNode)(target);
        if (nearestEditor === null)
          return;
        let url = null;
        let urlTarget = null;
        nearestEditor.update(() => {
          const clickedNode = (0, import_lexical17.$getNearestNodeFromDOMNode)(target);
          if (clickedNode !== null) {
            const maybeLinkNode = (0, import_utils13.$findMatchingParent)(
              clickedNode,
              import_lexical17.$isElementNode
            );
            if ((0, import_link3.$isLinkNode)(maybeLinkNode)) {
              url = maybeLinkNode.sanitizeUrl(maybeLinkNode.getURL());
              urlTarget = maybeLinkNode.getTarget();
            } else {
              const a = findMatchingDOM(target, import_utils13.isHTMLAnchorElement);
              if (a !== null) {
                url = a.href;
                urlTarget = a.target;
              }
            }
          }
        });
        if (url === null || url === "")
          return;
        const selection = editor.getEditorState().read(import_lexical17.$getSelection);
        if ((0, import_lexical17.$isRangeSelection)(selection) && !selection.isCollapsed()) {
          event.preventDefault();
          return;
        }
        const isMiddle = event.type === "auxclick" && event.button === 1;
        window.open(
          url,
          props.newTab || isMiddle || event.metaKey || event.ctrlKey || urlTarget === "_blank" ? "_blank" : "_self"
        );
        event.preventDefault();
      };
      const onMouseUp = (event) => {
        if (event.button === 1 && editor.isEditable())
          onClick(event);
      };
      return editor.registerRootListener((rootElement, prevRootElement) => {
        if (prevRootElement !== null) {
          prevRootElement.removeEventListener("click", onClick);
          prevRootElement.removeEventListener("mouseup", onMouseUp);
        }
        if (rootElement !== null) {
          rootElement.addEventListener("click", onClick);
          rootElement.addEventListener("mouseup", onMouseUp);
        }
      });
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalClickableLinkPlugin_default = _sfc_main21;

// src/components/LexicalContextMenuPlugin.vue
var import_vue56 = require("vue");
var import_vue57 = require("vue");
var import_vue58 = require("vue");

// src/components/LexicalMenu/shared.ts
var import_lexical18 = require("lexical");
var import_vue52 = require("vue");
var MenuOption2 = class {
  key;
  ref;
  constructor(key) {
    this.key = key;
    this.ref = null;
    this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(el) {
    this.ref = el;
  }
};
function getScrollParent(element, includeHidden) {
  let style = getComputedStyle(element);
  const excludeStaticParent = style.position === "absolute";
  const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
  if (style.position === "fixed")
    return document.body;
  for (
    let parent = element;
    // eslint-disable-next-line no-cond-assign
    parent = parent.parentElement;
  ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static")
      continue;
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
      return parent;
  }
  return document.body;
}
function isTriggerVisibleInNearestScrollContainer(targetElement, containerElement) {
  const tRect = targetElement.getBoundingClientRect();
  const cRect = containerElement.getBoundingClientRect();
  return tRect.top > cRect.top && tRect.top < cRect.bottom;
}
function useDynamicPositioning(resolution, targetElement, onReposition, onVisibilityChange) {
  const editor = useLexicalComposer();
  (0, import_vue52.watchEffect)((onInvalidate) => {
    if (targetElement.value != null && resolution.value != null) {
      const rootElement = editor.getRootElement();
      const rootScrollParent = rootElement != null ? getScrollParent(rootElement, false) : document.body;
      let ticking = false;
      let previousIsInView = isTriggerVisibleInNearestScrollContainer(
        targetElement.value,
        rootScrollParent
      );
      const handleScroll = function() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            onReposition();
            ticking = false;
          });
          ticking = true;
        }
        const isInView = isTriggerVisibleInNearestScrollContainer(
          targetElement.value,
          rootScrollParent
        );
        if (isInView !== previousIsInView) {
          previousIsInView = isInView;
          if (onVisibilityChange != null)
            onVisibilityChange(isInView);
        }
      };
      const resizeObserver = new ResizeObserver(onReposition);
      window.addEventListener("resize", onReposition);
      document.addEventListener("scroll", handleScroll, {
        capture: true,
        passive: true
      });
      resizeObserver.observe(targetElement.value);
      onInvalidate(() => {
        resizeObserver.unobserve(targetElement.value);
        window.removeEventListener("resize", onReposition);
        document.removeEventListener("scroll", handleScroll, true);
      });
    }
  });
}
var SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = (0, import_lexical18.createCommand)("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function useMenuAnchorRef(resolution, setResolution, className, parent = document.body) {
  const editor = useLexicalComposer();
  const anchorElementRef = (0, import_vue52.ref)(document.createElement("div"));
  const positionMenu = () => {
    anchorElementRef.value.style.top = anchorElementRef.value.style.bottom;
    const rootElement = editor.getRootElement();
    const containerDiv = anchorElementRef.value;
    const menuEle = containerDiv.firstChild;
    if (rootElement !== null && resolution.value !== null) {
      const { left, top, width, height } = resolution.value.getRect();
      const anchorHeight = anchorElementRef.value.offsetHeight;
      containerDiv.style.top = `${top + window.scrollY + anchorHeight + 3}px`;
      containerDiv.style.left = `${left + window.pageXOffset}px`;
      containerDiv.style.height = `${height}px`;
      containerDiv.style.width = `${width}px`;
      if (menuEle !== null) {
        menuEle.style.top = `${top}`;
        const menuRect = menuEle.getBoundingClientRect();
        const menuHeight = menuRect.height;
        const menuWidth = menuRect.width;
        const rootElementRect = rootElement.getBoundingClientRect();
        if (left + menuWidth > rootElementRect.right) {
          containerDiv.style.left = `${rootElementRect.right - menuWidth + window.pageXOffset}px`;
        }
        if ((top + menuHeight > window.innerHeight || top + menuHeight > rootElementRect.bottom) && top - rootElementRect.top > menuHeight) {
          containerDiv.style.top = `${top - menuHeight + window.pageYOffset - height}px`;
        }
      }
      if (!containerDiv.isConnected) {
        if (className != null)
          containerDiv.className = className;
        containerDiv.setAttribute("aria-label", "Typeahead menu");
        containerDiv.setAttribute("id", "typeahead-menu");
        containerDiv.setAttribute("role", "listbox");
        containerDiv.style.display = "block";
        containerDiv.style.position = "absolute";
        parent.append(containerDiv);
      }
      anchorElementRef.value = containerDiv;
      rootElement.setAttribute("aria-controls", "typeahead-menu");
    }
  };
  (0, import_vue52.watchEffect)(() => {
    const rootElement = editor.getRootElement();
    if (resolution.value !== null) {
      positionMenu();
      return () => {
        if (rootElement !== null)
          rootElement.removeAttribute("aria-controls");
        const containerDiv = anchorElementRef.value;
        if (containerDiv !== null && containerDiv.isConnected)
          containerDiv.remove();
      };
    }
  });
  const onVisibilityChange = (isInView) => {
    if (resolution.value !== null) {
      if (!isInView)
        setResolution(null);
    }
  };
  useDynamicPositioning(
    resolution,
    anchorElementRef,
    positionMenu,
    onVisibilityChange
  );
  return anchorElementRef;
}

// src/components/LexicalMenu/index.vue
var import_vue53 = require("vue");
var import_vue54 = require("vue");
var import_vue55 = require("vue");
var import_lexical19 = require("lexical");
var import_utils14 = require("@lexical/utils");
var _sfc_main22 = /* @__PURE__ */ (0, import_vue53.defineComponent)({
  __name: "index",
  props: {
    close: { type: Function },
    editor: {},
    anchorElementRef: {},
    resolution: {},
    options: {},
    shouldSplitNodeWithQuery: { type: Boolean },
    commandPriority: {}
  },
  emits: ["selectOption"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedIndex = (0, import_vue55.ref)(null);
    const matchString = (0, import_vue55.computed)(() => props.resolution.match && props.resolution.match.matchingString);
    function setHighlightedIndex(index) {
      selectedIndex.value = index;
    }
    function getFullMatchOffset(documentText, entryText, offset) {
      let triggerOffset = offset;
      for (let i = triggerOffset; i <= entryText.length; i++) {
        if (documentText.substr(-i) === entryText.substr(0, i))
          triggerOffset = i;
      }
      return triggerOffset;
    }
    function $splitNodeContainingQuery(match) {
      const selection = (0, import_lexical19.$getSelection)();
      if (!(0, import_lexical19.$isRangeSelection)(selection) || !selection.isCollapsed())
        return null;
      const anchor = selection.anchor;
      if (anchor.type !== "text")
        return null;
      const anchorNode = anchor.getNode();
      if (!anchorNode.isSimpleText())
        return null;
      const selectionOffset = anchor.offset;
      const textContent = anchorNode.getTextContent().slice(0, selectionOffset);
      const characterOffset = match.replaceableString.length;
      const queryOffset = getFullMatchOffset(
        textContent,
        match.matchingString,
        characterOffset
      );
      const startOffset = selectionOffset - queryOffset;
      if (startOffset < 0)
        return null;
      let newNode;
      if (startOffset === 0)
        [newNode] = anchorNode.splitText(selectionOffset);
      else
        [, newNode] = anchorNode.splitText(startOffset, selectionOffset);
      return newNode;
    }
    (0, import_vue55.watch)(matchString, () => {
      setHighlightedIndex(0);
    }, { immediate: true });
    function selectOptionAndCleanUp(selectedEntry) {
      props.editor.update(() => {
        const textNodeContainingQuery = props.resolution.match != null && props.shouldSplitNodeWithQuery ? $splitNodeContainingQuery(props.resolution.match) : null;
        emit("selectOption", {
          option: selectedEntry,
          textNodeContainingQuery,
          closeMenu: props.close,
          matchingString: props.resolution.match ? props.resolution.match.matchingString : ""
        });
      });
    }
    function updateSelectedIndex(index) {
      const rootElem = props.editor.getRootElement();
      if (rootElem !== null) {
        rootElem.setAttribute(
          "aria-activedescendant",
          `typeahead-item-${index}`
        );
        setHighlightedIndex(index);
      }
    }
    (0, import_vue55.onUnmounted)(() => {
      const rootElem = props.editor.getRootElement();
      if (rootElem !== null)
        rootElem.removeAttribute("aria-activedescendant");
    });
    (0, import_vue55.watchEffect)(() => {
      if (props.options === null)
        setHighlightedIndex(null);
      else if (selectedIndex.value === null)
        updateSelectedIndex(0);
    });
    function scrollIntoViewIfNeeded(target) {
      const typeaheadContainerNode = document.getElementById("typeahead-menu");
      if (!typeaheadContainerNode)
        return;
      const typeaheadRect = typeaheadContainerNode.getBoundingClientRect();
      if (typeaheadRect.top + typeaheadRect.height > window.innerHeight) {
        typeaheadContainerNode.scrollIntoView({
          block: "center"
        });
      }
      if (typeaheadRect.top < 0) {
        typeaheadContainerNode.scrollIntoView({
          block: "center"
        });
      }
      target.scrollIntoView({ block: "nearest" });
    }
    (0, import_vue55.watchEffect)((onInvalidate) => {
      if (!props.commandPriority)
        return;
      const fn = (0, import_utils14.mergeRegister)(
        props.editor.registerCommand(
          SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
          ({ option }) => {
            if (option.ref && option.ref != null) {
              scrollIntoViewIfNeeded(option.ref);
              return true;
            }
            return false;
          },
          props.commandPriority
        )
      );
      onInvalidate(fn);
    });
    (0, import_vue55.watchEffect)((onInvalidate) => {
      if (!props.commandPriority)
        return;
      const fn = (0, import_utils14.mergeRegister)(
        props.editor.registerCommand(
          import_lexical19.KEY_ARROW_DOWN_COMMAND,
          (payload) => {
            const event = payload;
            if (props.options !== null && props.options.length && selectedIndex.value !== null) {
              const newSelectedIndex = selectedIndex.value !== props.options.length - 1 ? selectedIndex.value + 1 : 0;
              updateSelectedIndex(newSelectedIndex);
              const option = props.options[newSelectedIndex];
              if (option.ref != null && option.ref) {
                props.editor.dispatchCommand(
                  SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
                  {
                    index: newSelectedIndex,
                    option
                  }
                );
              }
              event.preventDefault();
              event.stopImmediatePropagation();
            }
            return true;
          },
          props.commandPriority
        ),
        props.editor.registerCommand(
          import_lexical19.KEY_ARROW_UP_COMMAND,
          (payload) => {
            const event = payload;
            if (props.options !== null && props.options.length && selectedIndex.value !== null) {
              const newSelectedIndex = selectedIndex.value !== 0 ? selectedIndex.value - 1 : props.options.length - 1;
              updateSelectedIndex(newSelectedIndex);
              const option = props.options[newSelectedIndex];
              if (option.ref != null && option.ref)
                scrollIntoViewIfNeeded(option.ref);
              event.preventDefault();
              event.stopImmediatePropagation();
            }
            return true;
          },
          props.commandPriority
        ),
        props.editor.registerCommand(
          import_lexical19.KEY_ESCAPE_COMMAND,
          (payload) => {
            const event = payload;
            event.preventDefault();
            event.stopImmediatePropagation();
            close();
            return true;
          },
          props.commandPriority
        ),
        props.editor.registerCommand(
          import_lexical19.KEY_TAB_COMMAND,
          (payload) => {
            const event = payload;
            if (props.options === null || selectedIndex.value === null || props.options[selectedIndex.value] == null)
              return false;
            event.preventDefault();
            event.stopImmediatePropagation();
            selectOptionAndCleanUp(props.options[selectedIndex.value]);
            return true;
          },
          props.commandPriority
        ),
        props.editor.registerCommand(
          import_lexical19.KEY_ENTER_COMMAND,
          (event) => {
            if (props.options === null || selectedIndex.value === null || props.options[selectedIndex.value] == null)
              return false;
            if (event !== null) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
            selectOptionAndCleanUp(props.options[selectedIndex.value]);
            return true;
          },
          props.commandPriority
        )
      );
      onInvalidate(fn);
    });
    return (_ctx, _cache) => {
      return (0, import_vue54.renderSlot)(_ctx.$slots, "default", {
        listItemProps: {
          options: props.options,
          selectOptionAndCleanUp,
          selectedIndex: selectedIndex.value,
          setHighlightedIndex
        },
        anchorElementRef: _ctx.anchorElementRef,
        matchString: _ctx.resolution.match ? _ctx.resolution.match.matchingString : ""
      });
    };
  }
});
var LexicalMenu_default = _sfc_main22;

// src/components/LexicalContextMenuPlugin.vue
var PRE_PORTAL_DIV_SIZE = 1;
var _sfc_main23 = /* @__PURE__ */ (0, import_vue56.defineComponent)({
  __name: "LexicalContextMenuPlugin",
  props: {
    options: {},
    anchorClassName: {},
    commandPriority: {},
    parent: {}
  },
  emits: ["close", "open", "selectOption"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useLexicalComposer();
    const resolution = (0, import_vue58.ref)(null);
    const menuRef = (0, import_vue58.ref)(null);
    const anchorElementRef = useMenuAnchorRef(
      resolution,
      setResolution,
      props.anchorClassName,
      props.parent
    );
    function setResolution(res) {
      resolution.value = res;
    }
    function closeNodeMenu() {
      setResolution(null);
      if (resolution.value !== null)
        emit("close");
    }
    function openNodeMenu(res) {
      setResolution(res);
      if (resolution.value === null)
        emit("open", res);
    }
    function handleContextMenu(event) {
      event.preventDefault();
      openNodeMenu({
        getRect: () => new DOMRect(
          event.clientX,
          event.clientY,
          PRE_PORTAL_DIV_SIZE,
          PRE_PORTAL_DIV_SIZE
        )
      });
    }
    function handleClick(event) {
      if (resolution.value !== null && menuRef.value != null && event.target != null && !menuRef.value.contains(event.target))
        closeNodeMenu();
    }
    (0, import_vue58.onMounted)(() => {
      const editorElement = editor.getRootElement();
      if (editorElement) {
        editorElement.addEventListener("contextmenu", handleContextMenu);
        (0, import_vue58.onUnmounted)(() => {
          editorElement.removeEventListener("contextmenu", handleContextMenu);
        });
      }
    });
    (0, import_vue58.onMounted)(() => {
      document.addEventListener("click", handleClick);
      (0, import_vue58.onUnmounted)(() => {
        document.removeEventListener("click", handleClick);
      });
    });
    return (_ctx, _cache) => {
      return (0, import_vue57.openBlock)(), (0, import_vue57.createBlock)(LexicalMenu_default, {
        close: closeNodeMenu,
        resolution: resolution.value,
        editor: (0, import_vue57.unref)(editor),
        "anchor-element-ref": (0, import_vue57.unref)(anchorElementRef),
        options: _ctx.options,
        "command-priority": _ctx.commandPriority,
        onSelectOption: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("selectOption", $event))
      }, {
        default: (0, import_vue57.withCtx)(({ anchorElementRef: anchorRef, listItemProps }) => [
          (0, import_vue57.renderSlot)(_ctx.$slots, "default", (0, import_vue57.normalizeProps)((0, import_vue57.guardReactiveProps)({
            anchorElementRef: anchorRef,
            listItemProps,
            menuProps: {
              setMenuRef: (el) => {
                menuRef.value = el;
              }
            }
          })))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["resolution", "editor", "anchor-element-ref", "options", "command-priority"]);
    };
  }
});
var LexicalContextMenuPlugin_default = _sfc_main23;

// src/components/LexicalNodeMenuPlugin.vue
var import_vue59 = require("vue");
var import_vue60 = require("vue");
var import_lexical20 = require("lexical");
var import_vue61 = require("vue");
var _sfc_main24 = /* @__PURE__ */ (0, import_vue59.defineComponent)({
  __name: "LexicalNodeMenuPlugin",
  props: {
    options: {},
    nodeKey: {},
    anchorClassName: {},
    commandPriority: {},
    parent: {}
  },
  emits: ["close", "open", "selectOption"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function startTransition(callback) {
      (0, import_vue61.nextTick)(callback);
    }
    const editor = useLexicalComposer();
    const resolution = (0, import_vue61.ref)(null);
    function setResolution(payload) {
      resolution.value = payload;
    }
    const anchorElementRef = useMenuAnchorRef(
      resolution,
      setResolution,
      props.anchorClassName,
      props.parent
    );
    function closeNodeMenu() {
      setResolution(null);
      if (resolution.value !== null)
        emit("close");
    }
    function openNodeMenu(res) {
      setResolution(res);
      if (resolution.value === null)
        emit("open", res);
    }
    function positionOrCloseMenu() {
      if (props.nodeKey) {
        editor.update(() => {
          const node = (0, import_lexical20.$getNodeByKey)(props.nodeKey);
          const domElement = editor.getElementByKey(props.nodeKey);
          if (node != null && domElement != null) {
            if (resolution.value == null) {
              startTransition(
                () => openNodeMenu({
                  getRect: () => domElement.getBoundingClientRect()
                })
              );
            }
          }
        });
      } else if (props.nodeKey == null && resolution.value != null) {
        closeNodeMenu();
      }
    }
    (0, import_vue61.watch)(() => props.nodeKey, positionOrCloseMenu, { immediate: true });
    (0, import_vue61.watchEffect)((onInvalidate) => {
      if (props.nodeKey != null) {
        const fn = editor.registerUpdateListener(({ dirtyElements }) => {
          if (dirtyElements.get(props.nodeKey))
            positionOrCloseMenu();
        });
        onInvalidate(fn);
      }
    });
    return (_ctx, _cache) => {
      return resolution.value !== null && (0, import_vue60.unref)(editor) !== null ? ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)(LexicalMenu_default, {
        key: 0,
        resolution: resolution.value,
        editor: (0, import_vue60.unref)(editor),
        "anchor-element-ref": (0, import_vue60.unref)(anchorElementRef),
        options: _ctx.options,
        "command-priority": _ctx.commandPriority,
        close: closeNodeMenu,
        onSelectOption: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("selectOption", $event))
      }, {
        default: (0, import_vue60.withCtx)((slotProps) => [
          (0, import_vue60.renderSlot)(_ctx.$slots, "default", (0, import_vue60.normalizeProps)((0, import_vue60.guardReactiveProps)(slotProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["resolution", "editor", "anchor-element-ref", "options", "command-priority"])) : (0, import_vue60.createCommentVNode)("v-if", true);
    };
  }
});
var LexicalNodeMenuPlugin_default = _sfc_main24;

// src/components/LexicalAutoEmbedPlugin/index.vue
var import_vue62 = require("vue");
var import_vue63 = require("vue");
var import_link4 = require("@lexical/link");
var import_lexical22 = require("lexical");
var import_vue64 = require("vue");
var import_utils15 = require("@lexical/utils");

// src/components/LexicalAutoEmbedPlugin/shared.ts
var import_lexical21 = require("lexical");
var URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var INSERT_EMBED_COMMAND = (0, import_lexical21.createCommand)("INSERT_EMBED_COMMAND");
var AutoEmbedOption = class extends MenuOption2 {
  title;
  onSelect;
  constructor(title, options) {
    super(title);
    this.title = title;
    this.onSelect = options.onSelect.bind(this);
  }
};

// src/components/LexicalAutoEmbedPlugin/index.vue
var _sfc_main25 = /* @__PURE__ */ (0, import_vue62.defineComponent)({
  __name: "index",
  props: {
    embedConfigs: {},
    getMenuOptions: { type: Function },
    menuCommandPriority: {}
  },
  emits: ["openEmbedModalForConfig"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useLexicalComposer();
    const nodeKey = (0, import_vue64.ref)(null);
    const activeEmbedConfig = (0, import_vue64.ref)(null);
    function reset() {
      nodeKey.value = null;
      activeEmbedConfig.value = null;
    }
    function checkIfLinkNodeIsEmbeddable(key) {
      editor.getEditorState().read(async () => {
        const linkNode = (0, import_lexical22.$getNodeByKey)(key);
        if ((0, import_link4.$isLinkNode)(linkNode)) {
          for (let i = 0; i < props.embedConfigs.length; i++) {
            const embedConfig = props.embedConfigs[i];
            const urlMatch = await Promise.resolve(
              embedConfig.parseUrl(linkNode.__url)
            );
            if (urlMatch != null) {
              activeEmbedConfig.value = embedConfig;
              nodeKey.value = linkNode.getKey();
            }
          }
        }
      });
    }
    const listener = (nodeMutations, { updateTags, dirtyLeaves }) => {
      for (const [key, mutation] of nodeMutations) {
        if (mutation === "created" && updateTags.has("paste") && dirtyLeaves.size <= 3)
          checkIfLinkNodeIsEmbeddable(key);
        else if (key === nodeKey.value)
          reset();
      }
    };
    (0, import_vue64.watchEffect)((onInvalidate) => {
      const cleanup = (0, import_utils15.mergeRegister)(
        ...[import_link4.LinkNode, import_link4.AutoLinkNode].map(
          (Klass) => editor.registerMutationListener(Klass, (...args) => listener(...args))
        )
      );
      onInvalidate(cleanup);
    });
    (0, import_vue64.watchEffect)((onInvalidate) => {
      const cleanup = editor.registerCommand(
        INSERT_EMBED_COMMAND,
        (embedConfigType) => {
          const embedConfig = props.embedConfigs.find(
            ({ type }) => type === embedConfigType
          );
          if (embedConfig) {
            emit("openEmbedModalForConfig", embedConfig);
            return true;
          }
          return false;
        },
        import_lexical22.COMMAND_PRIORITY_EDITOR
      );
      onInvalidate(cleanup);
    });
    async function embedLinkViaActiveEmbedConfig() {
      if (activeEmbedConfig.value != null && nodeKey.value != null) {
        const linkNode = editor.getEditorState().read(() => {
          const node = (0, import_lexical22.$getNodeByKey)(nodeKey.value);
          if ((0, import_link4.$isLinkNode)(node))
            return node;
          return null;
        });
        if ((0, import_link4.$isLinkNode)(linkNode)) {
          const result = await Promise.resolve(
            activeEmbedConfig.value.parseUrl(linkNode.__url)
          );
          if (result != null) {
            editor.update(() => {
              if (!(0, import_lexical22.$getSelection)())
                linkNode.selectEnd();
              activeEmbedConfig.value?.insertNode(editor, result);
              if (linkNode.isAttached())
                linkNode.remove();
            });
          }
        }
      }
    }
    const options = (0, import_vue64.computed)(() => activeEmbedConfig.value != null && nodeKey.value != null ? props.getMenuOptions(activeEmbedConfig.value, embedLinkViaActiveEmbedConfig, reset) : []);
    function onSelectOption({
      option: selectedOption,
      closeMenu,
      textNodeContainingQuery: targetNode
    }) {
      editor.update(() => {
        selectedOption.onSelect(targetNode);
        closeMenu();
      });
    }
    return (_ctx, _cache) => {
      return nodeKey.value !== null ? ((0, import_vue63.openBlock)(), (0, import_vue63.createBlock)(LexicalNodeMenuPlugin_default, {
        key: 0,
        "node-key": nodeKey.value,
        close: reset,
        options: options.value,
        "command-priority": _ctx.menuCommandPriority,
        onSelectOption
      }, {
        default: (0, import_vue63.withCtx)((slotProps) => [
          (0, import_vue63.renderSlot)(_ctx.$slots, "default", (0, import_vue63.normalizeProps)((0, import_vue63.guardReactiveProps)(slotProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["node-key", "options", "command-priority"])) : (0, import_vue63.createCommentVNode)("v-if", true);
    };
  }
});
var LexicalAutoEmbedPlugin_default = _sfc_main25;

// src/components/LexicalAutoLinkPlugin/index.vue
var import_vue66 = require("vue");

// src/components/LexicalAutoLinkPlugin/shared.ts
var import_vue65 = require("vue");
var import_tiny_invariant6 = __toESM(require("tiny-invariant"), 1);
var import_link5 = require("@lexical/link");
var import_utils16 = require("@lexical/utils");
var import_lexical23 = require("lexical");
function findFirstMatch(text, matchers) {
  for (let i = 0; i < matchers.length; i++) {
    const match = matchers[i](text);
    if (match)
      return match;
  }
  return null;
}
var PUNCTUATION_OR_SPACE = /[.,;\s]/;
function isSeparator(char) {
  return PUNCTUATION_OR_SPACE.test(char);
}
function endsWithSeparator(textContent) {
  return isSeparator(textContent[textContent.length - 1]);
}
function startsWithSeparator(textContent) {
  return isSeparator(textContent[0]);
}
function isPreviousNodeValid(node) {
  let previousNode = node.getPreviousSibling();
  if ((0, import_lexical23.$isElementNode)(previousNode))
    previousNode = previousNode.getLastDescendant();
  return previousNode === null || (0, import_lexical23.$isLineBreakNode)(previousNode) || (0, import_lexical23.$isTextNode)(previousNode) && endsWithSeparator(previousNode.getTextContent());
}
function isNextNodeValid(node) {
  let nextNode = node.getNextSibling();
  if ((0, import_lexical23.$isElementNode)(nextNode))
    nextNode = nextNode.getFirstDescendant();
  return nextNode === null || (0, import_lexical23.$isLineBreakNode)(nextNode) || (0, import_lexical23.$isTextNode)(nextNode) && startsWithSeparator(nextNode.getTextContent());
}
function isContentAroundIsValid(matchStart, matchEnd, text, node) {
  const contentBeforeIsValid = matchStart > 0 ? isSeparator(text[matchStart - 1]) : isPreviousNodeValid(node);
  if (!contentBeforeIsValid)
    return false;
  const contentAfterIsValid = matchEnd < text.length ? isSeparator(text[matchEnd]) : isNextNodeValid(node);
  return contentAfterIsValid;
}
function handleLinkCreation(node, matchers, onChange) {
  const nodeText = node.getTextContent();
  let text = nodeText;
  let invalidMatchEnd = 0;
  let remainingTextNode = node;
  let match;
  while ((match = findFirstMatch(text, matchers)) && match !== null) {
    const matchStart = match.index;
    const matchLength = match.length;
    const matchEnd = matchStart + matchLength;
    const isValid = isContentAroundIsValid(
      invalidMatchEnd + matchStart,
      invalidMatchEnd + matchEnd,
      nodeText,
      node
    );
    if (isValid) {
      let linkTextNode;
      if (invalidMatchEnd + matchStart === 0) {
        [linkTextNode, remainingTextNode] = remainingTextNode.splitText(
          invalidMatchEnd + matchLength
        );
      } else {
        [, linkTextNode, remainingTextNode] = remainingTextNode.splitText(
          invalidMatchEnd + matchStart,
          invalidMatchEnd + matchStart + matchLength
        );
      }
      const linkNode = (0, import_link5.$createAutoLinkNode)(match.url, match.attributes);
      const textNode = (0, import_lexical23.$createTextNode)(match.text);
      textNode.setFormat(linkTextNode.getFormat());
      textNode.setDetail(linkTextNode.getDetail());
      linkNode.append(textNode);
      linkTextNode.replace(linkNode);
      onChange(match.url, null);
      invalidMatchEnd = 0;
    } else {
      invalidMatchEnd += matchEnd;
    }
    text = text.substring(matchEnd);
  }
}
function handleLinkEdit(linkNode, matchers, onChange) {
  const children = linkNode.getChildren();
  const childrenLength = children.length;
  for (let i = 0; i < childrenLength; i++) {
    const child = children[i];
    if (!(0, import_lexical23.$isTextNode)(child) || !child.isSimpleText()) {
      replaceWithChildren(linkNode);
      onChange(null, linkNode.getURL());
      return;
    }
  }
  const text = linkNode.getTextContent();
  const match = findFirstMatch(text, matchers);
  if (match === null || match.text !== text) {
    replaceWithChildren(linkNode);
    onChange(null, linkNode.getURL());
    return;
  }
  if (!isPreviousNodeValid(linkNode) || !isNextNodeValid(linkNode)) {
    replaceWithChildren(linkNode);
    onChange(null, linkNode.getURL());
    return;
  }
  const url = linkNode.getURL();
  if (url !== match.url) {
    linkNode.setURL(match.url);
    onChange(match.url, url);
  }
  if (match.attributes) {
    const rel = linkNode.getRel();
    if (rel !== match.attributes.rel) {
      linkNode.setRel(match.attributes.rel || null);
      onChange(match.attributes.rel || null, rel);
    }
    const target = linkNode.getTarget();
    if (target !== match.attributes.target) {
      linkNode.setTarget(match.attributes.target || null);
      onChange(match.attributes.target || null, target);
    }
  }
}
function handleBadNeighbors(textNode, onChange) {
  const previousSibling = textNode.getPreviousSibling();
  const nextSibling = textNode.getNextSibling();
  const text = textNode.getTextContent();
  if ((0, import_link5.$isAutoLinkNode)(previousSibling) && !startsWithSeparator(text)) {
    replaceWithChildren(previousSibling);
    onChange(null, previousSibling.getURL());
  }
  if ((0, import_link5.$isAutoLinkNode)(nextSibling) && !endsWithSeparator(text)) {
    replaceWithChildren(nextSibling);
    onChange(null, nextSibling.getURL());
  }
}
function replaceWithChildren(node) {
  const children = node.getChildren();
  const childrenLength = children.length;
  for (let j = childrenLength - 1; j >= 0; j--)
    node.insertAfter(children[j]);
  node.remove();
  return children.map((child) => child.getLatest());
}
function useAutoLink(editor, matchers, onChange) {
  (0, import_vue65.watchEffect)((onInvalidate) => {
    if (!editor.hasNodes([import_link5.AutoLinkNode]))
      (0, import_tiny_invariant6.default)(false, "LexicalAutoLinkPlugin: AutoLinkNode not registered on editor");
    const onChangeWrapped = (url, prevUrl) => {
      if (onChange)
        onChange(url, prevUrl);
    };
    const fn = (0, import_utils16.mergeRegister)(
      editor.registerNodeTransform(import_lexical23.TextNode, (textNode) => {
        const parent = textNode.getParentOrThrow();
        if ((0, import_link5.$isAutoLinkNode)(parent)) {
          handleLinkEdit(parent, (0, import_vue65.unref)(matchers), onChangeWrapped);
        } else if (!(0, import_link5.$isLinkNode)(parent)) {
          if (textNode.isSimpleText())
            handleLinkCreation(textNode, (0, import_vue65.unref)(matchers), onChangeWrapped);
          handleBadNeighbors(textNode, onChangeWrapped);
        }
      }),
      editor.registerNodeTransform(import_link5.AutoLinkNode, (linkNode) => {
        handleLinkEdit(linkNode, (0, import_vue65.unref)(matchers), onChangeWrapped);
      })
    );
    onInvalidate(fn);
  });
}

// src/components/LexicalAutoLinkPlugin/index.vue
var _sfc_main26 = /* @__PURE__ */ (0, import_vue66.defineComponent)({
  __name: "index",
  props: {
    matchers: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useLexicalComposer();
    useAutoLink(editor, props.matchers, (url, prevUrl) => {
      emit("change", {
        url,
        prevUrl
      });
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});
var LexicalAutoLinkPlugin_default = _sfc_main26;

// src/components/LexicalTypeaheadMenuPlugin/index.vue
var import_vue67 = require("vue");
var import_vue68 = require("vue");
var import_lexical24 = require("lexical");
var import_vue69 = require("vue");
var _sfc_main27 = /* @__PURE__ */ (0, import_vue67.defineComponent)({
  __name: "index",
  props: {
    options: {},
    triggerFn: {},
    anchorClassName: {},
    commandPriority: { default: import_lexical24.COMMAND_PRIORITY_LOW },
    parent: {}
  },
  emits: ["close", "open", "queryChange", "selectOption"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useLexicalComposer();
    const resolution = (0, import_vue69.ref)(null);
    function setResolution(payload) {
      resolution.value = payload;
    }
    const anchorElementRef = useMenuAnchorRef(
      resolution,
      setResolution,
      props.anchorClassName,
      props.parent
    );
    function closeTypeahead() {
      setResolution(null);
      if (resolution.value !== null)
        emit("close");
    }
    function openTypeahead(res) {
      setResolution(res);
      if (resolution.value === null)
        emit("open", res);
    }
    function getTextUpToAnchor(selection) {
      const anchor = selection.anchor;
      if (anchor.type !== "text")
        return null;
      const anchorNode = anchor.getNode();
      if (!anchorNode.isSimpleText())
        return null;
      const anchorOffset = anchor.offset;
      return anchorNode.getTextContent().slice(0, anchorOffset);
    }
    function tryToPositionRange(leadOffset, range, editorWindow) {
      const domSelection = editorWindow.getSelection();
      if (domSelection === null || !domSelection.isCollapsed)
        return false;
      const anchorNode = domSelection.anchorNode;
      const startOffset = leadOffset;
      const endOffset = domSelection.anchorOffset;
      if (anchorNode == null || endOffset == null)
        return false;
      try {
        range.setStart(anchorNode, startOffset);
        range.setEnd(anchorNode, endOffset);
      } catch (error) {
        return false;
      }
      return true;
    }
    function getQueryTextForSearch(editor2) {
      let text = null;
      editor2.getEditorState().read(() => {
        const selection = (0, import_lexical24.$getSelection)();
        if (!(0, import_lexical24.$isRangeSelection)(selection))
          return;
        text = getTextUpToAnchor(selection);
      });
      return text;
    }
    function isSelectionOnEntityBoundary(editor2, offset) {
      if (offset !== 0)
        return false;
      return editor2.getEditorState().read(() => {
        const selection = (0, import_lexical24.$getSelection)();
        if ((0, import_lexical24.$isRangeSelection)(selection)) {
          const anchor = selection.anchor;
          const anchorNode = anchor.getNode();
          const prevSibling = anchorNode.getPreviousSibling();
          return (0, import_lexical24.$isTextNode)(prevSibling) && prevSibling.isTextEntity();
        }
        return false;
      });
    }
    (0, import_vue69.watchEffect)((onInvalidate) => {
      const updateListener = () => {
        editor.getEditorState().read(() => {
          const editorWindow = editor._window || window;
          const range = editorWindow.document.createRange();
          const selection = (0, import_lexical24.$getSelection)();
          const text = getQueryTextForSearch(editor);
          if (!(0, import_lexical24.$isRangeSelection)(selection) || !selection.isCollapsed() || text === null || range === null) {
            closeTypeahead();
            return;
          }
          const match = props.triggerFn(text, editor);
          emit("queryChange", match ? match.matchingString : null);
          if (match !== null && !isSelectionOnEntityBoundary(editor, match.leadOffset)) {
            const isRangePositioned = tryToPositionRange(
              match.leadOffset,
              range,
              editorWindow
            );
            if (isRangePositioned !== null) {
              openTypeahead({
                getRect: () => range.getBoundingClientRect(),
                match
              });
              return;
            }
          }
          closeTypeahead();
        });
      };
      const removeUpdateListener = editor.registerUpdateListener(updateListener);
      onInvalidate(removeUpdateListener);
    });
    return (_ctx, _cache) => {
      return resolution.value !== null && (0, import_vue68.unref)(editor) !== null ? ((0, import_vue68.openBlock)(), (0, import_vue68.createBlock)(LexicalMenu_default, {
        key: 0,
        "anchor-element-ref": (0, import_vue68.unref)(anchorElementRef),
        editor: (0, import_vue68.unref)(editor),
        resolution: resolution.value,
        options: _ctx.options,
        "should-split-node-with-query": "",
        "command-priority": _ctx.commandPriority,
        close: closeTypeahead,
        onSelectOption: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("selectOption", $event))
      }, {
        default: (0, import_vue68.withCtx)((slotProps) => [
          (0, import_vue68.renderSlot)(_ctx.$slots, "default", (0, import_vue68.normalizeProps)((0, import_vue68.guardReactiveProps)(slotProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["anchor-element-ref", "editor", "resolution", "options", "command-priority"])) : (0, import_vue68.createCommentVNode)("v-if", true);
    };
  }
});
var LexicalTypeaheadMenuPlugin_default = _sfc_main27;

// src/components/LexicalTypeaheadMenuPlugin/shared.ts
var import_lexical25 = require("lexical");
var PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
var SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND2 = (0, import_lexical25.createCommand)("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function useBasicTypeaheadTriggerMatch(trigger, { minLength = 1, maxLength = 75 }) {
  return (text) => {
    const validChars = `[^${trigger}${PUNCTUATION}\\s]`;
    const TypeaheadTriggerRegex = new RegExp(
      `(^|\\s|\\()([${trigger}]((?:${validChars}){0,${maxLength}}))$`
    );
    const match = TypeaheadTriggerRegex.exec(text);
    if (match !== null) {
      const maybeLeadingWhitespace = match[1];
      const matchingString = match[3];
      if (matchingString.length >= minLength) {
        return {
          leadOffset: match.index + maybeLeadingWhitespace.length,
          matchingString,
          replaceableString: match[2]
        };
      }
    }
    return null;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $createDecoratorBlockNode,
  $isDecoratorBlockNode,
  AutoEmbedOption,
  DecoratorBlockNode,
  INSERT_EMBED_COMMAND,
  LexicalAutoEmbedPlugin,
  LexicalAutoFocusPlugin,
  LexicalAutoLinkPlugin,
  LexicalAutoScrollPlugin,
  LexicalBlockWithAlignableContents,
  LexicalCharacterLimitPlugin,
  LexicalCheckListPlugin,
  LexicalClearEditorPlugin,
  LexicalClickableLinkPlugin,
  LexicalCollaborationPlugin,
  LexicalComposer,
  LexicalContentEditable,
  LexicalContextMenuPlugin,
  LexicalDecoratedTeleports,
  LexicalHashtagPlugin,
  LexicalHistoryPlugin,
  LexicalLinkPlugin,
  LexicalListPlugin,
  LexicalMarkdownShortcutPlugin,
  LexicalNodeMenuPlugin,
  LexicalOnChangePlugin,
  LexicalPlainTextPlugin,
  LexicalRichTextPlugin,
  LexicalTabIndentationPlugin,
  LexicalTablePlugin,
  LexicalTreeViewPlugin,
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  URL_MATCHER,
  mergePrevious,
  useBasicTypeaheadTriggerMatch,
  useCanShowPlaceholder,
  useCharacterLimit,
  useDecorators,
  useEditor,
  useEffect,
  useHistory,
  useLexicalCommandsLog,
  useLexicalComposer,
  useLexicalIsTextContentEmpty,
  useLexicalNodeSelection,
  useLexicalTextEntity,
  useList,
  useMounted,
  usePlainTextSetup,
  useRichTextSetup,
  useYjsCollaboration,
  useYjsFocusTracking,
  useYjsHistory
});
//# sourceMappingURL=index.cjs.map