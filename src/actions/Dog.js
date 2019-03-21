import { getDog } from '../services/dogApi';
import { createAction } from 'promise-middleware-redux';

export const [
  getDogAction,
  FETCH_DOG,
  FETCH_DOG_PENDING,
  FETCH_DOG_FULFILLED,
  FETCH_DOG_REJECTED
] = createAction('FETCH_DOG', getDog);
