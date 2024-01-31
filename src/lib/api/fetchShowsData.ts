export const fetchShowData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
