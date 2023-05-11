import Image from "next/image";
import React from "react";

const HowSection = () => {
  return (
    <section className="py-24">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <span className="subheading">How it works</span>
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our group in 3 simple steps
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {/* STEP 01 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <p className="text-7xl text-gray-300 font-medium mb-3">01</p>
              <h3 className="text-2xl font-bold mb-2">
                Be ready before the call
              </h3>
              <p className="text-lg leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                magni explicabo perspiciatis perferendis totam provident illum
                iste minima pariatur earum sit odio cupiditate quasi, itaque
                quis modi? Accusamus, corrupti delectus.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="p-8 rounded-full bg-teal-100 w-[300px] h-[300px] flex justify-center items-center">
                <Image
                  src="/images/how/reading_book.svg"
                  alt="reading book"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="flex  flex-col-reverse md:flex-row gap-4">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="p-8 rounded-full bg-teal-100 w-[300px] h-[300px] flex justify-center items-center">
                <Image
                  src="/images/how/group_hangout.svg"
                  alt="reading book"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-7xl text-gray-300 font-[600] mb-3">02</p>
              <h3 className="heading-tertiary">Be ready before the call</h3>
              <p className="text-lg leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                magni explicabo perspiciatis perferendis totam provident illum
                iste minima pariatur earum sit odio cupiditate quasi, itaque
                quis modi? Accusamus, corrupti delectus.
              </p>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <p className="text-7xl text-gray-300 font-[600] mb-3">03</p>
              <h3 className="heading-tertiary">Be ready before the call</h3>
              <p className="text-lg leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                magni explicabo perspiciatis perferendis totam provident illum
                iste minima pariatur earum sit odio cupiditate quasi, itaque
                quis modi? Accusamus, corrupti delectus.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-8 rounded-full bg-teal-100 w-[300px] h-[300px] flex justify-center items-center">
                <Image
                  src="/images/how/activity_tracker.svg"
                  alt="reading book"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
