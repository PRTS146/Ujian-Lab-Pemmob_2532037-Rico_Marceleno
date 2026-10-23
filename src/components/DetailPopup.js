import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default function DetailPopup({ visible, title, status, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          {/* Inner wrapper stops taps on the card from closing the popup */}
          <TouchableWithoutFeedback>
            <View style={styles.popup}>
              <Text style={styles.popupTitle}>Detail Tugas</Text>

              <Text style={styles.popupLabel}>Judul</Text>
              <Text style={styles.popupValue}>{title}</Text>

              <Text style={styles.popupLabel}>Status</Text>
              <View
                style={[
                  styles.badge,
                  status === 'selesai' ? styles.badgeDone : styles.badgeProgress,
                ]}
              >
                <Text style={styles.badgeText}>{status}</Text>
              </View>

              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  popup: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  popupTitle: { fontSize: 18, fontWeight: 'bold', color: '#0f172a', marginBottom: 14 },
  popupLabel: { fontSize: 12, color: '#64748b', marginTop: 8 },
  popupValue: { fontSize: 15, color: '#0f172a', fontWeight: '600', marginTop: 2 },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginTop: 4,
  },
  badgeDone: { backgroundColor: '#16a34a' },
  badgeProgress: { backgroundColor: '#f59e0b' },
  badgeText: { color: '#ffffff', fontSize: 12, fontWeight: 'bold', textTransform: 'capitalize' },
  closeButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
});