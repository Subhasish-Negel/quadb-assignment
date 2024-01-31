"use client";
import { useState, useEffect } from "react";
import { Document } from "@/lib/types/show.type";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useShowStore } from "@/lib/store/store";
import ShowCard from "@/components/ShowCard/ShowCard";
import { fetchShowData } from "@/lib/api/fetchShowsData";

export const ShowsList = () => {
  const { shows, setShows } = useShowStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const showsData = await fetchShowData();
      setShows(showsData);
      setIsLoading(false);
    };

    fetchData();
  }, [setShows]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen font-semibold text-4xl text-white gap-6 animate-ping">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p>Please wait...</p>
      </div>
    );
  }
  return (
    <div className="p-8">
      <div className="flex justify-center items-center my-4">
        <div className="flex flex-col space-y-4"></div>
      </div>
      <ul className="flex flex-wrap gap-5 justify-center items-center">
        {shows.map((show) => (
          <li key={show.show.id}>
            <ShowCard show={show.show} />
          </li>
        ))}
      </ul>
    </div>
  );
};
