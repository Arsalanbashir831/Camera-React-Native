import { View, Text } from 'react-native'
import React from 'react'
import PlayerCard from '../components/PlayerCard'

const PlayerScreen = ({route}) => {
    const {data} = route.params

  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }}>
      <PlayerCard
        name={data?.name}
        nationality={data?.nationality}
        franchise={data?.franchise}
        status={data?.status}
        basePrice={data.basePrice}
        finalPrice={data?.finalPrice}
        playerStyle={data?.playerStyle}
      />
    </View>
  )
}

export default PlayerScreen