'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Individual", href: "/individual" },
    { name: "Business", href: "/business" },
    { name: "Combo Service", href: "/combo-service" },
    { name: "Investments", href: "/investments" },
    { name: "Tax Calculator", href: "/tax-calculator" },
    { name: "1-1", href: "/1-1" },
    { name: "Prices & Plans", href: "/prices-plans" },
    { name: "Reports", href: "/reports" },
    { name: "Schedule", href: "/schedule" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-border/50"
          : "bg-background/80 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/mangoadmin-logo.png"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                alt="Mango Admi Logo"
              />
              <span className="text-2xl font-bold text-foreground">
                Mango Admi
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-brand-gold px-3.5 py-2 rounded-lg hover:bg-brand-gold/10 transition-all duration-200 font-medium text-sm relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-champagne group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-3 pt-2 border-t border-border/60">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-brand-gold hover:bg-brand-gold/10 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
