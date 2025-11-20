import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            ARE YOU READY FOR CHANGES?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Take the first step towards your financial freedom today
          </p>
          <Button
            size="lg"
            className="bg-background text-primary hover:bg-background/90 font-semibold px-12 py-6 text-lg"
          >
            MAKE IT HAPPEN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
