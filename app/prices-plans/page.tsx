import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricesPlans() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Perfect for individuals and salaried professionals getting started",
      features: [
        "1 Tax filing per year",
        "Basic investment advisory",
        "Email advisor support",
        "Quarterly wealth newsletter",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "/month",
      description: "Ideal for growing professionals, families, and HNIs",
      features: [
        "2 Tax filings per year",
        "Complete investment & SIP advisory",
        "Comprehensive insurance audit",
        "Strategic retirement roadmap",
        "Priority direct advisor hotline",
        "Monthly financial health reviews",
      ],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Business",
      price: "₹9,999",
      period: "/month",
      description: "Complete corporate accounting and Virtual CFO suite",
      features: [
        "Complete business accounting & bookkeeping",
        "GST, TDS & statutory compliance",
        "Virtual CFO strategic advisory",
        "Director personal tax planning",
        "Corporate investment advisory",
        "24/7 dedicated priority support",
        "Personal Account Manager",
      ],
      cta: "Choose Business",
      popular: false,
    },
  ];

  const addOnServices = [
    { service: "Additional ITR Filing", price: "₹499 per return" },
    { service: "GST Registration & Setup", price: "₹2,999" },
    { service: "Pvt Ltd / LLP Company Incorporation", price: "₹9,999" },
    { service: "One-Time Holistic Financial Plan", price: "₹4,999" },
    { service: "Insurance Portfolio Audit & Review", price: "₹1,999" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal pt-20 border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Transparent & Predictable Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Prices & Plans
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Transparent, value-driven plans engineered to scale with your personal and corporate milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card ${
                  plan.popular
                    ? "border-2 border-brand-gold shadow-xl shadow-brand-gold/15 md:scale-105 z-10"
                    : "border border-border/80 hover:border-brand-gold/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold to-brand-goldDark text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-gold/30 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Most Popular</span>
                  </div>
                )}
                <div>
                  <CardHeader className="text-center pb-6 pt-8">
                    <CardTitle className="text-2xl font-bold mb-2 text-foreground">{plan.name}</CardTitle>
                    <div className="mb-3">
                      <span className="text-5xl font-extrabold text-brand-gold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 pt-4 border-t border-border/60">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <div className="p-6 pt-2">
                  <Link href="/schedule" className="block w-full">
                    <Button
                      className={`w-full py-6 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                        plan.popular
                          ? "bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white shadow-brand-gold/25"
                          : "bg-brand-charcoal hover:bg-brand-slate text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="max-w-4xl mx-auto">
            <Card className="border border-brand-gold/30 shadow-xl bg-card overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal p-6 text-center text-white">
                <CardTitle className="text-2xl font-bold text-white">A La Carte & Add-on Services</CardTitle>
                <p className="text-xs text-brand-champagne mt-1">Select individual services as your enterprise requires</p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-3">
                  {addOnServices.map((addon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-border/60 hover:border-brand-gold/40 transition-colors"
                    >
                      <span className="font-semibold text-foreground text-sm sm:text-base">{addon.service}</span>
                      <span className="text-brand-gold font-bold text-sm sm:text-base">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Custom Plan Callout */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4 text-base">
              Need a bespoke corporate plan? We craft custom solutions tailored to your organization.
            </p>
            <Link href="/schedule">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-gold text-brand-goldDark dark:text-brand-champagne hover:bg-brand-gold hover:text-white font-semibold rounded-xl gap-2 transition-all duration-300"
              >
                <span>Contact Us for Custom Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
