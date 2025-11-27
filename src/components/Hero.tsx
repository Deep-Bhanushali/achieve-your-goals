import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-financial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            IT'S ALL ABOUT{" "}
            <span className="block mt-2">WHAT YOU CAN</span>
            <span className="block mt-2 text-background">ACHIEVE</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Empower yourself to make the changes you need to make
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold px-8 py-6 text-lg group shadow-lg"
            >
              LET'S GET STARTED
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg shadow-lg"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
