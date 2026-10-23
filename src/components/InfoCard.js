import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isDone = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={[styles.badge, isDone ? styles.badgeDone : styles.badgeProgress]}>
        {status}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: { fontSize: 15, fontWeight: 'bold', color: '#0f172a', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden',
    color: '#ffffff',
    marginBottom: 10,
  },
  badgeDone: { backgroundColor: '#16a34a' },
  badgeProgress: { backgroundColor: '#f97316' },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 13 },
});
