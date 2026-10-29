"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          agreeToTerms: formData.agreeToTerms,
        }),
      });

      if (response.ok) {
        toast.success("Account created successfully! Welcome to Mango Admi.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          agreeToTerms: false,
        });
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to create account");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in border-2 border-brand-gold/30 shadow-2xl bg-card rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal p-8 text-center text-white border-b border-brand-gold/30">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-champagne text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Client Onboarding</span>
                </div>
                <CardTitle className="text-3xl font-extrabold text-white">Create Your Account</CardTitle>
                <CardDescription className="text-slate-200 text-sm mt-1">
                  Join Mango Admi and unlock dedicated wealth & tax advisory
                </CardDescription>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="e.g. Ramesh"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-11 focus-visible:ring-brand-gold"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="e.g. Patel"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-11 focus-visible:ring-brand-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 focus-visible:ring-brand-gold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 focus-visible:ring-brand-gold"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-semibold">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="h-11 focus-visible:ring-brand-gold"
                        required
                        minLength={8}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="h-11 focus-visible:ring-brand-gold"
                        required
                        minLength={8}
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, agreeToTerms: checked as boolean })
                      }
                      className="mt-0.5 data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      required
                    />
                    <Label htmlFor="terms" className="text-xs leading-relaxed text-muted-foreground cursor-pointer">
                      I agree to the{" "}
                      <Link href="/terms-and-conditions" className="text-brand-gold font-semibold hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and understand how my financial information is securely processed.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-bold py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2 text-base"
                    size="lg"
                  >
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <div className="pt-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>256-Bit SSL Encrypted & Confidential</span>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-2">
                    Already registered?{" "}
                    <Link href="/schedule" className="text-brand-gold font-bold hover:underline">
                      Schedule a consultation
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
