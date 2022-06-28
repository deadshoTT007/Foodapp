import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FavoritesScreen = () => {
    return (
      <View style={styles.categoriesScreen}>
          <Text>The Favorites Screen !</Text>
      </View>
    )
}

const styles=StyleSheet.create({
categoriesScreen:{
    flex:1,
    justifyContent:"center",
    justifyContent:"center",
    backgroundColor:"red"
}
})

export default FavoritesScreen
