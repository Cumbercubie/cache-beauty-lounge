import { Carousel } from "flowbite-react";
import { promotionList } from "../constants";
export default function PromotionCarousel(props) {
  return (
    <Carousel className="h-[450px] w-full">
      {promotionList.map((p) => (
        <img className="w-3/4 object-fit" src={p.bannerImageUrl} alt="" />
      ))}
    </Carousel>
  );
}
