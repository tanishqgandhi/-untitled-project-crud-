import { CampaignForm } from "@/components/campaign-form"

export default function NewCampaign() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Campaign</h1>
        <p className="text-muted-foreground">Set up a new campaign to reach your target audience</p>
      </div>

      <CampaignForm />
    </div>
  )
}
