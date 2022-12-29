import { iconTextColor } from "../../constants";

export default function Headline({ text }) {
  return (
    <div className="w-full flex justify-center">
      <span
        className="text-6xl font-extrabold my-10 text-center headline"
        style={{ fontFamily: "Pinyon Script", color: iconTextColor }}
      >
        {text}
      </span>
    </div>
  );
}
