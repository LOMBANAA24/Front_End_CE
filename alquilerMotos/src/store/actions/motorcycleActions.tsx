// En un archivo llamado motorcycleActions.tsx
export const ADD_MOTORCYCLE = 'ADD_MOTORCYCLE';
export const REMOVE_MOTORCYCLE = 'REMOVE_MOTORCYCLE';

export const addMotorcycle = (motorcycle) => ({
  type: ADD_MOTORCYCLE,
  payload: motorcycle,
});

export const removeMotorcycle = (motorcycleId) => ({
  type: REMOVE_MOTORCYCLE,
  payload: motorcycleId,
});
