export const getDogs = () => {
  const dog = 
    {
      'status': 'success',
      'message': 'https://images.dog.ceo/breeds/eskimo/n02109961_3159.jpg'
    };

  return Promise.resolve(
    dog
  );
};
