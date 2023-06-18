import { getShowListByRating } from "../api/getShowListByRating";
import { useState, useEffect } from "react";
import CategoryRow from "./CategoryRow";
import _ from "underscore";

export default function ShowCatalog() {
  const [allShows, setAllShows] = useState();

  useEffect(() => {
    const getShowsData = async () => {
      try {
        await getShowListByRating().then((data) => setAllShows(data));
      } catch (e) {
        console.log(e);
      }
    };
    getShowsData();
  }, []);

  const topTenShows = allShows?.slice(0, 10);

  const mainCategories = [
    ...new Set(
      _.union(
        topTenShows?.map((show) => {
          return show.genres;
        })
      ).flat(1)
    ),
  ];

  const showsOnCategory = (category) => {
    return allShows.filter((show) => show.genres.includes(category));
  };

  return (
    <>
      {mainCategories.map((category) => (
        <CategoryRow
          showsOnCategory={showsOnCategory(category)}
          category={category}
          key={category}
        />
      ))}
    </>
  );
}
