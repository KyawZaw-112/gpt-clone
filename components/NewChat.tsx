import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
    <div className="text-white border-gray-500 border chatRow">
        <PlusIcon className="w-4 h-4" />
        <p>
            New Chat
        </p>
    </div>
  )
}

export default NewChat