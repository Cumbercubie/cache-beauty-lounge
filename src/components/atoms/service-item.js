import { themeColor } from "../../constants";

export default function ServiceItem({ name, price }) {
  return (
    <div className="flex">
      <div className="font-light text-xl">{name}</div>
      <div
        style={{ borderColor: themeColor }}
        className="mx-2 h-22 flex-1 border-dotted border-b-2"
      ></div>
      <div className="font-bold text-xl">${price}</div>
    </div>
  );
}
