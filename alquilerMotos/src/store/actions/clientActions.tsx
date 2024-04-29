// En un archivo llamado clientActions.tsx
export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client,
});

export const removeClient = (clientId) => ({
  type: REMOVE_CLIENT,
  payload: clientId,
});
