import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-financial.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Charcoal & Gold Brand Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deepCharcoal via-brand-charcoal/80 to-brand-gold/30 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.25),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-24">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-champagne" />
            <span>Strategic Wealth & Advisory Partners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            IT'S ALL ABOUT{" "}
            <span className="block mt-2">WHAT YOU CAN</span>
            <span className="block mt-2 bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold bg-clip-text text-transparent drop-shadow-sm">
              ACHIEVE
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Empower yourself to make the changes you need to reach complete financial independence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-white text-brand-charcoal hover:bg-slate-100 font-extrabold px-8 py-6 text-lg group shadow-2xl rounded-xl transition-all duration-300 gap-2 hover:scale-105"
              >
                <span>LET'S GET STARTED</span>
                <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-brand-charcoal font-bold px-8 py-6 text-lg rounded-xl backdrop-blur-md shadow-lg transition-all duration-300"
              >
                EXPLORE SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
