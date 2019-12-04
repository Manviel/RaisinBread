export const getImages = async offset => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/gifs/search?q=cats&api_key=${process.env.REACT_APP_KEY}&limit=3&offset=${offset}`
  );

  return await response.json();
};

export const getRandomImage = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/gifs/random?api_key=${process.env.REACT_APP_KEY}`
  );

  return await response.json();
};
