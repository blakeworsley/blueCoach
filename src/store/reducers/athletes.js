import { initialState } from '../initialState.js';

export default function athletesReducer(state = initialState.athletes, action) {
  switch(action.type) {
    case 'RECIEVED_ATHLETES':
      return {
        status: 'ALL_ATHLETES_RECEIVED',
        athletes: action.athletes
      };
    case 'NO_ATHLETES':
      return {
        status: 'NO_ATHLETES',
        athletes: []
      };
    default:
      return state;
  }
}