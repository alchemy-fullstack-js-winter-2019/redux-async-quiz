import { getMessage } from '../services/dogApi';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const fetchMessage = () => ({
  type: FETCH_MESSAGE,
  payload: getMessage()
});
