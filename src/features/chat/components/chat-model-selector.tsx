import { useState } from 'react'
import { useChatModel } from '../context/chat-model-context'
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from '@/components/ai-elements/model-selector'
import { Button } from '@/components/ui/button'

/**
 * Dropdown selector for choosing the active chat model.
 * Consumes model state from ChatModelContext.
 */
export function ChatModelSelector() {
  const [open, setOpen] = useState(false)
  const { selectedModel, setSelectedModel, selectedModelData, models } =
    useChatModel()

  // Get unique chefs in order of appearance
  const chefs = Array.from(new Set(models.map((model) => model.chef)))

  return (
    <ModelSelector onOpenChange={setOpen} open={open}>
      <ModelSelectorTrigger asChild>
        <Button className="justify-between" variant="outline">
          {selectedModelData?.chefSlug && (
            <ModelSelectorLogo provider={selectedModelData.chefSlug} />
          )}
          {selectedModelData?.name && (
            <ModelSelectorName>{selectedModelData.name}</ModelSelectorName>
          )}
        </Button>
      </ModelSelectorTrigger>
      <ModelSelectorContent>
        <ModelSelectorInput placeholder="Search models..." />
        <ModelSelectorList>
          <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
          {chefs.map((chef) => (
            <ModelSelectorGroup heading={chef} key={chef}>
              {models
                .filter((model) => model.chef === chef)
                .map((model) => (
                  <ModelSelectorItem
                    checked={selectedModel === model.id}
                    key={model.id}
                    onSelect={() => {
                      setSelectedModel(model.id)
                      setOpen(false)
                    }}
                    value={model.id}
                  >
                    <ModelSelectorLogo provider={model.chefSlug} />
                    <ModelSelectorName>{model.name}</ModelSelectorName>
                    <ModelSelectorLogoGroup providers={model.providers} />
                  </ModelSelectorItem>
                ))}
            </ModelSelectorGroup>
          ))}
        </ModelSelectorList>
      </ModelSelectorContent>
    </ModelSelector>
  )
}
