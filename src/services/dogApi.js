const getDogImg = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then(dog => dog.message);

export default {
  getDogImg,
};
