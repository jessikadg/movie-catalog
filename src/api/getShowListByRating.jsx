export const getShowListByRating = async () => {
  let response = await (await fetch(`https://api.tvmaze.com/shows`)).json();

  const showsByRating = response.sort(
    (a, b) => Number(b.rating.average) - Number(a.rating.average)
  );

  return showsByRating;
};
