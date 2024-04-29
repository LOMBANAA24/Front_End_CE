// En un archivo llamado reservationReducer.js

import { ADD_RESERVATION, REMOVE_RESERVATION } from '../actions/reservationActions';

const initialState = {
  reservations: [],
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case REMOVE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter(reservation => reservation.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reservationReducer;
