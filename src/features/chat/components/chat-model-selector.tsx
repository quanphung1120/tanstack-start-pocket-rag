import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import {
  CHAT_MODELS,
  MODEL_INFO,
  useChatModel,
} from '../context/chat-model-context'
import type { ChatModel } from '../context/chat-model-context'
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorGroup,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from '@/components/ai-elements/model-selector'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/**
 * Dropdown selector for choosing the active chat model.
 * Consumes model state from ChatModelContext.
 */
export function ChatModelSelector() {
  const [open, setOpen] = useState(false)
  const { selectedModel, setSelectedModel, modelInfo } = useChatModel()

  const handleModelSelect = (modelId: ChatModel) => {
    setSelectedModel(modelId)
    setOpen(false)
  }

  return (
    <ModelSelector open={open} onOpenChange={setOpen}>
      <ModelSelectorTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 font-medium px-2 hover:bg-muted/50 text-xs"
        >
          <span className={`size-1.5 rounded-full ${modelInfo.color}`} />
          {modelInfo.name}
          <ChevronDownIcon className="size-3 opacity-50" />
        </Button>
      </ModelSelectorTrigger>

      <ModelSelectorContent className="w-64" title="Choose a model">
        <ModelSelectorList>
          <ModelSelectorGroup heading="Available Models">
            {Object.entries(CHAT_MODELS).map(([key, modelId]) => {
              const info = MODEL_INFO[modelId]
              const isActive = selectedModel === modelId

              return (
                <ModelSelectorItem
                  key={key}
                  className="justify-between cursor-pointer"
                  onSelect={() => handleModelSelect(modelId)}
                >
                  <div className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${info.color}`} />
                    <div className="flex flex-col">
                      <span>{info.name}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {info.description}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <Badge variant="outline" className="text-[10px] h-4 px-1">
                      Active
                    </Badge>
                  )}
                </ModelSelectorItem>
              )
            })}
          </ModelSelectorGroup>
        </ModelSelectorList>
      </ModelSelectorContent>
    </ModelSelector>
  )
}
