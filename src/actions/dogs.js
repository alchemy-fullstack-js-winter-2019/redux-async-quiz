import { getDog } from '../services/dogsApi'; 

export const FETCH_DOG = 'FETCH_DOG';

export const fetchDog = () => ({
  type: FETCH_DOG,
  payload: getDog()
});
