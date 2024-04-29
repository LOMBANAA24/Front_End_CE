import { ADD_GARAGE, EDIT_GARAGE, REMOVE_GARAGE } from '../actions/garageActions';

const initialState = [];

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GARAGE:
      return [...state, action.payload];
    case EDIT_GARAGE:
      return state.map((garage) =>
        garage.id === action.payload.id ? action.payload : garage
      );
    case REMOVE_GARAGE:
      return state.filter((garage) => garage.id !== action.payload);
    default:
      return state;
  }
};

export default garageReducer;
