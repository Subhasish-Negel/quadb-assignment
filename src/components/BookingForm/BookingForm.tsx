"use client";
import { useShowStore } from "@/lib/store/store";
import { useEffect, useState, FormEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Show } from "@/lib/types/show.type";
import { useParams } from "next/navigation";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BookingForm = () => {
  const params = useParams();
  const id = Number(params.id);
  const { shows } = useShowStore();
  const [show, setShow] = useState<Show | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  const [movieName, setMovieName] = useState(show?.name);

  useEffect(() => {
    const show = shows.find((show) => show.show.id === id);
    setShow(show?.show || null);
    setMovieName(show?.show.name);
  }, [id, setShow, shows]);

  if (!show) {
    return (
      <div className="flex justify-center items-center min-h-screen font-semibold text-4xl text-white gap-6">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p>Please wait...</p>
      </div>
    );
  }
  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handleMovieNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-start items-center mx-auto mt-16 p-10 bg-black/30 rounded-lg w-2/3">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 flex justify-center items-center gap-6 flex-col md:flex-row"
      >
        <Image
          className="h-[120px] w-[120px] rounded-lg"
          src={
            show.image
              ? show.image.medium
              : "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
          }
          alt={show.name}
          height={100}
          width={100}
          priority
        />

        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-white text-start font-medium">
              Show Name
            </label>
            <input
              className="rounded-xl h-11 bg-gray-200 text-black/80 shadow-2xl border-gray-600 font-semibold  placeholder:font-bold text-xs md:text-sm lg:text-lg text-center"
              type="text"
              onChange={handleMovieNameChange}
              value={movieName}
            />
          </div>

          <div className="flex gap-6 w-full flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col w-fit">
              <label htmlFor="" className="text-white text-start font-medium">
                Tickets
              </label>
              <select className="w-full md:w-fit rounded-xl h-11 bg-gray-200 text-black/80 shadow-2xl border-gray-600  placeholder:font-bold font-bold text-xs md:text-sm xl:text-lg text-center">
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-fit">
              <label htmlFor="" className="text-white text-start font-medium">
                Date & Time
              </label>
              <DatePicker
                timeIntervals={180}
                dateFormat="Pp"
                showTimeSelect
                className="w-fit rounded-xl h-11 bg-gray-200 text-black/80 shadow-2xl border-gray-600  placeholder:font-bold font-semibold text-xs md:text-sm xl:text-base text-center"
                selected={date}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>
      </form>

      <button
        className="w-1/3 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:bg-blue-700 mt-4 flex items-center justify-center hover:scale-[1.03] active:scale-[.97] active:duration-75 transition-all ease-in-out"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default BookingForm;
