import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive email notifications about campaign updates</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="campaign-alerts">Campaign Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified when campaigns are about to end</p>
            </div>
            <Switch id="campaign-alerts" defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="message-notifications">Message Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when new messages are generated</p>
            </div>
            <Switch id="message-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Settings</CardTitle>
          <CardDescription>Configure API integration settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="api-enabled">Enable API Access</Label>
              <p className="text-sm text-muted-foreground">Allow external applications to access your campaign data</p>
            </div>
            <Switch id="api-enabled" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="webhook-notifications">Webhook Notifications</Label>
              <p className="text-sm text-muted-foreground">Send campaign events to external webhooks</p>
            </div>
            <Switch id="webhook-notifications" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
