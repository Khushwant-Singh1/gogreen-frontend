import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20 bg-whitesmoke watermark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          <div className="lg:w-1/4 w-full">
            <Image 
              src="/img/Thank you vidhi.png" 
              alt="About Us" 
              width={400}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-primary opacity-20 mb-[-40px]">40+</h1>
            <p className="text-3xl lg:text-4xl font-black text-primary mb-6 relative z-10">Years of making Every Drop Count</p>
            <h5 className="text-2xl font-bold text-secondary mb-6">&apos;We Make Every Drop Work Smarter&apos;</h5>
            <p className="text-lg text-primary font-semibold mb-6">
              &quot;Helping you water better, grow stronger &amp; make the most of every single drop&quot;
            </p>
            <h4 className="text-xl font-bold text-secondary italic mb-8">
              &quot;Smart Irrigation Starts here --- because every drop matter&quot;
            </h4>
            <button className="btn-primary-custom btn-ripple text-white py-4 px-8 rounded font-bold transition">
              Explore More
            </button>
          </div>
          <div className="lg:w-1/4 w-full space-y-12">
            <div className="border-l-4 border-primary pl-6">
              <i className="fa fa-award text-4xl text-primary mb-4"></i>
              <h4 className="text-xl font-bold text-primary mb-2">Trusted Quality</h4>
              <p className="text-secondary font-bold">We are known for durability, innovation & customer focus</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <i className="fa fa-users text-4xl text-primary mb-4"></i>
              <h4 className="text-xl font-bold text-primary mb-2">Dedicated Team</h4>
              <p className="text-secondary font-bold">
                From choosing the right component to after sales support, Our experts are always here to help you at every step of the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
