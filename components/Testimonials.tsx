import { TESTIMONIAL_DETAILS } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="flexCenter py-20">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col flex-1">
          <div className="font-primary regular-26 text-red-primary pb-2 text-center my-12">
            Testimonials
          </div>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar max-container overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 animate-infinite-scroll">
              {TESTIMONIAL_DETAILS.map((testimonial, index) => (
                <div className="inline-block px-3" key={index}>
                  <div className="flex flex-col items-center pb-10 min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary">
                    <img
                      className="w-24 h-24 mb-3 m-3 rounded-full  object-cover mt-4"
                      src={testimonial.imageUrl}
                      alt="Bonnie image"
                    />
                    <div className="font-secondary text-black-primary regular-16 px-10  leading-5 mt-4">
                      {testimonial.description}
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      {Array(5)
                        .fill(1)
                        .map((_, index) => (
                          <Image
                            src="/star.png"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                          />
                        ))}
                    </div>
                    <div className="font-primary text-black-primary bold-26 mt-4">
                      - {testimonial.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 animate-infinite-scroll"
              aria-hidden="true"
            >
              <div className="inline-block px-3">
                <div className="flex flex-col items-center pb-10 min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary">
                  <img
                    className="w-24 h-24 mb-3 m-3 rounded-full  object-cover mt-4"
                    src="/user1.jpeg"
                    alt="Bonnie image"
                  />
                  <div className="text-secondary text-black-primary regular-16 px-10 text-justify leading-5 mt-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    .Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {Array(5)
                      .fill(1)
                      .map((_, index) => (
                        <Image
                          src="/Star.png"
                          key={index}
                          alt="star"
                          width={24}
                          height={24}
                        />
                      ))}
                  </div>
                  <div className="font-primary text-black-primary bold-26 mt-4">
                    - John Doe
                  </div>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary"></div>
              </div>
              <div className="inline-block px-3">
                <div className="min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary"></div>
              </div>
              <div className="inline-block px-3">
                <div className="min-w-[450px] h-[430px]  overflow-hidden rounded-tl-5xl rounded-tr-5xl rounded-br-5xl shadow-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out border-2 border-red-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
