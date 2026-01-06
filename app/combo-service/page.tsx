import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package } from "lucide-react";
import Link from "next/link";

export default function ComboService() {
  const comboPackages = [
    {
      name: "Individual + Family Combo",
      price: "₹15,999",
      period: "/month",
      description: "Complete financial planning for you and your family",
      features: [
        "Tax filing for 2 individuals",
        "Investment advisory",
        "Insurance planning",
        "Retirement planning",
        "Quarterly reviews",
        "Priority support",
      ],
      popular: false,
    },
    {
      name: "Business Starter Combo",
      price: "₹29,999",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Company registration",
        "12 months accounting",
        "GST filing",
        "TDS returns",
        "Annual compliance",
        "Virtual CFO (Basic)",
      ],
      popular: true,
    },
    {
      name: "Complete Care Combo",
      price: "₹49,999",
      period: "/month",
      description: "All-inclusive package for business owners",
      features: [
        "Business accounting & compliance",
        "Personal tax planning",
        "Investment advisory",
        "Virtual CFO services",
        "Payroll management",
        "24/7 priority support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <Package className="w-16 h-16 text-primary-foreground mx-auto" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Combo Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Save more with our specially curated combo packages designed for maximum value
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                  pkg.popular ? "border-primary border-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/schedule" className="block pt-4">
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-primary"
                      }`}
                    >
                      Choose Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
                <p className="text-muted-foreground mb-6">
                  We can create a personalized combo package tailored to your specific needs and budget.
                </p>
                <Link href="/schedule">
                  <Button size="lg" variant="outline" className="hover:bg-primary">
                    Contact Us for Custom Solutions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}