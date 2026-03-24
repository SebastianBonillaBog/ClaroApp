import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CalidadSenal() {
  return (
    <ScrollView>
        <View style={styles.header}>
            <Text style={styles.title}>📶 Cómo se mide la calidad de la señal</Text>
        </View>

        <View style={styles.card}>
             <Text style={styles.cardTitle}>TX – Transmisión</Text>
            <Text style={styles.cardText}>
                Es la potencia con la que el módem envía datos hacia la red del proveedor. Si el TX es muy alto, el módem está “gritando” para ser escuchado, lo que indica problemas en el cableado o interferencias.
        </Text>
        </View>
        <View style={styles.card}>
             <Text style={styles.cardTitle}>RX – Recepción</Text>
            <Text style={styles.cardText}>
                Es la potencia con la que el módem recibe la señal desde la red.Por qué importa: Si el RX es muy bajo (por ejemplo, -10 dBmV), la señal llega débil y los datos pueden perderse.
        </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>SNR – Relación señal/ruido</Text>
            <Text style={styles.cardText}>
                Es la medida de cuánta señal útil hay en comparación con el ruido. Por qué importa: Un SNR alto significa que la señal es clara y estable; un SNR bajo indica interferencias.
        </Text>
        </View>
        <View style={styles.card}>
             <Text style={styles.cardTitle}>Ruido</Text>
            <Text style={styles.cardText}>
                El ruido no es un sonido literal, sino cualquier interferencia eléctrica o electromagnética que se mezcla con la señal útil de datos.
Definición técnica: Es energía no deseada que
se superpone a la señal de internet en el cable
coaxial o fibra.
Origen: Puede venir de conexiones defectuosas,
cables dañados, equipos eléctricos cercanos,
humedad en conectores, o saturación en el
nodo.
        </Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Nodo</Text>
            <Text style={styles.cardText}>
                El nodo es el punto de distribución que conecta
{/* múltiples hogares a la red principal. Su estado */}
afecta a todos los usuarios conectados. La
modulación y el tráfico del nodo indican si está
saturado o funcionando correctamente.
        </Text>
        </View>
        <Image 
                source={require('../../assets/images/diagnos.png')} 
                style={{marginBottom:20,width:"90%", marginLeft:20}} 
                resizeMode="contain"
              />
        <View style={styles.card}>
            <Text style={styles.cardTitle}>🔄 Relación entre TX, RX y SNR</Text>
            <Text style={styles.cardText}>
            Un TX alto suele ir acompañado de un RX bajo. Un SNR bajo puede explicar problemas aunque TX y RX estén en rango. Los tres deben analizarse juntos.
            </Text>
        </View>

    </ScrollView>

  )}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fa3131',
    padding: 15,
    paddingTop:55
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    fontSize: 13,
    flex: 1,
  },
});  