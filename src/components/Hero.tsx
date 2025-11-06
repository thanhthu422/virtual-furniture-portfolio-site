export function Hero() {
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760981348070-ffa100647759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbSUyMHNvZnQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjI0MDI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cozy living room with soft lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B5E4C]/60 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-[#FAF8F5] mb-4">
              Curated Virtual Furniture
            </h2>
            <p className="text-[#F5F1EA] mb-8 text-lg md:text-xl">
              Discover our collection of beautifully rendered furniture pieces designed to inspire your next interior design project.
            </p>
            <a
              href="#gallery"
              className="inline-block bg-[#8B7355] text-[#FAF8F5] px-8 py-3 rounded-md hover:bg-[#6B5E4C] transition-colors"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
