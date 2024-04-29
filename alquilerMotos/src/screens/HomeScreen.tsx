import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { garajes } from './GarageListScreen'; // Importar los datos de garajes

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const [totalMotos, setTotalMotos] = useState(0);
  const [totalReservas, setTotalReservas] = useState(0);
  const [totalAgencias, setTotalAgencias] = useState(0);
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalGarajes, setTotalGarajes] = useState(0);
  const [selectedMoto, setSelectedMoto] = useState(null);

  // Datos de ejemplo para motos de competición
  const motos = [
    { id: 1, nombre: 'Ducati Panigale V4', imagen: require("../assets/images/panigale_v4.png") },
    { id: 2, nombre: 'BMW S1000RR', imagen: require('../assets/images/s1000rr.jpeg') },
    { id: 3, nombre: 'Kawasaki Ninja ZX-10R', imagen: require("../assets/images/zx10r.jpeg") },
    { id: 4, nombre: 'Aprilia RSV4', imagen: require('../assets/images/rsv4.jpg') },
    { id: 5, nombre: 'Yamaha YZF-R1', imagen: require("../assets/images/r1.jpeg") },
    { id: 6, nombre: 'Honda CBR1000RR', imagen: require('../assets/images/cbr1000rr.jpg') },
  ];

  // Simulación de datos para gráficos
  const reservasPorMes = [
    { month: 'Enero', reservations: 25 },
    { month: 'Febrero', reservations: 16 },
    { month: 'Marzo', reservations: 18 },
    { month: 'Abril', reservations: 35 },
    { month: 'Mayo', reservations: 30 },
  ];

  useEffect(() => {
    // Simulamos los datos de ejemplo
    setTotalMotos(motos.length);
    setTotalReservas(10); // Total de reservas
    setTotalAgencias(5); // Total de agencias
    setTotalClientes(100); // Total de clientes
    setTotalGarajes(garajes.length); // Total de garajes
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título de las motos */}
      <Text style={styles.sectionTitle}>Nuestras motos</Text>

      {/* Imagen grande seleccionada */}
      {selectedMoto && (
        <View style={styles.selectedImageContainer}>
          <Image source={selectedMoto.imagen} style={styles.selectedImage} />
          <Text style={styles.selectedMotoName}>{selectedMoto.nombre}</Text>
        </View>
      )}

      {/* Lista de motocicletas en miniatura */}
      <ScrollView horizontal style={styles.motosList}>
        {motos.map(moto => (
          <TouchableOpacity key={moto.id} onPress={() => setSelectedMoto(moto)}>
            <View style={styles.motoContainer}>
              <Image source={moto.imagen} style={styles.motoImage} />
              <Text style={styles.motoName}>{moto.nombre}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Resumen de gestión */}
      <View style={[styles.summaryContainer, styles.tableContainer]}>
        <Text style={styles.summaryTitle}>Resumen de Gestión</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellTitle}>Total de motocicletas disponibles:</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>{totalMotos}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellTitle}>Total de reservas actuales:</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>{totalReservas}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellTitle}>Total de agencias:</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>{totalAgencias}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellTitle}>Total de clientes:</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>{totalClientes}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellTitle}>Total de garajes:</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>{totalGarajes}</Text>
        </View>
      </View>

      {/* Gráfico de Reservas por Mes */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Reservas por Mes</Text>
        <BarChart
          data={{
            labels: reservasPorMes.map(item => item.month),
            datasets: [{ data: reservasPorMes.map(item => item.reservations) }],
          }}
          width={screenWidth - 40}
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 10,
            borderRadius: 10,
          }}
        />
      </View>

      {/* Lista de Últimas Reservas */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Últimas Reservas</Text>
        <Text>Reserva 1: Cliente Juan, Motocicleta Ducati Panigale V4, Fecha: 25 de Abril</Text>
        <Text>Reserva 2: Cliente María, Motocicleta Yamaha YZF-R1, Fecha: 23 de Abril</Text>
        <Text>Reserva 3: Cliente Pedro, Motocicleta Honda CBR1000RR, Fecha: 20 de Abril</Text>
      </View>

      {/* Fotos y Detalles de Motocicletas Destacadas */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Motocicletas Destacadas</Text>
        <Image source={require("../assets/images/panigale_v4.png")} style={styles.featuredImage} />
        <Text style={styles.featuredMotoName}>Ducati Panigale V4</Text>
        <Text style={styles.featuredMotoDescription}>La Ducati Panigale V4 es una motocicleta de alta gama con un rendimiento excepcional...</Text>
      </View>

      {/* Mapa de Ubicaciones */}
      <View style={[styles.sectionContainer, styles.agencyTableContainer]}>
        <Text style={styles.sectionTitle}>Ubicaciones de Agencias y Garajes</Text>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.tableHeaderCell}>Agencia</Text>
            <Text style={styles.tableHeaderCell}>Ubicación</Text>
            <Text style={styles.tableHeaderCell}>Número de Garajes</Text>
          </View>
          {garajes.map(garaje => (
            <View style={styles.tableRow} key={garaje.id}>
              <Text style={styles.tableCell}>{garaje.name}</Text>
              <Text style={styles.tableCell}>{garaje.address}</Text>
              <Text style={styles.tableCell}>{garaje.espacio}</Text>
            </View>
          ))}
        </View>
        {/* Botón para ir a la sección de Garajes */}
        <TouchableOpacity onPress={() => navigation.navigate('Garage')} style={styles.button}>
          <Text style={styles.buttonText}>Ver Garajes</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  motosList: {
    marginBottom: 20,
    marginLeft: 20,
  },
  motoContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  motoImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  motoName: {
    textAlign: 'center',
  },
  summaryContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
  },
  agencyTableContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
  },
  alignRight: {
    textAlign: 'right',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  tableCellTitle: {
    fontWeight: 'bold',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  chartContainer: {
    marginHorizontal: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  featuredMotoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredMotoDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  selectedImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  }, 
  selectedImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  selectedMotoName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default HomeScreen;
