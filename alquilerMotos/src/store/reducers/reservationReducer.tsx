// En un archivo llamado reservationReducer.tsx
import { ADD_RESERVATION, REMOVE_RESERVATION } from '../actions/reservationActions';

const initialState = [];

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case REMOVE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export default reservationReducer;
