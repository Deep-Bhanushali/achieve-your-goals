import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using Mango Admi's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "2. Services Provided",
      content:
        "Mango Admi provides financial advisory, tax filing, investment planning, and related services. All services are provided based on the information you provide and current tax laws and regulations.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "You are responsible for providing accurate and complete information for all services. You must inform us promptly of any changes that may affect our services to you. You are responsible for maintaining the confidentiality of your account credentials.",
    },
    {
      title: "4. Privacy and Confidentiality",
      content:
        "We maintain strict confidentiality of all client information and financial data. Your personal information will be used solely for providing our services and will not be shared with third parties without your consent, except as required by law.",
    },
    {
      title: "5. Professional Advice",
      content:
        "All advice and recommendations provided are based on our professional opinion and current market conditions. While we strive for accuracy, we cannot guarantee specific outcomes or returns on investments.",
    },
    {
      title: "6. Fees and Payment",
      content:
        "Fees for services are as published on our website and are subject to change. Payment terms will be communicated at the time of engagement. Late payments may result in service interruption.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "Mango Admi shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to our services. Our liability is limited to the fees paid for the specific service in question.",
    },
    {
      title: "8. Termination",
      content:
        "Either party may terminate the service agreement with written notice. You will be responsible for fees for services rendered up to the termination date.",
    },
    {
      title: "9. Amendments",
      content:
        "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.",
    },
    {
      title: "10. Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in the appropriate jurisdiction.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Terms and Conditions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                  Please read these terms and conditions carefully before using Mango Admi's services.
                  These terms govern your use of our website and services.
                </p>

                {sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}

                <div className="pt-8 border-t space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: sahay@mangoadmi.in</p>
                    <p>Working Hours: Monday - Friday, 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
