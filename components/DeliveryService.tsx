import { deliveryMainText, deliverySubText } from "@/constants";
import Image from "next/image";

const DeliveryService = () => {
  return (
    <section className="flexCenter py-8" id="delivery">
      <div className="flex max-container padding-container relative w-full">
        <div className="flex flex-col flex-1">
          <div className="font-primary regular-26 text-red-primary pb-2">
            Delivery & Takeaway service
          </div>
          <div className="font-primary bold-40 text-gray-primary capitalize">
            Giving your hunger a safer, faster and better alternative
          </div>
          <div className="flex flex-row">
            <Image
              src="/takeaway.jpeg"
              alt="delivery image"
              width={300}
              height={300}
              className=" h-[615px] object-cover rounded-lg max-h-[600px] mr-2 flex-1"
            />
            <div className="flex flex-col items-center ml-4 flex-1 justify-center">
              <div className="font-secondary regular-16 text-black-primary capitalize whitespace-pre-wrap">
                {deliveryMainText}
              </div>
              <div className="font-secondary bold-16 text-black-primary">
                {deliverySubText}
              </div>
              <div className="text-center">
                <button
                  className="flexCenter gap-3 rounded-md bg-red-primary mt-6"
                  style={{ width: "158px", height: "54px" }}
                >
                  <label className="whitespace-nowrap text-white font-primary regular-24 flexCenter">
                    Order Now
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryService;
