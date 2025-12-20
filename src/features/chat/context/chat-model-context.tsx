import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Model definition interface matching the example pattern.
 * Includes provider slugs for logos and available providers.
 */
export interface ChatModelDefinition {
  id: string
  name: string
  chef: string
  chefSlug: string
  providers: Array<string>
}

/**
 * Available chat models with their full definitions.
 * These are used for display and the ID is sent to the API.
 */
export const CHAT_MODELS: Array<ChatModelDefinition> = [
  {
    id: 'xai/grok-4.1-fast-reasoning',
    name: 'xAI Grok 4.1',
    chef: 'xAI',
    chefSlug: 'xai',
    providers: ['xai'],
  },
  {
    id: 'moonshotai/kimi-k2-thinking',
    name: 'Kimi K2 Thinking',
    chef: 'Moonshot AI',
    chefSlug: 'moonshotai',
    providers: ['moonshotai'],
  },
  {
    id: 'perplexity/sonar',
    name: 'Perplexity Sonar',
    chef: 'Perplexity',
    chefSlug: 'perplexity',
    providers: ['perplexity'],
  },
]

/** Default model ID for initialization */
export const DEFAULT_MODEL_ID = CHAT_MODELS[0].id

// --- Context Definition ---

interface ChatModelContextValue {
  selectedModel: string
  setSelectedModel: (modelId: string) => void
  selectedModelData: ChatModelDefinition | undefined
  models: Array<ChatModelDefinition>
}

const ChatModelContext = createContext<ChatModelContextValue | null>(null)

// --- Provider Component ---

interface ChatModelProviderProps {
  children: ReactNode
  defaultModelId?: string
}

/**
 * Provides chat model state to the component tree.
 * Wrap your chat-related components with this provider.
 */
export function ChatModelProvider({
  children,
  defaultModelId = DEFAULT_MODEL_ID,
}: ChatModelProviderProps) {
  const [selectedModel, setSelectedModel] = useState<string>(defaultModelId)

  // Find the full model data for the selected model
  const selectedModelData = CHAT_MODELS.find(
    (model) => model.id === selectedModel,
  )

  const value: ChatModelContextValue = {
    selectedModel,
    setSelectedModel,
    selectedModelData,
    models: CHAT_MODELS,
  }

  return (
    <ChatModelContext.Provider value={value}>
      {children}
    </ChatModelContext.Provider>
  )
}

// --- Hook ---

/**
 * Hook to access the current chat model context.
 * Must be used within a ChatModelProvider.
 */
export function useChatModel(): ChatModelContextValue {
  const context = useContext(ChatModelContext)

  if (!context) {
    throw new Error('useChatModel must be used within a ChatModelProvider')
  }

  return context
}
