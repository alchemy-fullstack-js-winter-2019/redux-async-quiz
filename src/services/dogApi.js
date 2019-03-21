export const getDogImages = () => {
  return fetch('https://dog.ceo/api/breeds/image/random', {
  })
    .then(res => res.json());
};
