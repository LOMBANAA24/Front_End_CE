// En un archivo llamado motorcycleReducer.tsx
import { ADD_MOTORCYCLE, REMOVE_MOTORCYCLE } from '../actions/motorcycleActions';

const initialState = [];

const motorcycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOTORCYCLE:
      return [...state, action.payload];
    case REMOVE_MOTORCYCLE:
      return state.filter((motorcycle) => motorcycle.id !== action.payload);
    default:
      return state;
  }
};

export default motorcycleReducer;
