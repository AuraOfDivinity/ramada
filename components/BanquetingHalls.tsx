import { BANQUETS_LIST } from "@/constants";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const BanquetingHalls = () => {
  return (
    <section className="flexCenter py-20" id="banquets">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col flex-1">
          <div className="font-primary regular-26 text-red-primary pb-2">
            Banqueting
          </div>
          <div className="font-primary bold-40 text-gray-primary">
            Ramada Offers Some Of The Choicest Banquet Hall
          </div>
          <div className="font-secondary regular-16 text-black-primary">
            Ramada Colombo offers some of the choicest banquet halls in Colombo
            for your special occasion, business meeting or intimate gathering.
          </div>
          <ul className="grid md:grid-cols-3 gap-x-7">
            {BANQUETS_LIST.map((banquet) => (
              <BanquetItem
                key={banquet.name}
                name={banquet.name}
                description={banquet.description}
                imageUrl={banquet.imageUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type BanquetItemProps = {
  name: string;
  imageUrl: string;
  description: string;
};

const BanquetItem = ({ name, imageUrl, description }: BanquetItemProps) => {
  return (
    <div className="flex flex-col rounded-md my-10">
      <Image
        className="w-full rounded-lg min-h-[360px]"
        src={imageUrl}
        alt="suite image"
        width={440}
        height={350}
      />
      <div className="font-primary bold-36 text-black-primary my-4 text-center">
        {name}
      </div>
      <div className="regular-16 font-secondary text-black-primary">
        {description}
      </div>
      <div className="flex mx-auto my-8">
        <div className="font-primary regular-20 text-red-primary">
          Learn More
        </div>
        <div className="p-2">
          <MoveRight size={20} color="#D11242" />
        </div>
      </div>
    </div>
  );
};

export default BanquetingHalls;
