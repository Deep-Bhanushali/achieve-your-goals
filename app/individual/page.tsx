import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, PiggyBank, Home, TrendingUp, Shield, Calculator, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IndividualPage() {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description: "Comprehensive tax filing services for individuals. We help you maximize deductions and ensure full regulatory compliance.",
      features: ["ITR 1-4 Filing", "Tax Planning", "Refund Processing", "Tax Notices Support"],
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Secure your future with strategic retirement planning tailored to your lifestyle goals and wealth milestones.",
      features: ["NPS Advisory", "Pension Planning", "Corpus Building", "Post-Retirement Income"],
    },
    {
      icon: Home,
      title: "Home Loan Planning",
      description: "Get the best loan structures and optimize interest, EMI planning, and government tax exemptions.",
      features: ["Loan Comparison", "EMI Planning", "Tax Benefits", "Documentation Support"],
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on mutual funds, stocks, and structured opportunities tailored to your risk profile.",
      features: ["Portfolio Review", "SIP Planning", "Risk Assessment", "Goal-based Investing"],
    },
    {
      icon: Shield,
      title: "Insurance Planning",
      description: "Protect your family and assets with optimized term, life, and health insurance coverage.",
      features: ["Life Insurance", "Health Insurance", "Term Plans", "Claims Assistance"],
    },
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Holistic wealth architecture covering emergency funds, debt management, and future goal tracking.",
      features: ["Budget Planning", "Debt Management", "Emergency Fund", "Goal Planning"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/individual-service.jpg"
            alt="Individual services"
            fill
            className="object-cover"
            priority
          />
          {/* Charcoal & Gold Brand Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deepCharcoal/95 via-brand-charcoal/90 to-brand-gold/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.25),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Personalized Financial Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Individual Services
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
              Tailored wealth, tax, and investment solutions crafted to protect your family and accelerate your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Solutions Designed for Every Milestone
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-base">
              Transparent, expert-backed guidance to optimize taxes, grow investments, and safeguard long-term wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1.5 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center mb-4 text-brand-champagne shadow-md shadow-brand-charcoal/20 group-hover:scale-110 group-hover:border-brand-gold group-hover:text-[#ffdf8f] transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 pt-2 border-t border-border/50">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2 text-base"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
