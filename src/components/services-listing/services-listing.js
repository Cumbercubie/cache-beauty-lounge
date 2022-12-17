import { iconTextColor } from "../../constants";
import { services } from "../../constants/services";
import "./service.css";
export default function ServiceListing(props) {
  const serviceList = [
    {
      imagepath: "/icons/manicure.png",
      value: services.MANICURE,
      name: "Manicure",
    },
    {
      imagepath: "/icons/sobrancelha.png",
      value: services.EYELASH,
      name: "Eyelash",
    },
    {
      imagepath: "/icons/depilacao.png",
      value: services.MANICURE,
      name: "Spa",
    },
    {
      imagepath: "/icons/pedicure.png",
      value: services.PEDICURE,
      name: "Pedicure",
    },
    {
      imagepath: "/icons/corte.png",
      value: services.WAXING,
      name: "Hair",
    },
    {
      imagepath: "/icons/children_brown.png",
      value: services.CHILDREN,
      name: "Kid services",
    },
  ];
  return (
    <div className="w-full px-2 lg:w-1/2 pt-10 place-items-center gap-5 grid grid-cols-3 mx-auto">
      {serviceList?.map((s) => (
        <div
          className="wrapper"
          onClick={() => window.open(`/services#${s.value}`)}
        >
          <div>
            <img
              className=" mx-auto w-1/2 lg:w-1/2"
              src={s.imagepath}
              alt="service"
            />
            <div
              className="text-center text-1xl lg:text-2xl font-bold"
              style={{ color: iconTextColor }}
            >
              {s.name}
            </div>
          </div>
          <div class="cache-border top"></div>
          <div class="cache-border left"></div>
          <div class="cache-border right"></div>
          <div class="cache-border bottom-left"></div>
          <div class="cache-border bottom-right"></div>
        </div>
      ))}
    </div>
  );
}
