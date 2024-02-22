import { heroHeadingText, heroSubText } from "@/constants";
import { ChevronDown, Calendar, Search } from "lucide-react";
import Image from "next/image";
import BookingsBar from "./BookingsBar";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="flexCenter max-container padding-container relative w-full overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="hero"
          width={0}
          height={0}
          sizes="100vw"
          className=" brightness-50 object-cover object-top 2xl:rounded-5xl"
          style={{ maxHeight: "700px", width: "100%", height: "auto" }}
        />
      </div>
      <BookingsBar />

      <div className="absolute flex lg:py-40 lg:pl-60 xl:pl-72 flex-col sm:pl-10 xs:px-10 min-h-80 justify-center">
        <div className="uppercase lg:whitespace-pre md:whitespace-pre font-primary text-white lg:regular-64 md:regular-40 sm:regula-32 xs:regular-16">
          {heroHeadingText}
        </div>
        <div className="lg:whitespace-pre md:whitespace-pre font-secondary lg:regular-24 md:regular20 sm:regular-16 xs:regular-16 text-white">
          {heroSubText}
        </div>
      </div>
    </section>
  );
};

export default Hero;
