import { Show } from "@/lib/types/show.type";
import React from "react";

interface ShowCardProps {
  show: Show;
}
const Ratings = ({ show }: ShowCardProps) => {
  return (
    <div className="flex shadow-xl rounded-lg w-fit">
      {show.rating.average ? (
        <>
          <div
            className={`flex items-center justify-center w-12 h-6 rounded-lg text-sm gap-0.5 font-semibold text-white ${
              Number(show.rating.average.toFixed(1)) >= 7
                ? "bg-green-600 dark:bg-green-600 "
                : Number(show.rating.average.toFixed(1)) >= 3
                ? "bg-yellow-400 dark:bg-yellow-600 text-sm"
                : Number(show.rating.average.toFixed(1)) >= 0
                ? "bg-orange-400 dark:bg-orange-600 text-sm"
                : "bg-red-500 dark:bg-red-600 text-sm"
            }`}
          >
            <p className="">{Number(show.rating.average.toFixed(1))}</p>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-6 rounded-lg text-sm gap-0.5 font-semibold text-black bg-gray-200 px-2">
          <p className="">No rating found</p>
        </div>
      )}
    </div>
  );
};

export default Ratings;
