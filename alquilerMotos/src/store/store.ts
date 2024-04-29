import { createStore, combineReducers } from 'redux';
import motorcycleReducer from './reducers/motorcycleReducer';
import reservationReducer from './reducers/reservationReducer';
import garageReducer from './reducers/garageReducer';

const rootReducer = combineReducers({
  motorcycles: motorcycleReducer,
  reservations: reservationReducer,
  garages: garageReducer,
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
