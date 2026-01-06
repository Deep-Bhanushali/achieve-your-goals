import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ARE YOU READY FOR CHANGES?
          </h2>
          <p className="text-xl text-muted-foreground">
            Take the first step towards your financial freedom today
          </p>
          <Link href="/schedule#contact-form">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold px-12 py-6 text-lg"
            >
              MAKE IT HAPPEN
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
