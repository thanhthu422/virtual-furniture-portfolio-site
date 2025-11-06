import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-6 py-2 bg-[#F5F1EA] rounded-full mb-6">
                        <p className="text-[#8B7355] uppercase tracking-wide text-sm">
                            About Us
                        </p>
                    </div>

                    <h2 className="text-[#6B5E4C] mb-6">The Story Behind Our Craft</h2>

                    <p className="text-[#6B5E4C] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        We believe in purpose and quality. Our mission is to bring peace of
                        mind to your home through thoughtfully crafted goods and sustainable
                        materials.
                    </p>

                    <a
                        href="/about"
                        className="inline-flex items-center gap-2 bg-[#8B7355] text-[#FAF8F5] px-8 py-3 rounded-md hover:bg-[#6B5E4C] transition-colors group"
                    >
                        Explore Our Full Story
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
