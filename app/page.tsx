import Image from "next/image";
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
const page = () => {
  return (
    <div className="text-white flex-col flex h-screen items-center">
      <div className="mb-3 mt-10 border p-2 rounded-full border-gray-600">
        <Image src={"./Vector.svg"} alt={"icon"} width={20} height={20} />
      </div>
      <h1 className="text-2xl font-medium mb-12">How can I help you today?</h1>
      <div className="flex space-x-2 text-center px-3">
        <div>
          <div className="flex items-center flex-col space-y-1 mb-4">
            {/* Sun Icon */}
            <SunIcon className="h-6 w-6" />
            <h1>Example</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between dog and cat?"</p>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-col space-y-1 mb-4">
            {/* Bolt Icon */}
            <BoltIcon className="h-6 w-6" />
            <h1>Capabilities</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">Change the ChatGPT Model to use.</p>
            <p className="infoText">Messages are stored in Firebase's Fiestore!</p>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-col space-y-1 mb-4">
            {/* ExclamationTriangle Icon */}
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h1>Limitations</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce haemful instructions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;