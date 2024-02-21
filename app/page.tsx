import AboutUs from "@/components/AboutUs";
import Accomodation from "@/components/Accomodation";
import BanquetingHalls from "@/components/BanquetingHalls";
import DeliveryService from "@/components/DeliveryService";
import Facilities from "@/components/Facilities";
import Hero from "@/components/Hero";
import HighTea from "@/components/HighTea";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Accomodation />
      <BanquetingHalls />
      <HighTea />
      <DeliveryService />
      <Offers />
      <Facilities />
    </>
  );
}
