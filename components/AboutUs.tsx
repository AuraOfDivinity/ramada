import { aboutUsDescription } from "@/constants";
import { MoveRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="flexCenter pt-20">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col flex-1 max-w-[50%]">
          <div className="font-primary regular-26 text-red-primary pb-2">
            About Us
          </div>
          <div className="font-primary bold-40 text-gray-primary pb-2">
            Explore More About Us
          </div>
          <div className="font-secondary whitespace-break-spaces regular-16 text-black-primary break-all pr-2 pb-2">
            {aboutUsDescription}
          </div>
          <div className="flex">
            <div className="font-primary regular-20 text-red-primary">
              Learn More
            </div>
            <div className="p-2">
              <MoveRight size={20} color="#D11242" />
            </div>
          </div>
        </div>
        {/* TODO: Extract to single style */}
        <div className="flex-1">
          <div className="flex justify-end">
            <div
              className="overflow-hidden bg-no-repeat bg-about-us rounded-lg"
              style={{
                width: "300px",
                height: "450px",
                backgroundSize: "1000px 800px",
                backgroundPosition: "0 -200px",
              }}
            ></div>
            <div
              className="overflow-hidden bg-no-repeat bg-about-us rounded-lg"
              style={{
                width: "300px",
                height: "450px",
                backgroundSize: "1000px 800px",
                marginLeft: "50px",
                marginTop: "100px",
                backgroundPosition: "-350px -300px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
