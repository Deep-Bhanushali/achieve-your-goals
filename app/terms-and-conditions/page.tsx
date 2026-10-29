import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using Mango Admi's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "2. Services Provided",
      content:
        "Mango Admi provides financial advisory, tax filing, investment planning, and related consulting services. All services are rendered based on the documentation you provide and applicable statutory tax laws and regulatory guidelines.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "You are responsible for providing authentic, complete, and timely records for all tax and financial engagements. You must inform us promptly of any changes that may affect filings or registrations submitted on your behalf.",
    },
    {
      title: "4. Privacy and Confidentiality",
      content:
        "We maintain bank-grade confidentiality for all client financial records and personal data. Your details are utilized solely for rendering the requested advisory services and are never monetized or disclosed without explicit consent.",
    },
    {
      title: "5. Professional Advice & Risk Disclosure",
      content:
        "Recommendations are formulated in accordance with sound financial planning methodologies and prevailing market conditions. While we strive to maximize tax savings and investment growth, market instruments remain subject to inherent volatility.",
    },
    {
      title: "6. Fees and Payment",
      content:
        "Fees for scheduled plans and bespoke engagements are transparently communicated prior to service delivery. Invoices are payable upon receipt or per the agreed milestone schedule.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "Mango Admi shall not be liable for statutory penalties resulting from client omission or submission of erroneous data. Aggregate liability for verified direct service errors is limited to the advisory fee received for that engagement.",
    },
    {
      title: "8. Termination",
      content:
        "Either party may conclude an ongoing retainer with written notice. Any hours or filings completed up to the date of notice shall be invoiced on a pro-rata basis.",
    },
    {
      title: "9. Amendments",
      content:
        "We reserve the right to revise these regulatory terms as statutory compliance evolves. Continued engagement confirms acceptance of updated policies.",
    },
    {
      title: "10. Governing Law & Jurisdiction",
      content:
        "These terms are governed exclusively by the laws of India. Any unresolved dispute shall be referred to arbitration or the competent courts of India.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal pt-20 border-b border-brand-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,144,80,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-brand-champagne text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Legal & Compliance Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-base md:text-lg text-slate-200/90">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in border border-brand-gold/30 shadow-xl bg-card">
              <CardHeader className="border-b border-border/70 pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">Terms of Service</CardTitle>
                <p className="text-muted-foreground text-sm pt-2 leading-relaxed">
                  Please review the terms and operational guidelines governing all financial consulting, tax management, and advisory services provided by Mango Admi.
                </p>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      <span>{section.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                      {section.content}
                    </p>
                  </div>
                ))}

                <div className="pt-8 border-t border-border/70 space-y-3">
                  <h3 className="text-lg font-bold text-foreground">Compliance Inquiries</h3>
                  <p className="text-muted-foreground text-sm">
                    For legal or compliance clarifications, reach our designated counsel at:
                  </p>
                  <div className="space-y-1 text-sm text-foreground">
                    <p>
                      Email:{" "}
                      <a href="mailto:sahay@mangoadmi.in" className="text-brand-gold font-semibold hover:underline">
                        sahay@mangoadmi.in
                      </a>
                    </p>
                    <p className="text-muted-foreground">Office Hours: Monday - Friday, 10:00 AM - 6:00 PM IST</p>
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
}
