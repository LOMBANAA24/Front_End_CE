// En un archivo llamado clientReducer.tsx
import { ADD_CLIENT, REMOVE_CLIENT } from '../actions/clientActions';

const initialState = [];

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return [...state, action.payload];
    case REMOVE_CLIENT:
      return state.filter((client) => client.id !== action.payload);
    default:
      return state;
  }
};

export default clientReducer;
