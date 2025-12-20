import { createFileRoute } from '@tanstack/react-router'
import { getAuth } from '@workos/authkit-tanstack-react-start'
import { convertToModelMessages, gateway, streamText } from 'ai'
import type { UIMessage } from 'ai'

export const Route = createFileRoute('/api/chat/')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { user } = await getAuth()
        if (!user) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        try {
          const {
            messages,
            model,
          }: { messages: Array<UIMessage>; model?: string } =
            await request.json()

          const selectedModel = model || 'moonshotai/kimi-k2-thinking'
          const result = streamText({
            model: gateway(selectedModel),
            messages: convertToModelMessages(messages),
          })

          return result.toUIMessageStreamResponse()
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
