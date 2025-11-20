import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Clock, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OneOnOne = () => {
  const features = [
    "Personalized financial roadmap",
    "One-on-one video consultation",
    "Detailed portfolio analysis",
    "Goal-based planning",
    "Tax optimization strategies",
    "Follow-up support",
  ];

  const benefits = [
    {
      icon: Video,
      title: "Virtual Meetings",
      description: "Connect from anywhere via video call",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule at your convenience",
    },
    {
      icon: Users,
      title: "Expert Advisors",
      description: "Certified financial professionals",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-secondary to-primary pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <Users className="w-16 h-16 text-primary-foreground mx-auto" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              1-on-1 Consultation
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Get personalized financial guidance from our expert advisors in private consultation sessions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* What You Get */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">What You'll Get</h2>
              <p className="text-muted-foreground text-lg">
                Our 1-on-1 consultation sessions are designed to provide you with comprehensive 
                financial guidance tailored to your unique situation and goals.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <Card className="lg:sticky lg:top-24 animate-slide-up shadow-2xl">
              <CardContent className="pt-6 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Single Session</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">₹2,999</span>
                    <span className="text-muted-foreground">/session</span>
                  </div>
                  <p className="text-muted-foreground">60-minute consultation</p>
                </div>

                <div className="space-y-3 py-6 border-t border-b">
                  <p className="font-semibold">Session includes:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Comprehensive financial review</li>
                    <li>✓ Personalized recommendations</li>
                    <li>✓ Action plan document</li>
                    <li>✓ 7-day email support</li>
                  </ul>
                </div>

                <Link to="/schedule" className="block">
                  <Button size="lg" className="w-full bg-gradient-to-r from-secondary to-primary">
                    Book Your Session
                  </Button>
                </Link>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Or get 4 sessions for <span className="text-primary font-semibold">₹9,999</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneOnOne;
