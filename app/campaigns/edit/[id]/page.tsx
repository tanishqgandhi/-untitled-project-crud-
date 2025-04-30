import { CampaignForm } from "@/components/campaign-form"

// This would normally fetch the campaign data from an API
const getCampaign = (id: string) => {
  return {
    id,
    name: "Q2 Sales Outreach",
    target: "sales",
    description: "Campaign targeting sales professionals in the tech industry",
    startDate: "2023-04-01",
    endDate: "2023-06-30",
    status: true,
  }
}

export default function EditCampaign({ params }: { params: { id: string } }) {
  const campaign = getCampaign(params.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Campaign</h1>
        <p className="text-muted-foreground">Update your campaign details</p>
      </div>

      <CampaignForm campaign={campaign} />
    </div>
  )
}
