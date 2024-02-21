import { SUITES_LIST } from "@/constants";
import Image from "next/image";

const Accomodation = () => {
  return (
    <section className="flexCenter py-20" id="accomodation">
      <div className="flex max-container padding-container relative w-full">
        {/* extract into single styles */}
        <div className="flex flex-col flex-1">
          <div className="font-primary regular-26 text-red-primary pb-2">
            Accomodation
          </div>
          <div className="font-primary bold-40 text-gray-primary">
            Comfortable rooms just for you
          </div>
          <ul className="grid md:grid-cols-4 gap-x-7">
            {SUITES_LIST.map((suite) => (
              <SuiteCard
                key={suite.name}
                suiteName={suite.name}
                features={suite.features}
                imageUrl={suite.imageUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type SuiteCardProps = {
  suiteName: string;
  imageUrl: string;
  features: string[];
};
const SuiteCard = ({ suiteName, imageUrl, features }: SuiteCardProps) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <Image
        className="w-full p-3 rounded-2xl max-h-[200px]"
        src={imageUrl}
        alt="suite image"
        width={250}
        height={180}
      />
      <div>
        <div className="font-primary bold-22 text-black-primary mb-2 text-center">
          {suiteName}
        </div>
      </div>
      <ul className="list-disc ml-7 my-1">
        {features.map((feature, index) => (
          <li
            className="regular-16 font-secondary text-black-primary"
            key={index}
          >
            {feature}
          </li>
        ))}
      </ul>
      <div className="p-3">
        <button className="flexCenter rounded-md bg-white w-full h-[40px] border-[1px] border-red-primary mb-1">
          <label className="whitespace-nowrap text-red-primary font-primary regular-18">
            Explore
          </label>
        </button>
        <button className="flexCenter rounded-md bg-red-primary w-full h-[40px]">
          <label className="whitespace-nowrap text-white font-primary regular-18">
            Book Now
          </label>
        </button>
      </div>
    </div>
  );
};

export default Accomodation;
