import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileSpreadsheet, PieChart, Sparkles, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ReportsPage() {
  const upcomingFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Comprehensive Tax Summaries",
      description: "Visual breakdowns of your deductions, advance tax computations, and annual ITR history.",
    },
    {
      icon: PieChart,
      title: "Portfolio Asset Allocation",
      description: "Deep analytics across equity, debt, NPS, and real estate with rebalancing recommendations.",
    },
    {
      icon: BarChart3,
      title: "Corporate Financial Health",
      description: "Executive dashboards for Virtual CFO clients tracking cash flow, GST reconciliations, and P&L.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero / Coming Soon Section */}
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal border-b border-brand-gold/20 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-6 animate-fade-in flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
                <Clock className="w-4 h-4 text-brand-champagne" />
                <span>Feature In Active Development</span>
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center text-brand-champagne shadow-xl shadow-brand-deepCharcoal/40 my-2">
                <BarChart3 className="w-10 h-10 text-brand-champagne" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Financial Reports{" "}
                <span className="block mt-2 bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
                We are building an intelligent reporting engine to give you comprehensive visibility into your tax filings, investment performance, and business balance sheets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-white text-brand-charcoal hover:bg-slate-100 font-bold text-base px-8 py-6 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 gap-2"
                  >
                    <span>Request Early Access</span>
                    <ArrowRight className="w-5 h-5 text-brand-gold" />
                  </Button>
                </Link>
                <Link href="/individual">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-brand-charcoal font-bold text-base px-8 py-6 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Bank-Grade Encryption & Certified Data Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Preview Section */}
        <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>What We Are Building</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Intelligent Insights Designed for Growth
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
              <p className="text-muted-foreground text-base">
                Here is a preview of the report suites coming to your Mango Admi portal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {upcomingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1 bg-card group"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center text-brand-champagne shadow-md group-hover:scale-110 group-hover:border-brand-gold group-hover:text-[#ffdf8f] transition-all duration-300">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-brand-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

