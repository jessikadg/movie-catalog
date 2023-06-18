export default async function getShowInfo(showId) {
  let response = (await fetch(`https://api.tvmaze.com/shows/${showId}`)).json();

  return response;
}
