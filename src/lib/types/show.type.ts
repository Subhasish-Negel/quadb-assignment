export interface Document {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  image: Image | null;
  summary: string;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface ShowState {
  shows: Document[] | [];
}

export interface UserAction {
  setShows: (show: Document[]) => void;
}
