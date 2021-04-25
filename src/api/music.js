export const fetchData = ({ keyword, genre }) => {
  const term = keyword || "all";
  const media = genre || "all";
  return fetch(`https://itunes.apple.com/search?limit=100&term=${term}&media=${media}`).then((res) => res.json())
};