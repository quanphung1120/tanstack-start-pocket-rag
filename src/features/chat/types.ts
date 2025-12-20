import { z } from 'zod'
import type { UIMessage } from 'ai'

/**
 * Schema for message metadata, including timing and usage statistics.
 */
export const messageMetadataSchema = z.object({
  createdAt: z.number().optional(),
  model: z.string().optional(),
  totalTokens: z.number().optional(),
})

export type MessageMetadata = z.infer<typeof messageMetadataSchema>

/**
 * Custom UIMessage type with typed metadata for enhanced type safety.
 */
export type CustomUIMessage = UIMessage<MessageMetadata>
