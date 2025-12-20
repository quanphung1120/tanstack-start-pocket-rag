import { createFileRoute } from '@tanstack/react-router'
import { getAuth } from '@workos/authkit-tanstack-react-start'
import { convertToModelMessages, gateway, streamText } from 'ai'
import type { CustomUIMessage } from '@/features/chat/types'

export const Route = createFileRoute('/api/chat/')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { user } = await getAuth()
        if (!user || user.email != 'phungthequan030@gmail.com') {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        try {
          const {
            messages,
            model,
          }: { messages: Array<CustomUIMessage>; model?: string } =
            await request.json()

          const selectedModel = model || 'xai/grok-4.1-fast-reasoning'

          const result = streamText({
            model: gateway(selectedModel),
            system:
              'You are a highly precise academic and technical assistant. ' +
              'Your goal is to provide rigorously accurate, factual, and logically sound information. ' +
              'Prioritize technical depth, clear explanations of complex concepts, and evidence-based reasoning. ' +
              'Use Markdown for formatting and text-based diagrams (ASCII art, tables) for complex visualizations and structural representations. ' +
              'If you are uncertain about a fact, state the uncertainty or provide the most likely consensus. ' +
              'Maintain a formal, professional tone suitable for academic discourse.',
            messages: convertToModelMessages(messages),
            temperature: 0,
          })

          return result.toUIMessageStreamResponse({
            originalMessages: messages,
            messageMetadata: ({ part }) => {
              if (part.type === 'start') {
                return {
                  createdAt: Date.now(),
                  model: selectedModel,
                }
              }
              if (part.type === 'finish') {
                return {
                  totalTokens: part.totalUsage.totalTokens,
                }
              }
            },
          })
        } catch (error) {
          console.error('Error in chat handler:', error)
          return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
