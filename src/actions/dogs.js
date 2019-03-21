import { getImage } from '../services/dogs';

export const FETCH_DOG_IMAGE = 'FETCH_DOG_IMAGE';
export const fetchDogImage = () => ({
  type: FETCH_DOG_IMAGE,
  payload: getImage()
});
