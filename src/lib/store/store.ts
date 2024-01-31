import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Document, ShowState, UserAction } from "@/lib/types/show.type";

export const useShowStore = create<ShowState & UserAction>()(
  persist(
    (set, get) => ({
      shows: [],
      setShows: (shows: Document[]) => {
        const updatedItems = [...shows];
        set({ shows: updatedItems });
      },
    }),
    {
      name: "zustandProduct&CartbySN",
      partialize: (state) => ({
        shows: state.shows,
      }),
    }
  )
);
