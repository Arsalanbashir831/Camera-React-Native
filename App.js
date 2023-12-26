import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
 import PlayerCard from './components/PlayerCard'
import PlayerScreen from './screens/PlayerScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
  
<NavigationContainer>
<Stack.Navigator>
       
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Player" component={PlayerScreen} />  
      
 </Stack.Navigator>
</NavigationContainer>
  

    
  )
}

export default App