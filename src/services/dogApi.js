export const getDogImage = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json());
};
