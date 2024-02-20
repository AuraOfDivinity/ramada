import Image from "next/image";

const DeliveryService = () => {
  return (
    <section className="flexCenter py-8">
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
              className="w-[100%] h-[615px] object-cover rounded-lg max-h-[600px] mr-2 flex-1"
            />
            <div className="flex flex-col items-center ml-2 flex-1 justify-center">
              <div className="font-secondary regular-16 text-black-primary">
                users can pay directly through our website with Visa or
                MasterCard or opt for cash or card payment on delivery! Our
                website is extremely user friendly and offers a stress-free
                ordering experience with the option to schedule a delivery on a
                particular date or time. Our delivery radius will be from
                Colombo 1-15 and will include areas in Mount Lavinia, Nawala,
                Nugegoda, Kohuwala, Dehiwala, Rajagiriya, Welikada,
                Wellampitiya, Ethul Kotte, Kolonnawa, Sri Jayawardenapura Kotte,
                Pelawatta, Kotikawatta, Battaramulla, Pita Kotte, Attidiya,
                Mirihana, Koswatta. If you reside in any of the above locations,
                orders will be delivered subjected to a delivery charge.
                Delivery times are between 10 am to 10 pm. For more information
                contact us on (+94) 112 422 001, Ext. 399 or (+94) 777 864 864.
              </div>
              <div className="text-center">
                <button
                  className="flexCenter gap-3 rounded-md bg-red-primary"
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
