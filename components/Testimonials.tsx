import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

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
      content: "Thank you MangoAdmi for your help and flawless service in filing ITR (Income tax Return Filing) on time. One of the best investment consultant i have worked with!! Keep doing your amazing work",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center opacity-50">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
