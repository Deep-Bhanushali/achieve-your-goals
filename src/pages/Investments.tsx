import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, BarChart3, LineChart, Wallet, Shield } from "lucide-react";
import investmentsBg from "@/assets/investments.jpg";
import { Link } from "react-router-dom";

const Investments = () => {
  const investmentOptions = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified investment portfolios managed by expert fund managers.",
      benefits: ["Professional Management", "Liquidity", "Tax Benefits", "SIP Options"],
    },
    {
      icon: PieChart,
      title: "Equity & Stocks",
      description: "Direct equity investments for long-term wealth creation.",
      benefits: ["High Growth Potential", "Dividend Income", "Portfolio Building", "Expert Advisory"],
    },
    {
      icon: BarChart3,
      title: "Fixed Income",
      description: "Stable returns through bonds, FDs, and debt instruments.",
      benefits: ["Guaranteed Returns", "Capital Protection", "Regular Income", "Low Risk"],
    },
    {
      icon: LineChart,
      title: "National Pension Scheme",
      description: "Government-backed retirement savings with tax benefits.",
      benefits: ["Tax Deductions", "Retirement Corpus", "Market-linked Returns", "Flexibility"],
    },
    {
      icon: Wallet,
      title: "Real Estate Investment",
      description: "Property and REIT investments for portfolio diversification.",
      benefits: ["Asset Appreciation", "Rental Income", "Tangible Asset", "Inflation Hedge"],
    },
    {
      icon: Shield,
      title: "Insurance Plans",
      description: "Investment-linked insurance for protection and growth.",
      benefits: ["Life Cover", "Wealth Creation", "Tax Savings", "Goal Planning"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={investmentsBg}
            alt="Investment planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Investment Planning
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Build wealth systematically with expert-guided investment strategies tailored to your goals
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Options</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from a wide range of investment instruments to match your risk profile and financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <option.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Investment Journey?</h2>
            <p className="text-muted-foreground text-lg">
              Our financial advisors will help you create a personalized investment portfolio
            </p>
            <Link to="/schedule">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Schedule Investment Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investments;
