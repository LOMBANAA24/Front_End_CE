// En un archivo llamado reservationActions.tsx
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  payload: reservation,
});

export const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  payload: reservationId,
});
