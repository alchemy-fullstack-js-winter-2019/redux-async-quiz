export const getImage = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      return res.json();
    }
    );
};
