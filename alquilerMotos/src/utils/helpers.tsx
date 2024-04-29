// En un archivo llamado helpers.tsx
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
  };
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-ES').format(date);
  };
  
  // añade aquí todas las funciones de utilidad que necesites
  