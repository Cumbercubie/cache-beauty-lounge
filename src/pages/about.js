import { fontFamily, themeColor, aboutUsContent } from "../constants";
export default function About(props) {
  return (
    <div className="container py-4 px-12 lg:px-36">
      <div
        style={{ fontFamily: fontFamily, color: themeColor }}
        className="text-6xl font-bold block text-center my-8"
      >
        Cache Beauty Lounge
      </div>
      {/* <br />
      <div className="block text-center before:w-72 before:h-1 before:bg-red-600 before:absolute before:top-[35%] before:left-[15%]">
        .
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="font-light text-xl my-2 px-4 text-justify">
            {aboutUsContent}
          </div>
        </div>
        <img src="/images/store/store-board.jpg" alt="store-view" />
      </div>
    </div>
  );
}
