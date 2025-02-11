import type { GeneralOptions } from '@/type'
import type { MentionOptions as TiptapMentionOptions } from '@tiptap/extension-mention'
// import type { EditorView } from '@tiptap/pm/view'
// import { getMarkRange } from '@tiptap/core'
import { Mention as TiptapMention } from '@tiptap/extension-mention'

// import { Plugin, TextSelection } from '@tiptap/pm/state'

/**
 * Represents the interface for link options, extending TiptapLinkOptions and GeneralOptions.
 */
export interface MentionOptions extends TiptapMentionOptions, GeneralOptions<MentionOptions> {
  /** Component for the link dialog */
  dialogComponent: any
}

export const Mention = /* @__PURE__*/ TiptapMention.extend<MentionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})
