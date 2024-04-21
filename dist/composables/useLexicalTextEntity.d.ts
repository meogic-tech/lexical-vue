import type { EntityMatch } from '@lexical/text';
import type { Klass, TextNode } from 'lexical';
export declare function useLexicalTextEntity<T extends TextNode>(getMatch: (text: string) => null | EntityMatch, targetNode: Klass<T>, createNode: (textNode: TextNode) => T): void;
