import { MoveRight } from "lucide-react";
import Image from "next/image";
const HighTea = () => {
  return (
    <section className="flexCenter py-5">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="font-primary regular-26 text-red-primary pb-2">
              High Tea
            </div>
            <div className="font-primary bold-40 text-gray-primary py-4">
              The Ramada Colombo’s High Tea Buffet
            </div>
            <div className="font-secondary regular-16 text-black-primary">
              The ambience at the Ramada lobby is no less than what you’d expect
              from a real classy high tea. You can listen to classical
              instrumentals of your favorite songs from live violin and piano
              music. The guests were in awe at how this instrumental duo filled
              the whole atmosphere with their tunes, while they indulged in
              buffet delicacies.
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col py-8">
            <Image
              className="w-full rounded-2xl min-h-[360px] mr-2"
              src="/hightea1.jpeg"
              alt="suite image"
              width={440}
              height={350}
            />
            <Image
              className="w-full rounded-2xl min-h-[360px] ml-2"
              src="/hightea2.jpeg"
              alt="suite image"
              width={440}
              height={350}
            />
          </div>
          <div className="flex mx-auto my-8">
            <div className="font-primary regular-20 text-red-primary">
              Explore Ramada High Tea
            </div>
            <div className="p-2">
              <MoveRight size={20} color="#D11242" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighTea;
