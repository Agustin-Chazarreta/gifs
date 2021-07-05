const apiKey = "dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa";

export default function getGifs({ keyword } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => ({
        url: image.images.downsized_medium.url,
        id: image.id,
      }));
      return gifs;
    });
}
