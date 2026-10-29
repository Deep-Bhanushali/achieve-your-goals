import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComboService() {
  const comboPackages = [
    {
      name: "Individual + Family Combo",
      price: "₹15,999",
      period: "/month",
      description: "Complete financial planning for you and your family",
      features: [
        "Tax filing for 2 individuals",
        "Investment advisory",
        "Insurance planning",
        "Retirement planning",
        "Quarterly reviews",
        "Priority support",
      ],
      popular: false,
    },
    {
      name: "Business Starter Combo",
      price: "₹29,999",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Company registration",
        "12 months accounting",
        "GST filing",
        "TDS returns",
        "Annual compliance",
        "Virtual CFO (Basic)",
      ],
      popular: true,
    },
    {
      name: "Complete Care Combo",
      price: "₹49,999",
      period: "/month",
      description: "All-inclusive package for business owners",
      features: [
        "Business accounting & compliance",
        "Personal tax planning",
        "Investment advisory",
        "Virtual CFO services",
        "Payroll management",
        "24/7 priority support",
      ],
      popular: false,
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
              <Package className="w-4 h-4 text-brand-champagne" />
              <span>Bundled Value Packages</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Combo Services
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Save more with specially curated bundles that combine business compliance, personal taxes, and structured wealth planning.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {comboPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-card ${
                  pkg.popular
                    ? "border-2 border-brand-gold shadow-xl shadow-brand-gold/15"
                    : "border border-border/80 hover:border-brand-gold/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold to-brand-goldDark text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-gold/30">
                    Most Popular
                  </div>
                )}
                <div>
                  <CardHeader className="text-center pb-6 pt-8">
                    <CardTitle className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</CardTitle>
                    <div className="mb-3">
                      <span className="text-4xl font-extrabold text-brand-gold">{pkg.price}</span>
                      <span className="text-muted-foreground text-sm font-medium">{pkg.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 pt-4 border-t border-border/60">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <div className="p-6 pt-2">
                  <Link href="/schedule" className="block w-full">
                    <Button
                      className={`w-full py-6 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                        pkg.popular
                          ? "bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white shadow-brand-gold/25"
                          : "bg-brand-charcoal hover:bg-brand-slate text-white"
                      }`}
                    >
                      Choose Package
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto border border-brand-gold/30 bg-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Need a Custom Package?</h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  Have unique business or personal advisory requirements? We can build a bespoke plan tailored precisely to your goals.
                </p>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-gold text-brand-goldDark dark:text-brand-champagne hover:bg-brand-gold hover:text-white font-semibold transition-all duration-300 rounded-xl gap-2"
                  >
                    <span>Contact Us for Custom Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
