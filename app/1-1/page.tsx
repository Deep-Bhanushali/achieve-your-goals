import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Clock, CheckCircle2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OneOnOne() {
  const features = [
    "Personalized, bespoke financial roadmap",
    "One-on-one confidential video consultation",
    "Deep-dive portfolio & asset allocation review",
    "Tailored goal-based timeline mapping",
    "Actionable tax optimization strategies",
    "Dedicated post-session follow-up support",
  ];

  const benefits = [
    {
      icon: Video,
      title: "Virtual Meetings",
      description: "Connect securely from anywhere via interactive video call.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book appointments that fit seamlessly into your calendar.",
    },
    {
      icon: Users,
      title: "Certified Advisors",
      description: "Direct access to senior chartered accountants and wealth planners.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal pt-20 border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in flex flex-col items-center">
            {/* Single clean centered pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Users className="w-4 h-4 text-brand-champagne" />
              <span>Private 1-on-1 Advisory</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              1-on-1 Consultation
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Receive dedicated, confidential financial guidance from certified consultants focused exclusively on your wealth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
            {/* What You Get */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold">
                <span>Tailored Session Structure</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                What You'll Get
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne rounded-full" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our 1-on-1 sessions are designed to deliver actionable clarity. No generic advice — only customized strategies built around your tax status, income sources, and life ambitions.
              </p>
              <ul className="space-y-4 pt-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <Card className="lg:sticky lg:top-28 animate-slide-up shadow-2xl border-2 border-brand-gold/40 bg-card rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal p-4 text-center border-b border-brand-gold/30">
                <span className="text-brand-champagne text-xs font-bold uppercase tracking-widest">
                  Personal Wealth Advisory
                </span>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Single Session</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-extrabold text-brand-gold">₹4,999</span>
                    <span className="text-muted-foreground text-sm font-medium">/session</span>
                  </div>
                  <p className="text-muted-foreground text-sm">60-minute in-depth video consultation</p>
                </div>

                <div className="space-y-3 py-6 border-y border-border/70">
                  <p className="font-semibold text-sm text-foreground">Session deliverables:</p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>Comprehensive financial audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>Personalized investment & tax recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>Formal written Action Plan document</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>7-day direct email follow-up support</span>
                    </li>
                  </ul>
                </div>

                <Link href="/schedule" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-semibold py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2"
                  >
                    <span>Book Your Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <div className="text-center pt-1">
                  <p className="text-xs text-muted-foreground">
                    Multi-session package: 4 sessions for{" "}
                    <span className="text-brand-gold font-bold">₹9,999</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/40 flex items-center justify-center mx-auto text-brand-champagne shadow-md shadow-brand-charcoal/20">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
