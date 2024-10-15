import React from "react";
import { CapitalizeWord } from "../utils/const";
import { Data } from "../utils/types";
import { useNavigate } from "react-router-dom";

export const GridView = React.memo(
  ({ data, label }: { data: Data[]; label: string }) => {
    const navigate = useNavigate();
    return (
      <div className="w-full bg-slate-300 p-2 cursor-pointer rounded">
        <h1 className="text-xl font-medium">{CapitalizeWord(label)}</h1>
        <div className="grid grid-cols-2  md:grid-cols-3  gap-2">
          {data.map((item: Data) => (
            <a
              href={item.src.org}
              key={item.src.org}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-lg">
                <img
                  src={item.src.thumb}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
        <p
          className="text-center text-red-400 cursor-pointer font-semibold mt-2"
          onClick={() => navigate(`/group/${label}`)}
        >
          Click to view more
        </p>
      </div>
    );
  }
);
