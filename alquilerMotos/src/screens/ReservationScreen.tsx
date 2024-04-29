// ReservationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'; // Importa connect desde react-redux

const ReservationScreen = ({ reservations }) => {
  console.log("Reservations:", reservations); // Añade esta consola para verificar las reservas

  return (
    <View style={styles.container}>
      <Text>Contenido de la sección de Reservas</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  reservations: state.reservations // Accede al estado de las reservas desde el store
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps)(ReservationScreen); // Conecta el componente con el store
