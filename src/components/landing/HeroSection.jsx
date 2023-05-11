import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-100 py-24 ">
      {/* hero */}
      <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* hero text box */}
        <div className="">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-700">
              Book Club
            </span>{" "}
            For English Learners
          </h1>
          <p className="text-lg md:text-xl leading-8 mb-12">
            Improve your English skills with our Bookclub app. Choose from
            diverse books and discuss with a global community.
          </p>

          <div className="flex">
            {/* main cta */}
            <Link
              href="/"
              className=" bg-green-500 text-lg text-white font-medium py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-100 flex items-center"
            >
              Sign up free
            </Link>
            <Link
              href="/"
              className=" ml-4 bg-white text-gray-700 font-medium text-lg py-3 px-6 rounded-full border-[3px] border-white shadow-md hover:shadow-lg inset-1 hover:text-green-500"
            >
              Learn more &darr;
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 mt-20 items-center gap-4">
            <div className="flex">
              <Image
                className="rounded-full  border-4 border-green-400"
                src="/images/c1.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
              <Image
                className="rounded-full -ml-4 border-4 border-green-400"
                src="/images/c2.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
              <Image
                className="rounded-full -ml-4 border-4 border-green-400"
                src="/images/c3.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
              <Image
                className="rounded-full -ml-4 border-4 border-green-400"
                src="/images/c1.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
              <Image
                className="rounded-full -ml-4 border-4 border-green-400"
                src="/images/c2.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
              <Image
                className="rounded-full -ml-4 border-4 border-green-400"
                src="/images/c3.jpg"
                alt="customer photo"
                width={48}
                height={48}
              />
            </div>
            <p className="text-lg font-medium text-gray-500">
              We had more than
              <span className="text-green-500">250 friends </span> so far.
            </p>
          </div>
        </div>

        {/* hero image box */}
        <div>
          <Image
            className="w-full"
            src="/images/hero-img.png"
            alt="people reading books"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
