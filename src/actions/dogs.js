import { getImage } from '../services/dogsApi';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const fetchImage = () => ({
  type: FETCH_IMAGE,
  payload: getImage()
});
