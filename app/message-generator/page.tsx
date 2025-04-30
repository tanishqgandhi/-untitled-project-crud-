import { MessageGenerator } from "@/components/message-generator"

export default function MessageGeneratorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">LinkedIn Message Generator</h1>
        <p className="text-muted-foreground">Generate personalized LinkedIn messages based on profile data</p>
      </div>

      <MessageGenerator />
    </div>
  )
}
