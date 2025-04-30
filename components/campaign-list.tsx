"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// Sample campaign data
const initialCampaigns = [
  {
    id: "1",
    name: "Q2 Sales Outreach",
    target: "Sales Professionals",
    startDate: "2023-04-01",
    endDate: "2023-06-30",
    status: true,
  },
  {
    id: "2",
    name: "Tech Conference Follow-up",
    target: "Conference Attendees",
    startDate: "2023-05-15",
    endDate: "2023-06-15",
    status: true,
  },
  {
    id: "3",
    name: "Product Launch",
    target: "Existing Customers",
    startDate: "2023-07-01",
    endDate: "2023-08-31",
    status: false,
  },
  {
    id: "4",
    name: "Recruitment Drive",
    target: "Senior Developers",
    startDate: "2023-06-01",
    endDate: "2023-09-30",
    status: true,
  },
  {
    id: "5",
    name: "Holiday Promotion",
    target: "All Customers",
    startDate: "2023-11-15",
    endDate: "2023-12-31",
    status: false,
  },
]

export function CampaignList() {
  const [campaigns, setCampaigns] = useState(initialCampaigns)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const handleStatusChange = (id: string, checked: boolean) => {
    setCampaigns(campaigns.map((campaign) => (campaign.id === id ? { ...campaign, status: checked } : campaign)))
  }

  const handleDelete = (id: string) => {
    setCampaigns(campaigns.filter((campaign) => campaign.id !== id))
    setDeleteId(null)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Target Audience</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>{campaign.target}</TableCell>
              <TableCell>{campaign.startDate}</TableCell>
              <TableCell>{campaign.endDate}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={campaign.status}
                    onCheckedChange={(checked) => handleStatusChange(campaign.id, checked)}
                  />
                  <span>{campaign.status ? "Active" : "Inactive"}</span>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/campaigns/edit/${campaign.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => setDeleteId(campaign.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the campaign.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
