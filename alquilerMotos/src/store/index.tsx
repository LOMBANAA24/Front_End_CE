// En un archivo llamado index.tsx
import { createStore, combineReducers } from 'redux';
import motorcycleReducer from './reducers/motorcycleReducer';
import reservationReducer from './reducers/reservationReducer';

const rootReducer = combineReducers({
  motorcycles: motorcycleReducer,
  reservations: reservationReducer,
  // añade aquí los demás reducers que necesites
});

const store = createStore(rootReducer);

export default store;
