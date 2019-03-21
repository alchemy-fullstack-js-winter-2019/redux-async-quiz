export const getDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => json[0]);
};
