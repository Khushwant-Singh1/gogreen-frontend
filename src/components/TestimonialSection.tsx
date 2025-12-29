import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    profession: "Commercial Farmer",
    text: "Vidhi Enterprises has been our reliable partner for over a decade. Their drip irrigation systems have significantly increased our crop yield while reducing water consumption.",
    img: "/img/testimonial-1.jpg",
  },
  {
    name: "Jane Smith",
    profession: "Landscape Architect",
    text: "The quality of their sprinklers and fittings is unmatched. We use them for all our high-end landscaping projects in the Middle East.",
    img: "/img/testimonial-2.jpg",
  },
  {
    name: "Robert M.",
    profession: "Agricultural Distributor",
    text: "Exceptional quality and on-time delivery. Vidhi's components are highly trusted by our network of farmers in Kenya.",
    img: "/img/testimonial-1.jpg",
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-primary font-bold text-xl uppercase tracking-widest mb-4">Testimonial</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 font-heading">
              What Our Clients Say About Us!
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Trusted by farmers, landscape architects, and distributors across the globe. Our commitment to quality and precision has built relationships that last for generations.
            </p>
            <button className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-secondary transition shadow-lg">
              Read All Stories
            </button>
          </div>

          <div className="lg:w-1/2 space-y-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-6 items-center border border-blue-100 hover:shadow-2xl transition duration-500 transform hover:-translate-x-2">
                <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-blue-50">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <h4 className="text-xl font-bold text-[#0f4c81]">{t.name}</h4>
                  <span className="text-primary font-medium">{t.profession}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
