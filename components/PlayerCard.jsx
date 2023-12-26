import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerCard = ({ name, nationality, franchise, status, basePrice, finalPrice,playerStyle}) => {
  return (
    <View style={styles.container}>
   
      
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{nationality}</Text>
        <Text style={styles.team}>{franchise}</Text>
        <Text style={styles.age}>{`status: ${status}`}</Text>
        <Text style={styles.height}>{`Base Price: ${basePrice} lakh`}</Text>
        <Text style={styles.weight}>{`final Price: ${finalPrice} lakh`}</Text>
        <Text style={styles.weight}>{`Player Style: ${playerStyle}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
  team: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  age: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  height: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  weight: {
    fontSize: 14,
    color: '#888',
  },
});

export default PlayerCard;
