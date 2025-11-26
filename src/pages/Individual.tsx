import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, PiggyBank, Home, TrendingUp, Shield, Calculator } from "lucide-react";
import individualBg from "@/assets/individual-service.jpg";
import { Link } from "react-router-dom";

const Individual = () => {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description: "Comprehensive tax filing services for individuals. We help you maximize deductions and ensure compliance.",
      features: ["ITR 1-4 Filing", "Tax Planning", "Refund Processing", "Tax Notices Support"],
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Secure your future with strategic retirement planning tailored to your lifestyle goals.",
      features: ["NPS Advisory", "Pension Planning", "Corpus Building", "Post-Retirement Income"],
    },
    {
      icon: Home,
      title: "Home Loan Planning",
      description: "Get the best home loan deals and plan your dream home purchase effectively.",
      features: ["Loan Comparison", "EMI Planning", "Tax Benefits", "Documentation Support"],
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on mutual funds, stocks, and other investment opportunities.",
      features: ["Portfolio Review", "SIP Planning", "Risk Assessment", "Goal-based Investing"],
    },
    {
      icon: Shield,
      title: "Insurance Planning",
      description: "Protect your family and assets with the right insurance coverage.",
      features: ["Life Insurance", "Health Insurance", "Term Plans", "Claims Assistance"],
    },
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Holistic financial planning for all your life goals and milestones.",
      features: ["Budget Planning", "Debt Management", "Emergency Fund", "Goal Planning"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={individualBg}
            alt="Individual services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Individual Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Personalized financial solutions designed for your unique goals and aspirations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/schedule">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Individual;
