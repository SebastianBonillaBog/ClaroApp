import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const options = [
    { label: 'Datos personales', icon: 'person-outline' },
    { label: 'Cuenta', icon: 'settings-outline' },
    { label: 'Seguridad', icon: 'lock-closed-outline' },
    { label: 'Notificaciones', icon: 'notifications-outline' },
    { label: 'Privacidad', icon: 'shield-checkmark-outline' },
    { label: 'Ayuda', icon: 'help-circle-outline' },
    { label: 'Cerrar sesión', icon: 'exit-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Aquí puedes poner la foto real
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Juan Sebastian</Text>
      </View>

      {/* Opciones */}
      <View style={styles.optionsSection}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Ionicons name={item.icon} size={22} color="#333" style={styles.optionIcon} />
            <Text style={styles.optionText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  optionsSection: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});