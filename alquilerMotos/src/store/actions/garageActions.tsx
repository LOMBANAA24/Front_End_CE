export const ADD_GARAGE = 'ADD_GARAGE';
export const EDIT_GARAGE = 'EDIT_GARAGE';
export const REMOVE_GARAGE = 'REMOVE_GARAGE';

export const addGarage = (garage) => ({
  type: ADD_GARAGE,
  payload: garage,
});

export const editGarage = (garage) => ({
  type: EDIT_GARAGE,
  payload: garage,
});

export const removeGarage = (garageId) => ({
  type: REMOVE_GARAGE,
  payload: garageId,
});
