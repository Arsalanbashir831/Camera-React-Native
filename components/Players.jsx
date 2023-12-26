import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Players = ({ basePrice, playerStyle, name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        {/* Add an avatar or image here if you have one */}
        <Text style={styles.avatarText}>{name}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.nameText}>{playerStyle}</Text>
        <Text style={styles.basePriceText}>Base Price: {basePrice === null?0:basePrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  avatarContainer: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  basePriceText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Players;
