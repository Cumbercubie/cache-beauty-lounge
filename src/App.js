import Apppointment from "./components/appointment";
import PromotionCarousel from "./components/promotion-carousel";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Schedule from "./components/schedule";
import ServiceListing from "./components/services-listing/services-listing";
import { iconTextColor } from "./constants/index";
import "./App.css";

import Testimonials from "./components/testimonials";
import Headline from "./components/atoms/headline";
export default function App() {
  return (
    <div>
      <Hero />
      {/* <Headline text={"Our Promotion"} />
      <PromotionCarousel /> */}
      <Headline text={"Schedule"} />
      <Schedule />
      <Headline text={"Services"} />

      <ServiceListing />
      <Headline text={"Gallery"} />

      <Gallery />
      <Headline text={"What our clients say"} />
      <Testimonials />
      <Headline text={"Appointment"} />

      <Apppointment />
    </div>
  );
}
