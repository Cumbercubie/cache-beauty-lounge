import { Fragment, useEffect } from "react";
import ServiceItem from "../components/atoms/service-item";
import { classicServices, services } from "../constants";

export default function ServicesPage() {
  const renderService = (group, imageSide = "left") => {
    switch (imageSide) {
      case "left":
        return (
          <div className="my-16" id={group.value}>
            <div className="grid grid-cols-1 gap-4 align-items-center lg:grid-cols-3">
              <div className="grid justify-items-start align-middle">
                <img
                  src="/images/services/3-3.png"
                  alt="service"
                  className="rounded-full border border-4 border-indigo-600 w-64 h-64"
                />
              </div>
              <div className="grid col-span-2 grid-cols-1">
                <div>
                  <div className="text-4xl font-bold uppercase">
                    {group.groupName}
                  </div>
                  <hr className="w-full my-4 h-0.5 bg-indigo-600 rounded border-0" />
                  <div className="grid grid-cols-2 gap-4">
                    {group.services.map((s) => (
                      <ServiceItem
                        id={group.groupName}
                        name={s.name}
                        price={s.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "right":
        return (
          <div className="my-16" id={group.value}>
            <div className="grid grid-cols-1 gap-4 align-items-center lg:grid-cols-3">
              <div className="grid col-span-2 grid-rows-1">
                <div>
                  <div className="text-4xl font-bold uppercase">
                    {group.groupName}
                  </div>
                  <hr className="w-full my-4 h-0.5 bg-indigo-600 rounded border-0" />
                  <div className="grid grid-cols-2 gap-4">
                    {group.services.map((s) => (
                      <ServiceItem
                        id={group.groupName}
                        name={s.name}
                        price={s.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid justify-items-end align-middle">
                <img
                  src="/images/services/3-3.png"
                  alt="service"
                  className="rounded-full border border-4 border-indigo-600 w-64 h-64"
                />
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    const anchor = window.location?.hash?.split("#")[1] || "";
    console.log(anchor);
    document
      .getElementById(anchor)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="container mx-auto px-12 lg:px-36">
      {classicServices.map((group, index) => {
        return renderService(group, index % 2 == 0 ? "left" : "right");
      })}
    </div>
  );
}
