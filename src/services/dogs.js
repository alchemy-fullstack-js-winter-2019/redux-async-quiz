export const getDogs = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
      return {
        dog: json.message
      };
    });
};

