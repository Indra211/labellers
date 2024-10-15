import React from "react";
import { Data, visibleDataType } from "../utils/types";

export const ImageViewer: React.FC<visibleDataType> = ({ visibleData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 px-4">
      {visibleData.map((item: Data) => (
        <div
          key={item.src.org}
          className="relative w-full h-64 overflow-hidden"
        >
          <a
            href={item.src.org}
            target="_blank"
            rel="noreferrer"
            className="cuursor-pointer"
          >
            <img
              src={item.src.thumb}
              alt={item.alt}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </a>
        </div>
      ))}
    </div>
  );
};
