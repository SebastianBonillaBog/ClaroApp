import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RedDomestica() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
          <Text style={styles.title}>¿Qué es una red doméstica?</Text>
      <View>    
      <Text style={styles.text}>
        Una red doméstica conecta todos los dispositivos del hogar a través de un router. 
        Este distribuye la señal de internet, que puede llegar por cable coaxial, fibra óptica 
        o inalámbrica. Repetidores o nodos amplían la cobertura en zonas con señal débil.
      </Text>
      <Image 
        source={require('../../assets/images/mapred.png')} 
        style={{marginBottom:20}} 
        resizeMode="contain"
      />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>La cabecera</Text>
        <Text style={styles.text}>
          Es el punto de la red donde se le da tratamiento a las señales o son enviadas a los 
          usuarios como datos, televisión y voz.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Red troncal</Text>
        <Text style={styles.text}>
          Es el componente de fibra óptica de la red donde hay tráfico de datos que se envían 
          mediante pulsos de luz. A partir del nodo óptico la red HFC se convierte en cable coaxial.
        </Text>
        <Text style={styles.point}>• Cable coaxial: núcleo de cobre para transportar señales eléctricas de alta frecuencia.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>¿Cómo llega el internet a tu casa?</Text>
        <Text style={styles.text}>
          El internet comienza en los proveedores globales, quienes lo envían a través de cables 
          submarinos y terrestres a los centros de distribución locales (headends).
        </Text>
        <Text style={styles.point}>• Proveedor → Red troncal → Headend → Nodo → Cable/Fibra → Módem → Dispositivos</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Red de distribución</Text>
        <Text style={styles.text}>
          Parte de la red HFC encargada de la distribución de señales desde el nodo óptico hasta 
          cada usuario. La red de abonado conecta al usuario con la red externa.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Nodo óptico</Text>
        <Text style={styles.text}>
          Su función principal es transformar los pulsos de luz en señales eléctricas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Amplificadores</Text>
        <Text style={styles.text}>
          Son los encargados de compensar las pérdidas de señal ocasionadas por el cable coaxial.
        </Text>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
 header: {  
    width: '100%', 
    paddingVertical: 0, 
    marginTop: 35,
    justifyContent:"center"
  },
  content: {
    padding: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: "100%",
    marginBottom: 15,
    color: '#fd0101ff', // rojo elegante
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#444',
  },
  point: {
    fontSize: 15,
    marginVertical: 4,
    color: '#555',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});