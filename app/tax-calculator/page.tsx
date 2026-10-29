'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, ArrowRight, CheckCircle2, Clock, FileText, Shield, TrendingUp } from "lucide-react"

export default function TaxCalculatorPage() {
  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Easy Tax Calculation",
      description: "Calculate your income tax in minutes with our user-friendly interface",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "No manual calculations needed - get instant results",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Confidential",
      description: "Your financial data is safe with our encrypted system",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tax Saving Tips",
      description: "Get recommendations on how to save more on taxes",
    },
  ]

  const steps = [
    { number: "01", title: "Visit Calculator", description: "Click the button below to access our tax calculator" },
    { number: "02", title: "Fill Details", description: "Enter your income, deductions, and other financial details" },
    { number: "03", title: "Get Results", description: "View your tax liability and potential savings instantly" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[58vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal pt-20 border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in flex flex-col items-center">
            {/* Single clean centered badge with calculator icon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Calculator className="w-4 h-4 text-brand-champagne" />
              <span>Free Income Tax Calculator</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Calculate Your Income Tax
            </h1>

            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Wondering how much tax you need to pay? Use our smart tax calculator to get an instant, accurate estimate of your tax liability and deductions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                size="lg"
                className="bg-white text-brand-charcoal hover:bg-slate-100 font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 gap-2"
                onClick={() => window.open('https://taxlay.com', '_blank')}
              >
                <span>Calculate Your Tax Now</span>
                <ArrowRight className="w-5 h-5 text-brand-gold" />
              </Button>
            </div>

            <p className="text-slate-300 text-xs tracking-wide">
              Free to use • No registration required • Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Why Use Calculator Section */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
              Why Use Our Tax Calculator?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-base md:text-lg">
              Get accurate tax calculations in seconds, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1 group bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center mx-auto mb-4 text-brand-champagne shadow-md group-hover:scale-110 group-hover:border-brand-gold group-hover:text-[#ffdf8f] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-brand-gold transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-base">
              Calculate your taxes in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border border-border/80 hover:border-brand-gold/50 transition-all duration-300 bg-card">
                  <CardHeader>
                    <div className="text-5xl font-extrabold text-brand-gold/30 mb-2">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-brand-gold/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal relative overflow-hidden text-white border-y border-brand-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="max-w-4xl mx-auto bg-card text-card-foreground border-2 border-brand-gold/30 shadow-2xl">
            <CardHeader className="text-center pb-4 pt-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-brand-gold" />
                </div>
              </div>
              <CardTitle className="text-3xl font-extrabold text-foreground">Ready to Calculate Your Tax?</CardTitle>
              <CardDescription className="text-base mt-2">
                Click the button below to access our free tax calculator
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <Button
                size="lg"
                className="bg-brand-charcoal hover:bg-brand-slate text-white font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 border border-brand-gold/40"
                onClick={() => window.open('https://tax.mangoadmi.in', '_blank')}
              >
                <span>Launch Tax Calculator</span>
                <ArrowRight className="w-5 h-5 text-brand-champagne" />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Opens in new tab • Completely free • No signup required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border border-brand-gold/30 shadow-xl bg-card">
            <CardHeader className="text-center pt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center mx-auto mb-4 text-brand-champagne shadow-md">
                <FileText className="w-7 h-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Need Help With Tax Filing?</CardTitle>
              <CardDescription className="text-base">
                Our experts can help you file your taxes correctly and maximize your savings
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4 pb-8">
              <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
                If you need assistance with tax planning, ITR filing, or have complex tax situations, our team of CA experts is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-gold text-brand-goldDark dark:text-brand-champagne hover:bg-brand-gold hover:text-white font-semibold rounded-xl"
                  onClick={() => window.location.href = '/schedule'}
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  className="bg-brand-charcoal hover:bg-brand-slate text-white font-semibold rounded-xl"
                  onClick={() => window.location.href = '/individual'}
                >
                  View Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
