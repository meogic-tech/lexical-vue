import type { LexicalCommand, LexicalEditor, LexicalNode } from 'lexical';
import { MenuOption } from '../LexicalMenu/shared';
export interface EmbedMatchResult<TEmbedMatchResult = unknown> {
    url: string;
    id: string;
    data?: TEmbedMatchResult;
}
export interface EmbedConfig<TEmbedMatchResultData = unknown, TEmbedMatchResult = EmbedMatchResult<TEmbedMatchResultData>> {
    type: string;
    parseUrl: (text: string) => Promise<TEmbedMatchResult | null> | TEmbedMatchResult | null;
    insertNode: (editor: LexicalEditor, result: TEmbedMatchResult) => void;
}
export declare const URL_MATCHER: RegExp;
export declare const INSERT_EMBED_COMMAND: LexicalCommand<EmbedConfig['type']>;
export declare class AutoEmbedOption extends MenuOption {
    title: string;
    onSelect: (targetNode: LexicalNode | null) => void;
    constructor(title: string, options: {
        onSelect: (targetNode: LexicalNode | null) => void;
    });
}
