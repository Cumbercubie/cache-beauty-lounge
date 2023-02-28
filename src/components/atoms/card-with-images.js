import React from "react";

export default function CardWithImages({
  imageSource,
  title,
  content,
  rtl = false,
  children,
}) {
  return (
    <div
      className="
        mx-auto w-3/4 grid grid-rows-2 bg-white border shadow
        lg:grid-cols-2 dark:border-gray-700
        dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div>
        <div className="bg-red-500">01</div>
        <div className="bg-red-500">02</div>
      </div>
      {/* <div className="bg-[url('../../../public/images/appointment/face_flower.jpg')]">03</div> */}
    </div>
  );
}
