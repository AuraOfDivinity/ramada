import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { FACILITIES_LIST } from "@/constants";

const Facilities = () => {
  return (
    <section className="flexCenter pt-20" id="amenities">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col flex-1">
          <div className="font-primary regular-26 text-red-primary pb-2">
            Facilities
          </div>
          <div className="font-primary bold-40 text-gray-primary capitalize">
            Enjoy completed and best quality facilities
          </div>
          {FACILITIES_LIST.map((facility) => (
            <div
              className="flex lg:flex-row md:flex-col  sm:flex-col xs:flex-col mt-8"
              key={facility.name}
            >
              <div className="w-[40%]">
                <Image
                  className="my-4 rounded-lg xs:min-w-[350px] bg-cover"
                  src={facility.imageUrl}
                  alt={facility.name}
                  width={448}
                  height={224}
                />
              </div>
              <div className="w-[60%] flex-col p-2 xs:min-w-[350px]">
                <div className="font-primary bold-36 text-black-primary my-4">
                  {facility.name}
                </div>
                <div className="font-secondary regular-16 text-black-primary mt-12">
                  {facility.description}
                </div>
                <div className="py-2 mt-16">
                  <MoveRight size={26} color="#D11242" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
