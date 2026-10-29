import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal text-white">
      {/* Gold ambient circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-champagne text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-champagne" />
            <span>Ready for Financial Transformation?</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            TAKE THE FIRST STEP TOWARDS{" "}
            <span className="block mt-2 bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold bg-clip-text text-transparent">
              FINANCIAL FREEDOM
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
            Partner with dedicated advisors who make complex tax laws simple and investment planning effortless.
          </p>

          <div className="pt-4">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-gold to-brand-goldDark hover:from-[#c59c55] hover:to-[#ae863e] text-white font-bold px-10 py-7 text-lg rounded-xl shadow-xl shadow-brand-gold/30 border border-brand-gold/40 transition-all duration-300 gap-2"
              >
                <span>MAKE IT HAPPEN</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
