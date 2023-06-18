export default async function getSearchResults(query) {
  let response = (
    await fetch(`https://api.tvmaze.com/search/shows?q=:${query}`)
  ).json();

  return response;
}
