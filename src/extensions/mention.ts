import type { GeneralOptions } from '@/type'
import type { MentionOptions as TiptapMentionOptions } from '@tiptap/extension-mention'
import { Mention as TiptapMention } from '@tiptap/extension-mention'

/**
 * Represents the interface for mention options, extending TiptapMentionOptions and GeneralOptions.
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
