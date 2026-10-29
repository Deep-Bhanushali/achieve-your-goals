import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, BarChart3, LineChart, Wallet, Shield, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Investments() {
  const investmentOptions = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified investment portfolios managed by seasoned fund managers for balanced capital appreciation.",
      benefits: ["Professional Management", "Liquidity", "Tax Benefits", "Disciplined SIP Options"],
    },
    {
      icon: PieChart,
      title: "Equity & Stocks",
      description: "Direct equity research and advisory for accelerated, long-term multi-bagger wealth creation.",
      benefits: ["High Growth Potential", "Dividend Yield", "Strategic Rebalancing", "Expert Advisory"],
    },
    {
      icon: BarChart3,
      title: "Fixed Income",
      description: "Stable, guaranteed-return instruments through high-rated corporate bonds, FDs, and debt securities.",
      benefits: ["Guaranteed Returns", "Capital Protection", "Predictable Cash Flow", "Low Volatility"],
    },
    {
      icon: LineChart,
      title: "National Pension Scheme",
      description: "Government-backed retirement corpus growth with Tier I & II tax deductions.",
      benefits: ["Section 80CCD Deductions", "Retirement Corpus", "Market-Linked Growth", "Flexible Asset Allocation"],
    },
    {
      icon: Wallet,
      title: "Real Estate & REITs",
      description: "Commercial and residential property backed investments and fractional real estate trusts.",
      benefits: ["Capital Appreciation", "Rental Cash Flows", "Inflation Shield", "Tangible Security"],
    },
    {
      icon: Shield,
      title: "Wealth Protection Plans",
      description: "Structured investment-linked insurance plans for generational legacy and downside hedging.",
      benefits: ["Comprehensive Life Cover", "Tax-Free Maturity", "Goal-Linked Milestones", "Wealth Preservation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/investments.jpg"
            alt="Investment planning"
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
              <span>Systematic Wealth Architecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Investment Planning
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
              Build wealth systematically with expert-guided investment strategies tailored to your timeline and risk appetite.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Curated Investment Instruments
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-base">
              A diversified array of high-performing assets designed to outpace inflation and compound your net worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <Card
                key={index}
                className="group border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1.5 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center mb-4 text-brand-champagne shadow-md shadow-brand-charcoal/20 group-hover:scale-110 group-hover:border-brand-gold group-hover:text-[#ffdf8f] transition-all duration-300">
                    <option.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-brand-gold transition-colors">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground pt-1">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 pt-2 border-t border-border/50">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl mx-auto">
              Our seasoned financial advisors will review your current portfolio and engineer a personalized wealth roadmap.
            </p>
            <div className="pt-2">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2 text-base"
                >
                  <span>Schedule Investment Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
