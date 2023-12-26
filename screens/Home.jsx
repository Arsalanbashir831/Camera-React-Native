import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Players from '../components/Players';
import usePlayers from '../CustomHooks/Players';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
  const { fetchAllPlayers } = usePlayers();
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllPlayers();
        setPlayers(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("Player",{data : item})} >
    <Players basePrice={item.basePrice} playerStyle={item.playerStyle} name={item.name} />
    </TouchableOpacity>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filteredPlayers = players.filter(
      (player) =>
        player?.name.toLowerCase().includes(query.toLowerCase()) ||
        player?.playerStyle.toLowerCase().includes(query.toLowerCase())
      
    );
    setPlayers(filteredPlayers);
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search players..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Assuming you have an 'id' property in your player objects
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default Home;
