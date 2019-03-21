export const getDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.toJSON())
    .then(json => ({
      url: json.message
    }));
};
