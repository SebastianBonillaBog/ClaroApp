import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Banner rojo superior */}
     <View style={styles.header}>
      <LinearGradient
      colors={['#fa1313ff', '#f18329ff']} // 🔹 gradiente de rojo claro a rojo oscuro
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
    >
      <View style={styles.leftSection}>
        <MaterialCommunityIcons name="menu" size={30} color="black" />
        <Image 
          source={require('../../assets/images/logo-claro.png')} 
          style={styles.logoClaro} 
          resizeMode="contain"
      />
      </View>
      {/* Texto e íconos a la derecha */}
      < View style={styles.rightSection}>
        <Ionicons name="location-sharp" size={30} color="black" style={{marginRight:12}} />
        <Text style={styles.headerText}>Bogotá</Text>  
        <MaterialCommunityIcons name="bell" size={30} color="black" style={{marginRight:12}} />
      </View>
    </LinearGradient>  
  </View>

      {/* Barra de búsqueda */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="#888" />
        <TextInput 
          placeholder="¿Qué estás buscando?" 
          style={styles.input} 
        />
      </View>
      {/* banner */}
      <View style={styles.banner}>
        <Image 
          source={require('../../assets/images/banner-rojo.png')} 
          style={styles.bannerRojo} 
          resizeMode="contain"
      />
      </View>
      {/* Card central */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Atención al cliente y soporte</Text>
        <View style={styles.optionsRow}>
          <View style={styles.option}>
            <Ionicons name="speedometer-outline" size={24} color="black" />
            <Text style={styles.optionText}>Medición de red</Text>
          </View>
          <View style={styles.option}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text style={styles.optionText}>Visitas técnicas</Text>
          </View>
          <View style={styles.option}>
            <Ionicons name="logo-whatsapp" size={24} color="black" />
            <Text style={styles.optionText}>WhatsApp</Text>
          </View>
          <View style={styles.option}>
            <Ionicons name="options" size={24} color="black" />
            <Text style={styles.optionText}>Ver más</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardTitle}>Documentacion Redes</Text>
      <View style={styles.optionsRow}>
        
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('paso-a-paso')}>
          <Ionicons name="footsteps-sharp" size={24} color="black" />
          <Text style={styles.optionText}>Paso a Paso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('calidad-senal')}>
          <MaterialIcons name="signal-wifi-0-bar" size={24} color="black" />
          <Text style={styles.optionText}>Calidad señal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('red-domestica')}>
          <MaterialCommunityIcons name="web-sync" size={24} color="black" />
          <Text style={styles.optionText}>Red doméstica</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('soporte-tecnico')}>
          <MaterialCommunityIcons name="account-wrench" size={24} color="black" />
          <Text style={styles.optionText}>Soporte Hogar</Text>
        </TouchableOpacity>

      </View>
    </View>

    {/* banner */}
      <View style={styles.banner}>
        <Image 
          source={require('../../assets/images/banner-2.png')} 
          style={styles.banner2} 
          resizeMode="contain"
      />
      </View>


      {/* Banner rojo inferior */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Claro - Curso de Redes</Text>
      </View>
    </View>
  );
}
{/*-----------------------------------------------------------------*/}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    backgroundColor: 'red', 
    width: '100%', 
    paddingVertical: 0, 
    flexDirection:"row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  headerText: { color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight:12
  },
  leftSection:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20
  },
  rightSection:{
      flexDirection:"row",
      marginTop: 20
  },
  logoClaro:{
    width: 80, height: 80,
    padding: 0,
    marginLeft: 10
  },
  bannerRojo:{
    width:"90%",
    margin: 10,
  },
  banner2:{
    width:"90%"
  },
  banner:{
    justifyContent:"center",
    flexDirection:"row"
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 10,
  },
  icon: { width: 20, height: 20, tintColor: '#888' },
  input: { flex: 1, padding: 10, fontSize: 16 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  option: { alignItems: 'center', flex: 1 },
  optionIcon: { width: 40, height: 40, marginBottom: 5 },
  optionText: { fontSize: 14, textAlign: 'center' },

  footer: { backgroundColor: 'red', width: '100%', paddingVertical: 10, marginTop: 'auto' },
  footerText: { color: 'white', fontSize: 14, textAlign: 'center' },
});