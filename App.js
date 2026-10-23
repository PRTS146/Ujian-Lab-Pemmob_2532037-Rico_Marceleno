import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import DetailPopup from './src/components/DetailPopup';

// Q2: static dataset, defined outside the main component
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Rico Marceleno', prodi: 'Teknologi Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [showTasks, setShowTasks] = useState(false); // toggle InfoCards

  // Popup state: null = hidden, otherwise holds the selected task
  const [selectedTask, setSelectedTask] = useState(null);

  const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const openDetail = (title, status) => setSelectedTask({ title, status });
  const closeDetail = () => setSelectedTask(null);

  return (
    <View style={styles.container}>
      {/* Question 1: Student Info + Toggle + InfoCards */}
      <Text style={styles.sectionTitle}>Daftar Tugas</Text>

      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Rico Marceleno</Text>
        <Text style={styles.profileText}>NPM: 2532037</Text>
        <Text style={styles.profileText}>Prodi: Teknologi Informasi</Text>

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => setShowTasks(!showTasks)}
        >
          <Text style={styles.detailButtonText}>
            {showTasks ? 'Sembunyikan Detail' : 'Lihat Detail'}
          </Text>
        </TouchableOpacity>
      </View>

      {showTasks && (
        <View>
          <InfoCard
            title="Laporan Praktikum Jobsheet 04"
            status="selesai"
            onPress={() => openDetail('Laporan Praktikum Jobsheet 04', 'selesai')}
          />
          <InfoCard
            title="Tugas Navigasi Expo Router"
            status="proses"
            onPress={() => openDetail('Tugas Navigasi Expo Router', 'proses')}
          />
        </View>
      )}

      {/* Centered popup (separate component) */}
      <DetailPopup
        visible={selectedTask !== null}
        title={selectedTask?.title}
        status={selectedTask?.status}
        onClose={closeDetail}
      />

      {/* Question 2: real-time search with FlatList */}
      <Text style={styles.sectionTitle}>Direktori Mahasiswa</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentRow}>
            <Text style={styles.studentName}>{item.nama}</Text>
            <Text style={styles.studentProdi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', paddingTop: 50, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: '#0f172a', marginBottom: 10, marginTop: 6 },
  profileCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12,
  },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginBottom: 4 },
  profileText: { fontSize: 13, color: '#475569', marginBottom: 2 },
  detailButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  detailButtonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 13 },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  studentRow: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 8,
  },
  studentName: { fontSize: 14, fontWeight: 'bold', color: '#0f172a' },
  studentProdi: { fontSize: 12, color: '#64748b', marginTop: 2 },
  empty: { textAlign: 'center', color: '#94a3b8', marginTop: 20, fontSize: 14 },
});