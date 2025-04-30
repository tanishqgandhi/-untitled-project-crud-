"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function CampaignForm({ campaign = null }: { campaign?: any }) {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date | undefined>(
    campaign?.startDate ? new Date(campaign.startDate) : undefined,
  )
  const [endDate, setEndDate] = useState<Date | undefined>(campaign?.endDate ? new Date(campaign.endDate) : undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // For now, just redirect back to the dashboard
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Campaign Name</Label>
              <Input id="name" placeholder="Enter campaign name" defaultValue={campaign?.name || ""} required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="target">Target Audience</Label>
              <Select defaultValue={campaign?.target || ""}>
                <SelectTrigger id="target">
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Professionals</SelectItem>
                  <SelectItem value="tech">Tech Industry</SelectItem>
                  <SelectItem value="marketing">Marketing Professionals</SelectItem>
                  <SelectItem value="hr">HR Professionals</SelectItem>
                  <SelectItem value="executives">C-Level Executives</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Campaign Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your campaign"
                rows={4}
                defaultValue={campaign?.description || ""}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-3">
                <Label>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="status" defaultChecked={campaign?.status || false} />
              <Label htmlFor="status">Active Campaign</Label>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button" onClick={() => router.push("/")}>
                Cancel
              </Button>
              <Button type="submit">{campaign ? "Update Campaign" : "Create Campaign"}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
