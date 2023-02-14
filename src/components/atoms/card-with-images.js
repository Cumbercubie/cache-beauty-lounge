import React from "react";

export default function CardWithImages({
  imageSource,
  title,
  content,
  children,
}) {
  return (
    <a
      href="#"
      className="mx-auto w-3/4 flex flex-col bg-white border border-gray-200 shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {imageSource}
      <div class="flex flex-col justify-start p-4 leading-normal">
        {!!title && (
          <h5 class="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        )}
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {children}
        </p>
      </div>
    </a>
  );
}
