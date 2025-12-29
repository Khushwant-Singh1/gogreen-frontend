import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProductGrid from "@/components/ProductGrid";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
      <StatsSection />
      
      {/* Why Choose Us Section - Integrated into About/Features or added here */}
      <section className="py-20 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <p className="text-primary font-bold text-xl mb-4">Why Choosing Us!</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Few Reasons Why People Choosing Us!
              </h2>
              <p className="text-secondary text-lg font-bold mb-8">
                Every product undergoes strict quality checks and is manufactured to meet domestic and export standards, 
                ensuring long-lasting performance trusted by farmers and importers alike.
              </p>
              <button className="btn-primary-custom btn-ripple text-white py-4 px-10 rounded font-bold shadow-lg transition">
                Explore More
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-check text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">100% Satisfaction</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center translate-y-0 md:translate-y-8">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-users text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Dedicated Team</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-tools text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Modern Equipment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <GlobalPresenceMap />
      <ContactForm />
      <Footer />
    </main>
  );
}