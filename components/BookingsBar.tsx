import { Calendar, ChevronDown, Search } from "lucide-react";

const BookingsBar = () => {
  return (
    <div className="flexCenter max-container padding-container w-full">
      <div className="xl:absolute lg:absolute bg-white xl:w-[65%] lg:w-[65%] border-2 p-6">
        <div className="flex">
          <div className="w-[20%] p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary">
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
          <div className="w-[20%] p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary ml-6">
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
          <div className="w-[20%] p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary ml-6">
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
          <div className="w-[20%] p-2 flex bg-gray-tertiary rounded-tr-lg rounded-tl-lg border-b-2 border-red-secondary ml-6">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray-secondary font-primary regular-24 grow text-left "
              type="button"
            >
              <span className="ml-2">Check Out</span>
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
