import { getDog } from '../services/dogs';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchDog,
  FETCH_DOG,
  FETCH_DOG_PENDING,
  FETCH_DOG_FULFILLED,
  FETCH_DOG_REJECTED
] = createAction('FETCH_DOG', getDog);
