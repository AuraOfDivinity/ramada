import React from "react";

const Offers = () => {
  return (
    <section className="flexCenter pt-20" id="promotions">
      <div className="flex max-container padding-container relative w-full shadow-2xl rounded-lg sm:m-4 xs:m-4">
        <div className="flex flex-col text-center">
          <div className="font-primary regular-26 text-red-primary  pt-10">
            Offers
          </div>
          <div className="font-primary bold-40 text-gray-secondary pt-20 uppercase">
            75% Off Now
          </div>
          <div className="font-secondary regular-16 text-black-primary pt-8 max-w-[50%] m-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </div>

          <button
            className="flexCenter gap-3 rounded-md bg-red-primary mt-10 mb-20 m-auto"
            style={{ width: "158px", height: "54px" }}
          >
            <label className="whitespace-nowrap text-white font-primary regular-24 flexCenter">
              Take Now
            </label>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
