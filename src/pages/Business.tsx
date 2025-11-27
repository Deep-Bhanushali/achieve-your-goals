import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileCheck, Users, TrendingUp, Briefcase, Calculator } from "lucide-react";
import businessBg from "@/assets/business-service.jpg";
import { Link } from "react-router-dom";

const Business = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Accounting & Bookkeeping",
      description: "Professional accounting services to keep your business finances in perfect order.",
      features: ["Monthly Accounting", "Financial Statements", "GST Compliance", "TDS Returns"],
    },
    {
      icon: Building2,
      title: "Company Registration",
      description: "Complete support for company registration and business setup.",
      features: ["Private Limited", "LLP Registration", "Partnership Firm", "Sole Proprietorship"],
    },
    {
      icon: Users,
      title: "Virtual CFO Services",
      description: "Strategic financial leadership for your growing business.",
      features: ["Financial Planning", "Cash Flow Management", "Budget Analysis", "Growth Strategy"],
    },
    {
      icon: TrendingUp,
      title: "Business Tax Planning",
      description: "Optimize your business taxes and ensure complete compliance.",
      features: ["Corporate Tax", "Tax Optimization", "Advance Tax", "Tax Audits"],
    },
    {
      icon: Briefcase,
      title: "Compliance Management",
      description: "Stay compliant with all statutory requirements and regulations.",
      features: ["ROC Filings", "Annual Returns", "Regulatory Compliance", "Legal Documentation"],
    },
    {
      icon: Calculator,
      title: "Payroll Management",
      description: "Efficient payroll processing and employee benefits management.",
      features: ["Salary Processing", "PF & ESI", "Form 16 Generation", "Payroll Compliance"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={businessBg}
            alt="Business services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/85" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Business Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive financial and compliance solutions to power your business growth
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
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
              <Button size="lg" className="bg-primary hover:opacity-90">
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

export default Business;
