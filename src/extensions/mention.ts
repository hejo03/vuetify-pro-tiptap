import type { GeneralOptions } from '@/type'
import type { MentionOptions as TiptapMentionOptions } from '@tiptap/extension-mention'
// import type { EditorView } from '@tiptap/pm/view'
// import { getMarkRange } from '@tiptap/core'
import { Mention as TiptapMention } from '@tiptap/extension-mention'

// import { Plugin, TextSelection } from '@tiptap/pm/state'

/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface MentionOptions extends TiptapMentionOptions, GeneralOptions<MentionOptions> { }

export const Mention = /* @__PURE__*/ TiptapMention.extend<MentionOptions>({
  addAttributes() {
    return {
      ...this.parent?.()
    }
  },
  addOptions() {
    return {
      ...this.parent?.()
    }
  },
  addCommands() {
    return {
      ...this.parent?.()
    }
  }
})
