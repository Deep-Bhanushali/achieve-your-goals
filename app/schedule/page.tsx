'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Mail, Phone, User, ArrowRight } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsLoading(true)

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(/\s+/)
      const firstName = nameParts[0] || ""
      let lastName = nameParts.slice(1).join(" ") || ""

      // If no last name provided, use a placeholder
      if (!lastName) {
        lastName = firstName
      }

      // Clean phone number - remove all non-digits
      const cleanPhone = formData.phone.replace(/\D/g, "")

      if (cleanPhone.length < 10 || cleanPhone.length > 15) {
        toast.error("Please enter a valid phone number (10-15 digits)")
        setIsLoading(false)
        return
      }

      // Send to Next.js API route
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: cleanPhone,
          message: `Appointment Request\n\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\n\nAdditional Message:\n${formData.message}`,
          subject: `Appointment Request - ${formData.service}`,
          serviceType: "Other",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message || "Appointment request submitted! We'll contact you soon.")
        console.log("✓ Appointment sent to backend:", data)

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        })
      } else {
        toast.error(data.message || "Failed to submit appointment")
        console.error("✗ Error response:", data)
      }
    } catch (error) {
      console.error("✗ Appointment submission error:", error)
      toast.error("An error occurred while submitting your appointment")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const services = [
    "Tax Filing",
    "Investment Advisory",
    "Retirement Planning",
    "Business Accounting",
    "Virtual CFO",
    "Insurance Planning",
    "Other",
  ]

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal pt-20 border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in flex flex-col items-center">
            {/* Single clean centered pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Calendar className="w-4 h-4 text-brand-champagne" />
              <span>Direct Advisor Access</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Schedule Appointment
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Book a consultation with our financial and tax experts to map out your roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold mb-3">
                  <span>Fast Response Guaranteed</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
                  Get in Touch
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne rounded-full mb-4" />
                <p className="text-muted-foreground text-base leading-relaxed">
                  Fill out the consultation request and a dedicated advisor will reach out to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border border-border/80 hover:border-brand-gold/40 transition-all bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground mb-1">Working Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday - Sunday: 11:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/80 hover:border-brand-gold/40 transition-all bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground mb-1">Direct Support Email</h3>
                        <a href="mailto:sahay@mangoadmi.in" className="text-sm font-semibold text-brand-gold hover:underline">
                          sahay@mangoadmi.in
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">Available for quick queries & document review</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/80 hover:border-brand-gold/40 transition-all bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground mb-1">Priority Support</h3>
                        <p className="text-sm text-muted-foreground">Direct CA phone lines open for active consultation clients</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <Card className="animate-slide-up border-2 border-brand-gold/30 shadow-2xl bg-card rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal p-5 text-center border-b border-brand-gold/30 text-white">
                <CardTitle className="text-xl font-bold text-white">Book Your Appointment</CardTitle>
                <CardDescription className="text-slate-300 text-xs mt-1">
                  Choose your preferred date and time for confidential consultation
                </CardDescription>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="pl-10 h-11 focus-visible:ring-brand-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="pl-10 h-11 focus-visible:ring-brand-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="pl-10 h-11 focus-visible:ring-brand-gold"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-semibold text-foreground">Service Required *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                      <SelectTrigger className="h-11 focus:ring-brand-gold">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-semibold text-foreground">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="h-11 focus-visible:ring-brand-gold"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-sm font-semibold text-foreground">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleChange("time", value)} required>
                        <SelectTrigger className="h-11 focus:ring-brand-gold">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Additional Notes (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your financial or business goals..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={3}
                      className="focus-visible:ring-brand-gold"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-bold py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2 text-base"
                    size="lg"
                    disabled={isLoading}
                  >
                    <span>{isLoading ? "Submitting Request..." : "Confirm & Schedule Appointment"}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
