import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { getDatabase ,ref,set,get,child } from "firebase/database";
import { app } from '../FirebaseConfig';

const usePlayers = () => {

    const db = getDatabase(app);
    const fetchAllPlayers = async () => {
        const dbRef = ref(db);
      
        try {
          const snapshot = await get(dbRef);
          if (snapshot.exists()) {
        //   console.log(snapshot.val());
            return snapshot.val();
          } else {
            console.log("No data available");
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };


    return {fetchAllPlayers}
}

export default usePlayers