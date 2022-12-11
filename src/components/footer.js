import { fontFamily, iconTextColor, themeColor } from "../constants";

export default function Footer() {
  const iconRender = (name) => {};
  return (
    <footer
      className="bottom-0  w-full p-4 sm:p-6"
      style={{ background: themeColor }}
    >
      <div className="md:flex md:justify-between gap-1">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="FlowBite Logo"
            />
            <span
              style={{ fontFamily: fontFamily }}
              className="self-center text-4xl font-bold whitespace-wrap dark:text-white"
            >
              Cache Beauty Lounge
            </span>
          </a>
        </div>
        <div className="grid justify-items-start grid grid-cols-3 gap-10 sm:gap-10">
          <div>
            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/cachebeautylounge/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="mdi mdi-facebook text-2xl text-top"></span>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/cachebeautylounge/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="mdi mdi-instagram text-2xl text-top" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
              <li class="flex items-top">
                <span className="mdi mdi-home text-xl w-4 h-4 mr-4" />
                267 Egg Harbor Rd, Sewell, NJ 08080
              </li>
              <li class="flex items-top">
                <span className="mdi mdi-phone text-xl w-4 h-4 mr-4" />
                (856) 270-2916
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
