export const getQuote = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => res[0]);
};
