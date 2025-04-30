"use client"

import type React from "react"

import { useState } from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Sample profile data
const sampleProfile = {
  name: "Alex Johnson",
  title: "Senior Software Engineer",
  company: "TechCorp Inc.",
  industry: "Software Development",
  education: "Computer Science, Stanford University",
  skills: "React, Node.js, TypeScript, AWS",
  experience: "8 years in software development, previously at Google and Microsoft",
  interests: "Open source, AI, Machine Learning",
  mutualConnections: "Jane Smith, Michael Brown",
  recentActivity: "Published an article on microservices architecture",
}

export function MessageGenerator() {
  const { toast } = useToast()
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    company: "",
    industry: "",
    education: "",
    skills: "",
    experience: "",
    interests: "",
    mutualConnections: "",
    recentActivity: "",
  })
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const loadSampleData = () => {
    setProfile(sampleProfile)
  }

  const clearForm = () => {
    setProfile({
      name: "",
      title: "",
      company: "",
      industry: "",
      education: "",
      skills: "",
      experience: "",
      interests: "",
      mutualConnections: "",
      recentActivity: "",
    })
    setMessage("")
  }

  const generateMessage = () => {
    setLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // This would normally be an API call to generate the message
      const generatedMessage = `
Hi ${profile.name},

I noticed your impressive background as a ${profile.title} at ${profile.company}. Your experience in ${profile.experience} caught my attention.

I see we share an interest in ${profile.interests} and have mutual connections with ${profile.mutualConnections}. I particularly enjoyed your recent activity: ${profile.recentActivity}.

I'm reaching out because I believe our campaign could be relevant to someone with your expertise in ${profile.skills}. Would you be open to a brief conversation about how we might collaborate?

Looking forward to connecting,
[Your Name]
      `.trim()

      setMessage(generatedMessage)
      setLoading(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message)
    toast({
      title: "Copied to clipboard",
      description: "Message has been copied to your clipboard",
    })
  }

  return (
    <Tabs defaultValue="form">
      <TabsList className="mb-4">
        <TabsTrigger value="form">Profile Data</TabsTrigger>
        <TabsTrigger value="message">Generated Message</TabsTrigger>
      </TabsList>

      <TabsContent value="form">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex justify-between">
              <Button variant="outline" onClick={loadSampleData} type="button">
                Load Sample Data
              </Button>
              <Button variant="outline" onClick={clearForm} type="button">
                Clear Form
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Senior Developer"
                    value={profile.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    value={profile.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="Technology"
                    value={profile.industry}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="education">Education</Label>
                <Input
                  id="education"
                  name="education"
                  placeholder="Computer Science, Stanford University"
                  value={profile.education}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  placeholder="React, Node.js, TypeScript"
                  value={profile.skills}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="experience">Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="8 years in software development, previously at Google"
                  value={profile.experience}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="interests">Interests</Label>
                <Input
                  id="interests"
                  name="interests"
                  placeholder="AI, Machine Learning, Open Source"
                  value={profile.interests}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mutualConnections">Mutual Connections</Label>
                <Input
                  id="mutualConnections"
                  name="mutualConnections"
                  placeholder="Jane Smith, Michael Brown"
                  value={profile.mutualConnections}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="recentActivity">Recent Activity</Label>
                <Input
                  id="recentActivity"
                  name="recentActivity"
                  placeholder="Published an article on microservices"
                  value={profile.recentActivity}
                  onChange={handleInputChange}
                />
              </div>

              <Button onClick={generateMessage} disabled={loading || !profile.name} className="mt-2">
                {loading ? "Generating..." : "Generate Message"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="message">
        <Card>
          <CardContent className="pt-6">
            {message ? (
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">Generated Message</h3>
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <div className="rounded-md bg-muted p-4 whitespace-pre-wrap">{message}</div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setMessage("")}>
                    Clear Message
                  </Button>
                  <Button onClick={generateMessage}>Regenerate</Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="mb-4 text-muted-foreground">
                  No message generated yet. Fill in the profile data and click "Generate Message".
                </p>
                <Button onClick={() => document.querySelector('[data-value="form"]')?.click()}>
                  Go to Profile Data
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
