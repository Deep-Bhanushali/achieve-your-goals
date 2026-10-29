import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, Calculator, DollarSign, Building, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Tax Return Filing",
      description: "Expert tax filing services to maximize your returns and ensure compliance with all regulations.",
      href: "/individual",
    },
    {
      icon: TrendingUp,
      title: "Retirement Planning",
      description: "Secure your future with comprehensive retirement and home loan planning strategies.",
      href: "/individual",
    },
    {
      icon: Calculator,
      title: "Accounting & Virtual CFO",
      description: "Professional accounting services and virtual CFO support for your business growth.",
      href: "/business",
    },
    {
      icon: DollarSign,
      title: "Loans & Financing",
      description: "Access to various loan options and financing solutions tailored to your needs.",
      href: "/business",
    },
    {
      icon: Building,
      title: "Business Consulting",
      description: "Strategic business consulting to help you make informed financial decisions.",
      href: "/business",
    },
    {
      icon: Users,
      title: "Investment Planning",
      description: "Smart investment strategies to grow your wealth and achieve financial goals.",
      href: "/investments",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Core Financial Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            POPULAR SERVICES
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-base md:text-lg">
            Comprehensive financial solutions designed to help you build and protect your wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1.5 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-brand-gold/35 flex items-center justify-center mb-4 text-brand-champagne shadow-md shadow-brand-charcoal/20 group-hover:scale-110 group-hover:border-brand-gold group-hover:text-[#ffdf8f] transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-brand-gold transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-brand-gold hover:text-brand-goldDark group-hover:translate-x-1 transition-all"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
