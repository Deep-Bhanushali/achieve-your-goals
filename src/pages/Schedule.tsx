import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { contactApi } from "@/lib/api";

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      let lastName = nameParts.slice(1).join(" ") || "";
      
      // If no last name provided, use a placeholder
      if (!lastName) {
        lastName = firstName;
      }

      // Clean phone number - remove all non-digits
      const cleanPhone = formData.phone.replace(/\D/g, "");
      
      if (cleanPhone.length < 10 || cleanPhone.length > 15) {
        toast.error("Please enter a valid phone number (10-15 digits)");
        setIsLoading(false);
        return;
      }

      // Send to backend API
      const response = await contactApi.submitForm({
        firstName,
        lastName,
        email: formData.email,
        phone: cleanPhone,
        message: `Appointment Request\n\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\n\nAdditional Message:\n${formData.message}`,
        subject: `Appointment Request - ${formData.service}`,
        serviceType: "Other",
      });

      if (response.data) {
        toast.success(response.message || "Appointment request submitted! We'll contact you soon.");
        console.log("✓ Appointment sent to backend:", response);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        toast.error(response.message || "Failed to submit appointment");
        console.error("✗ Error response:", response);
      }
    } catch (error) {
      console.error("✗ Appointment submission error:", error);
      toast.error("An error occurred while submitting your appointment");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Tax Filing",
    "Investment Advisory",
    "Retirement Planning",
    "Business Accounting",
    "Virtual CFO",
    "Insurance Planning",
    "Other",
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-primary pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <Calendar className="w-16 h-16 text-primary-foreground mx-auto" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Schedule Appointment
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Book a consultation with our financial experts
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Working Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday - Sunday: 11:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a href="mailto:sahay@mangoadmi.in" className="text-sm text-primary hover:underline">
                          sahay@mangoadmi.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Priority Support</h3>
                        <p className="text-sm text-muted-foreground">Available for premium members</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Book Your Appointment</CardTitle>
                <CardDescription>
                  Choose your preferred date and time for consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                      <SelectTrigger>
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
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleChange("time", value)} required>
                        <SelectTrigger>
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
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground" size="lg" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Schedule Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
