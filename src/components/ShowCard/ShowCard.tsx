import { Show } from "@/lib/types/show.type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface ShowCardProps {
  show: Show;
}

function ShowCard({ show }: ShowCardProps) {
  const router = useRouter();

  return (
    <div className="w-fit bg-gray-400 shadow rounded h-[450px]">
      <Image
        className="h-[300px] cursor-pointer"
        src={
          show.image
            ? show.image.original
            : "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
        }
        alt={show.name}
        height={300}
        width={300}
        priority
      ></Image>

      <div className="p-4 flex flex-col items-center">
        <h1 className="text-xl text-slate-800 font-semibold">{show.name}</h1>
        {/* Shows Ratings */}
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

        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 mt-4 w-full flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out group"
          onClick={() => router.push(`/show/${show.id}`)}
        >
          View More Details{" "}
          <FaRegArrowAltCircleRight className="text-2xl mx-2 transform group-hover:translate-x-[4px] transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
