import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, Calculator, DollarSign, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Tax Return Filing",
      description: "Expert tax filing services to maximize your returns and ensure compliance with all regulations.",
      color: "bg-primary",
    },
    {
      icon: TrendingUp,
      title: "Retirement Planning",
      description: "Secure your future with comprehensive retirement and home loan planning strategies.",
      color: "bg-secondary",
    },
    {
      icon: Calculator,
      title: "Accounting & Virtual CFO",
      description: "Professional accounting services and virtual CFO support for your business growth.",
      color: "bg-primary",
    },
    {
      icon: DollarSign,
      title: "Loans & Financing",
      description: "Access to various loan options and financing solutions tailored to your needs.",
      color: "bg-secondary",
    },
    {
      icon: Building,
      title: "Business Consulting",
      description: "Strategic business consulting to help you make informed financial decisions.",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Investment Planning",
      description: "Smart investment strategies to grow your wealth and achieve financial goals.",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            POPULAR SERVICES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
