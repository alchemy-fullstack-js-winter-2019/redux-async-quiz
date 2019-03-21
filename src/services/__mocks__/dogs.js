export const getDog = () => {
  return Promise.all([
    {
      'status': 'success',
      'message': 'doggo!'
    }
  ]);
};
