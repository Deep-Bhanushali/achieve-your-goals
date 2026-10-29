import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lalit Raghuwanshi",
      role: "Verified Google Review",
      content: "Exceptional Financial Consultant! From the moment we began discussing my financial goals, they showed a remarkable level of expertise and understanding.",
      rating: 5,
      verified: true,
    },
    {
      name: "Rishab Sharma",
      role: "Verified Google Review",
      content: "Loved the services. He makes sure the job is done within the best amount of time with an immaculate quality as well. Totally recommended!",
      rating: 5,
      verified: true,
    },
    {
      name: "Kreethi Menarai",
      role: "Verified Google Review",
      content: "Thank you MangoAdmi for your help and flawless service in filing ITR on time. One of the best investment consultants I have worked with! Keep doing your amazing work.",
      rating: 5,
      verified: true,
    },
    {
      name: "Neha Raghuwanshi",
      role: "Verified Google Review",
      content: "I highly recommend his services to anyone seeking a top-notch Chartered Accountant. His professionalism and expertise make him a true asset for anyone in need of financial guidance.",
      rating: 5,
      verified: true,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-goldDark dark:text-brand-champagne text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Client Experiences</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-base md:text-lg">
            Hear from our satisfied clients about how we've helped simplify taxes and accelerate wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group border border-border/80 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-brand-gold" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-brand-gold fill-brand-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div>
                    <h3 className="font-bold text-foreground text-base">{testimonial.name}</h3>
                    <p className="text-sm text-brand-gold font-medium">{testimonial.role}</p>
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs bg-brand-gold/15 text-brand-goldDark dark:text-brand-champagne font-semibold px-2.5 py-1 rounded-full border border-brand-gold/30">
                      Verified
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
