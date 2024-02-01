"use client";
import { useShowStore } from "@/lib/store/store";
import { useEffect, useState } from "react";
import { Document } from "@/lib/types/show.type";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoTicket } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import parse from "html-react-parser";
import Ratings from "@/components/Customs/RatingsBadges/Ratings";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ShowSummary = () => {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.showId);
  const { shows } = useShowStore();
  const [show, setShow] = useState<Document | null>(null);

  useEffect(() => {
    const show = shows.find((show) => show.show.id === id);
    setShow(show || null);
  }, [id, shows]);

  if (!show) {
    return (
      <div className="flex justify-center items-center min-h-screen font-semibold text-4xl text-white gap-6">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p>Please wait...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mt-10 gap-10">
      <Image
        className="h-[500px] w-1/3  rounded-lg"
        src={
          show.show.image
            ? show.show.image.original
            : "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
        }
        alt={show.show.name}
        height={300}
        width={300}
        priority
      />

      <div className="w-1/3 flex flex-col px-8 mb-auto text-gray-200">
        <h1 className="text-2xl font-bold mb-4">{show.show.name}</h1>
        <Ratings show={show.show} />
        <p className="mb-4">{parse(show.show.summary)}</p>

        <button
          className="py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 mt-4 flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out group"
          onClick={() => {
            router.push(`/booking/${show.show.id}`);
          }}
        >
          Book Tickets{" "}
          <IoTicket className="text-2xl mx-2 transform group-hover:rotate-45 group-hover:scale-125 transition-transform group-active:scale-100" />
        </button>
      </div>
    </div>
  );
};

export default ShowSummary;
