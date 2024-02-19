import { heroHeadingText, heroSubText } from "@/constants";
import Image from "next/image";

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

      <div className="absolute flex py-40 pl-60 flex-col  min-h-80 justify-center">
        <div className="uppercase whitespace-pre font-primary text-white regular-64">
          {heroHeadingText}
        </div>
        <div className="whitespace-pre font-secondary regular-24 text-white">
          {heroSubText}
        </div>
      </div>
    </section>
  );
};

export default Hero;
