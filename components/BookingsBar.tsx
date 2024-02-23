import { Calendar, ChevronDown, Search } from "lucide-react";

const BookingsBar = () => {
  return (
    <div className="flexCenter max-container padding-container w-full">
      <div className="xl:absolute lg:absolute bg-white xl:w-[65%] lg:w-[65%] w-full border-2 p-6">
        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          <div className="xl:w-[20%] lg:w-[20%] w-full p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary my-4 lg:my-0 xl:my-0">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray-secondary font-primary regular-24 grow text-left "
              type="button"
            >
              Adults
            </button>
            <ChevronDown size={20} color="#d21243" className="my-auto" />
          </div>
          <div className="xl:w-[20%] lg:w-[20%] w-full p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary lg:ml-6 xl:ml-6 my-4 lg:my-0 xl:my-0">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray-secondary font-primary regular-24 grow text-left "
              type="button"
            >
              Children
            </button>
            <ChevronDown size={20} color="#d21243" className="my-auto" />
          </div>
          <div className="xl:w-[20%] lg:w-[20%] w-full p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary lg:ml-6 xl:ml-6 my-4 lg:my-0 xl:my-0">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray-secondary font-primary regular-24 grow text-left "
              type="button"
            >
              Check In
            </button>
            <Calendar size={20} color="#d21243" className="my-auto" />
          </div>
          <div className="xl:w-[20%] lg:w-[20%] w-full p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary lg:ml-6 xl:ml-6 my-4 lg:my-0 xl:my-0">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray-secondary font-primary regular-24 grow text-left "
              type="button"
            >
              Check Out
            </button>
            <Calendar size={20} color="#d21243" className="my-auto" />
          </div>
          <div className="xl:flexCenter mx-auto">
            <button className="flexCenter gap-3 rounded-md bg-red-primary w-14 h-14 ml-10">
              <Search size={20} color="#ffffff" className="my-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsBar;
