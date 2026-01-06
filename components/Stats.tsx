const Stats = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="h-1 w-16 bg-white/30 mx-auto rounded-full group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
              </div>
              <div className="text-white/90 font-medium mt-3 text-sm md:text-base">
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
