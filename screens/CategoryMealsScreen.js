import React from 'react'
import {View, Text,Button, StyleSheet} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {

    const catId=props.navigation.getParam('categoryId')
    
    const specificMealData=CATEGORIES.find(cat=>cat.id==catId)
    console.log(catId,specificMealData,"data")
    return (
      <View style={styles.categoriesScreen}>
          <Text>{specificMealData.title}</Text>
          <Button title="Go to Details" onPress={()=>{
              props.navigation.navigate({
                routeName:'MealDetail'
              })
          }}
          />
      </View>
    )
}

const styles=StyleSheet.create({
categoriesScreen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue"
}
})

export default CategoryMealsScreen
