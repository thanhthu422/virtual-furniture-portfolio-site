import {
    Leaf,
    MapPin,
    Recycle,
    Lightbulb,
    Hammer,
    Home,
    PackageCheck,
} from "lucide-react";

export function AboutSection() {
    return (<>
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission */}
                <div className="text-center mb-20">
                    <div className="inline-block px-6 py-2 bg-[#F5F1EA] rounded-full mb-6">
                        <p className="text-[#8B7355] uppercase tracking-wide text-sm">
                            Our Mission
                        </p>
                    </div>
                    <h2 className="text-[#6B5E4C] mb-6 max-w-4xl mx-auto">
                        Bringing peace of mind to your home through thoughtful crafts and
                        carefully sourced materials
                    </h2>
                </div>

                {/* Our Story */}
                <div className="mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-[#6B5E4C] mb-6 text-center">Our Story</h3>
                        <div className="space-y-4 text-[#6B5E4C] leading-relaxed">
                            <p>
                                Our company was born from the search for 'home.' When our
                                founder couldn't find market products that felt
                                right—discovering only poor designs and unsustainable
                                materials—he decided to create his own.
                            </p>
                            <p>
                                He began handcrafting furniture and decor for his own space,
                                pieces with purpose and quality. His family saw the passion in
                                his work and encouraged him to share it. From those humble
                                beginnings in a small shop, a personal hobby has grown into a
                                business that shares that same feeling of authentic, sustainable
                                living with a wider public.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How We Build */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-[#6B5E4C] mb-4">How We Build</h3>
                        <p className="text-[#8B7355] max-w-2xl mx-auto">
                            Our production philosophy is rooted in sustainability, efficiency,
                            and mindful craftsmanship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Materials */}
                        <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E1D8]">
                            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-6">
                                <Leaf className="w-6 h-6 text-[#FAF8F5]" />
                            </div>
                            <h4 className="text-[#6B5E4C] mb-4">
                                Carefully Selected Materials
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Recycle className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Climate awareness</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Locally sourced</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Leaf className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Sustainable</span>
                                </li>
                            </ul>
                        </div>

                        {/* Preparation & Processing */}
                        <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E1D8]">
                            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-6">
                                <Lightbulb className="w-6 h-6 text-[#FAF8F5]" />
                            </div>
                            <h4 className="text-[#6B5E4C] mb-4">Preparation & Processing</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Lightbulb className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">
                                        Efficiency through good planning
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Lightbulb className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Applying technologies</span>
                                </li>
                            </ul>
                        </div>

                        {/* Assembly/Crafting */}
                        <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E1D8]">
                            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-6">
                                <Hammer className="w-6 h-6 text-[#FAF8F5]" />
                            </div>
                            <h4 className="text-[#6B5E4C] mb-4">Assembly & Crafting</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Hammer className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">
                                        Efficiency through good planning
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Hammer className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Applying technologies</span>
                                </li>
                            </ul>
                        </div>

                        {/* Final Products */}
                        <div className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E8E1D8]">
                            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-6">
                                <PackageCheck className="w-6 h-6 text-[#FAF8F5]" />
                            </div>
                            <h4 className="text-[#6B5E4C] mb-4">Final Products</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Home className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Keep home in mind</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <PackageCheck className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" />
                                    <span className="text-[#6B5E4C]">Prevent wastefulness</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-20 bg-[#F5F1EA]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[#6B5E4C] mb-6">Ready to Explore Our Collection?</h2>
                <p className="text-[#8B7355] text-lg mb-8 max-w-2xl mx-auto">
                    Discover furniture pieces crafted with purpose, quality, and sustainability in mind.
                </p>
                <a
                    href="/#gallery"
                    className="inline-block bg-[#8B7355] text-[#FAF8F5] px-8 py-3 rounded-md hover:bg-[#6B5E4C] transition-colors"
                >
                    Browse Gallery
                </a>
            </div>
        </section></>
    );
}
