import Ratings from "@/components/Customs/RatingsBadges/Ratings";
import { Show } from "@/lib/types/show.type";
import Image from "next/image";
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
        <Ratings show={show} />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 mt-4 w-full flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out group"
          onClick={() => router.push(`/showlist/${show.id}`)}
        >
          View More Details{" "}
          <FaRegArrowAltCircleRight className="text-2xl mx-2 transform group-hover:translate-x-[4px] transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
