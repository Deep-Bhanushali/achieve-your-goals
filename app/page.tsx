import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
