import { Facebook, Instagram, Youtube, MapPin, Mail, Clock, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-foreground to-foreground/95 text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpeg" width={40} height={40} className="rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow" alt={""}>
                
              </Image>
              <h3 className="text-2xl font-bold">Mango Admi</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Your trusted partner for comprehensive financial planning, tax filing, and wealth management services.
            </p>
            <div className="flex items-start gap-2 pt-2">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-background/70">
                <p className="font-medium text-background/90">Trusted by 5000+ clients</p>
                <p>Secure & confidential services</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/individual" className="hover:text-primary transition-colors">Individual Services</Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-primary transition-colors">Business Services</Link>
              </li>
              <li>
                <Link href="/tax-calculator" className="hover:text-primary transition-colors">Tax Calculator</Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-primary transition-colors">Investments</Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">Schedule Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Working Hours
            </h4>
            <div className="space-y-3 text-background/80">
              <div>
                <p className="font-medium text-background/90">Monday - Friday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-background/90">Saturday - Sunday</p>
                <p>11:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-background/80">
              <a
                href="mailto:sahay@mangoadmi.in"
                className="flex items-start gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>sahay@mangoadmi.in</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-sm">Available for online consultation nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-sm font-medium mb-3 text-background/90">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/infinconsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/i_mango_admi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@mangoadmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-background/80">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">5000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-background/20 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Mango Admi. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/schedule" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
