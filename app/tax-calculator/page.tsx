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
      description: "Calculate your income tax in minutes with our user-friendly interface"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "No manual calculations needed - get instant results"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Confidential",
      description: "Your financial data is safe with our encrypted system"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tax Saving Tips",
      description: "Get recommendations on how to save more on taxes"
    }
  ]

  const steps = [
    { number: "01", title: "Visit Calculator", description: "Click the button below to access our tax calculator" },
    { number: "02", title: "Fill Details", description: "Enter your income, deductions, and other financial details" },
    { number: "03", title: "Get Results", description: "View your tax liability and potential savings instantly" }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Calculate Your Income Tax
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Wondering how much tax you need to pay? Use our free tax calculator to get an instant estimate of your tax liability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://taxlay.com', '_blank')}
              >
                Calculate Your Tax Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-white/70 text-sm">
              Free to use • No registration required • Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Why Use Calculator Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Use Our Tax Calculator?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get accurate tax calculations in seconds, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Calculate your taxes in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-3xl">Ready to Calculate Your Tax?</CardTitle>
              <CardDescription className="text-base mt-2">
                Click the button below to access our free tax calculator
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://tax.mangoadmi.in', '_blank')}
              >
                Launch Tax Calculator
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Opens in new tab • Completely free • No signup required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Need Help With Tax Filing?</CardTitle>
              <CardDescription>
                Our experts can help you file your taxes correctly and maximize your savings
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                If you need assistance with tax planning, ITR filing, or have complex tax situations, our team of CA experts is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = '/schedule'}
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
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
