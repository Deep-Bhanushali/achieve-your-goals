const Stats = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-deepCharcoal via-brand-charcoal to-brand-deepCharcoal relative overflow-hidden border-y border-brand-gold/20">
      {/* Subtle gold radial overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #b89050 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-brand-champagne via-brand-gold to-brand-champagne bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-brand-gold to-brand-champagne mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
              <div className="text-slate-300 font-medium mt-3 text-sm md:text-base tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
