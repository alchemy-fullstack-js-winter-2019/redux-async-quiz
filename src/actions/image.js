import { getImage } from '../services/dogImageApi';

export const FETCH_IMAGE_LOADING = 'FETCH_DOGIMAGE';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const fetchImage = () => ({
  type: FETCH_IMAGE,
  loadStart: FETCH_IMAGE_LOADING,
  payload: getImage(),
});
