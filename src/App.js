import Apppointment from "./components/appointment";
import PromotionCarousel from "./components/promotion-carousel";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Schedule from "./components/schedule";
import Services from "./components/service";
import { iconTextColor } from "./constants/index";
import Testimonials from "./components/testimonials";
export default function App() {
  return (
    <div>
      <Hero />
      <p
        className="text-5xl font-extrabold pt-5 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Our Promotion
      </p>
      <PromotionCarousel />
      <p
        className="text-5xl font-extrabold pt-5 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Schedule
      </p>
      <Schedule />
      <p
        className="text-5xl font-extrabold pt-5 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Our Services
      </p>
      <Services />
      <p
        className="text-5xl font-extrabold pt-10 mb-8 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Gallery
      </p>
      <Gallery />
      {/* <p
        className="relative text-5xl font-extrabold pt-10 text-center before:bg-red-600 before:content-[''] before:absolute before:w-[150px] before:h-px before:top-[69%] before:left-[30%]"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Appointment
      </p> */}
      <p
        className="text-5xl font-extrabold pt-10 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        What our clients say
      </p>
      <Testimonials />
      <p
        className="text-5xl font-extrabold pt-10 text-center"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        Appointment
      </p>
      {/* {/* <div className="header-line-between">Appointment</div> */}
      <Apppointment />
    </div>
  );
}
