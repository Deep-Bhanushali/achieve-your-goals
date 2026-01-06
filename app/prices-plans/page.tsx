import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function PricesPlans() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Perfect for individuals getting started",
      features: [
        "1 Tax filing per year",
        "Basic investment advisory",
        "Email support",
        "Quarterly newsletter",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "/month",
      description: "Ideal for professionals and families",
      features: [
        "2 Tax filings per year",
        "Complete investment advisory",
        "Insurance planning",
        "Retirement planning",
        "Priority phone support",
        "Monthly financial reviews",
      ],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Business",
      price: "₹9,999",
      period: "/month",
      description: "Comprehensive solution for businesses",
      features: [
        "Complete business accounting",
        "GST & compliance",
        "Virtual CFO services",
        "Personal tax planning",
        "Investment advisory",
        "24/7 priority support",
        "Dedicated account manager",
      ],
      cta: "Choose Business",
      popular: false,
    },
  ];

  const addOnServices = [
    { service: "Additional ITR Filing", price: "₹499 per return" },
    { service: "GST Registration", price: "₹2,999" },
    { service: "Company Registration", price: "₹9,999" },
    { service: "One-time Financial Plan", price: "₹4,999" },
    { service: "Insurance Policy Review", price: "₹1,999" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Prices & Plans
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Choose the perfect plan for your financial journey
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                  plan.popular ? "border-primary border-2 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/schedule" className="block">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-primary"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Add-on Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOnServices.map((addon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{addon.service}</span>
                      <span className="text-primary font-semibold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom plan? We can create a package tailored to your specific needs.
            </p>
            <Link href="/schedule">
              <Button variant="outline" size="lg">
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}