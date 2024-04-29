import { combineReducers } from 'redux';
import motorcycleReducer from './reducers/motorcycleReducer';
import reservationReducer from './reducers/reservationReducer';
import garageReducer from './reducers/garageReducer'; // Agregamos el reducer de garajes

const rootReducer = combineReducers({
  motorcycles: motorcycleReducer,
  reservations: reservationReducer,
  garages: garageReducer, // Agregamos el reducer de garajes
});

export default rootReducer;
