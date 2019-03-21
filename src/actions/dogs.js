import getDogImg from '../services/dogApi';

export const FETCH_DOG_IMG = 'FETCH_DOG_IMG';
export const fetchDogImg = () => ({
  type: FETCH_DOG_IMG,
  payload: getDogImg()
});
