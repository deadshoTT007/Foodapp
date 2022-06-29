import React from 'react'
import {View, Text,Button, StyleSheet} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {

    const catId=props.navigation.getParam('categoryId')
    
    const specificMealData=CATEGORIES.find(cat=>cat.id==catId)
 
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


CategoryMealsScreen.navigationOptions = navigationData => {
  console.log(navigationData,"navData")
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat=> cat.id == catId)
  return{
    headerTitle:selectedCategory.title
  }
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
