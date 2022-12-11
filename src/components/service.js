import { iconTextColor } from "../constants";
import { services } from "../constants/services"

export default function Services(props) {
    const serviceList = [
      {
        imagepath: "/icons/manicure.png",
        value: services.MANICURE,
        name: "Manicure",
      },
      {
        imagepath: "/icons/sobrancelha.png",
        value: services.MANICURE,
        name: "Manicure",
      },
      {
        imagepath: "/icons/depilacao.png",
        value: services.MANICURE,
        name: "Depilacao",
      },
      {
        imagepath: "/icons/pedicure.png",
        value: services.PEDICURE,
        name: "Pedicure",
      },
      {
        imagepath: "/icons/manicure.png",
        value: services.MANICURE,
        name: "Manicure",
      },
      {
        imagepath: "/icons/corte.png",
        value: services.MANICURE,
        name: "Manicure",
      },
    ];
    return <div className="w-full px-2 lg:w-1/2 pt-10 place-items-center gap-5 grid grid-cols-3 mx-auto">
        {serviceList?.map((s) => <div>
            <img className=" mx-auto w-1/2 lg:w-1/2" src={s.imagepath}  alt="service"/>
            <div className="text-center text-1xl lg:text-2xl font-bold" style={{color: iconTextColor}}>{s.name}</div>
        </div> )}
    </div>
}