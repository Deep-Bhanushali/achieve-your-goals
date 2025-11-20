import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Personalized financial guidance",
    "Expert tax and accounting services",
    "Comprehensive investment strategies",
    "24/7 customer support",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800"
                alt="Financial planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              ABOUT MANGO ADMI
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not here to make you Financially Independent, we're here to motivate you 
              to carry yourself to your goals. If you're not sure what your goals are, or don't 
              know where to start on your journey, come in and speak to one of our qualified 
              Guides who can help you develop a plan.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-semibold px-8"
              >
                SCHEDULE A CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
