import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  const features = [
    "Personalized financial & wealth guidance",
    "Expert tax strategy and corporate accounting",
    "Comprehensive, risk-assessed investment planning",
    "Dedicated advisor support whenever you need it",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/20">
              <img
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800"
                alt="Financial planning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold and Charcoal ambient backing shape */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-brand-gold/20 to-brand-charcoal/15 rounded-3xl -z-10 blur-xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Our Vision & Philosophy</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              ABOUT MANGO ADMI
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne rounded-full" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We're not just here to discuss numbers — we are here to empower and guide you
              to achieve your greatest personal and business milestones. Whether you need tax optimization,
              strategic investments, or comprehensive wealth planning, our advisors stand by your side every step of the journey.
            </p>

            <div className="space-y-3.5 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/25 transition-all duration-300 gap-2"
                >
                  <span>SCHEDULE A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
