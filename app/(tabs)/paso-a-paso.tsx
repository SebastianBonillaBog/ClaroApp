import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const pasos = [
  {
    id: '1',
    titulo: '🧾 Verificación inicial del cliente',
    accion: 'Consulta la cuenta del cliente en T&D. Verifica incidentes abiertos, visitas previas o reportes recientes.',
    objetivo: 'Confirmar si el cliente ya ha tenido soporte o historial de fallas.',
  },
  {
    id: '2',
    titulo: '🧠 Diagnóstico del cablemodem',
    accion: 'Abre la pantalla principal del módem y revisa estado ante el CMTS, nodo asignado, Up Time, firmware y velocidad contratada.',
    objetivo: 'Identificar estado general del módem y posibles reinicios.',
  },
  {
    id: '3',
    titulo: '📊 Revisión de niveles técnicos',
    accion: 'Analiza TX (38–48 dBmV), RX (-6 a +6 dBmV), SNR (>34 dB).',
    objetivo: 'Detectar ruido, baja potencia o señales fuera de rango.',
  },
  {
    id: '4',
    titulo: '🧑‍🤝‍🧑 Consulta de vecino',
    accion: 'Usa el panel de calidad de vecinos (30 vecinos). Compara TX, RX y SNR.',
    objetivo: 'Determinar si el problema es individual o colectivo.',
  },
  {
    id: '5',
    titulo: '📡 Verificación del nodo',
    accion: 'Consulta modulación en Cacti (QAM64 óptima). Revisa tráfico, resets y estado general.',
    objetivo: 'Confirmar estabilidad o saturación del nodo.',
  },
  {
    id: '6',
    titulo: '🧪 Pruebas adicionales',
    accion: 'Verifica dispositivos conectados, tráfico excesivo, reinicios o cables dañados.',
    objetivo: 'Identificar causas internas como interferencias WiFi o saturación.',
  },
  {
    id: '7',
    titulo: '🧠 Decisión final',
    accion: 'Si todo está en rango → recomendaciones. Si hay fallas → visita técnica o escalamiento.',
    objetivo: 'Dar solución clara al cliente o escalar el caso.',
  },
];

export default function PasoAPasoScreen() {
  return (
    <FlatList
      data={pasos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardSubtitle}>Acción:</Text>
          <Text style={styles.cardText}>{item.accion}</Text>
          <Text style={styles.cardSubtitle}>Objetivo:</Text>
          <Text style={styles.cardText}>{item.objetivo}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
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
    color: '#fa3131',
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },
  cardText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
  },
});