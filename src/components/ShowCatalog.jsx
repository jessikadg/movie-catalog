import { getShowListByRating } from "../api/getShowListByRating";
import { useState, useEffect } from "react";
import CategoryRow from "./CategoryRow";
import _ from "underscore";

export default function ShowCatalog() {
  const [allShows, setAllShows] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShowsData = async () => {
      try {
        await getShowListByRating()
          .then((data) => setAllShows(data))
          .then(setLoading(false));
      } catch (e) {
        setLoading(false);
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
      {loading ? (
        <>
          {/* In a real-world scenario that would be a loading spin component */}
          <span>Loading...</span>
        </>
      ) : loading === false && !allShows ? (
        <>
          {/* In a real-world scenario that would be a error component */}
          <span>Sorry, we couldn't load the shows</span>
        </>
      ) : (
        <>
          {mainCategories.map((category) => (
            <CategoryRow
              showsOnCategory={showsOnCategory(category)}
              category={category}
              key={category}
            />
          ))}
        </>
      )}
    </>
  );
}
