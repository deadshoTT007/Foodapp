import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const MealDetailScreen = () => {


    return (
      <View style={styles.categoriesScreen}>
          <Text>The Meal Detail Screen !</Text>
         
      </View>
    )
}

const styles=StyleSheet.create({
categoriesScreen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red"
}
})

export default MealDetailScreen
