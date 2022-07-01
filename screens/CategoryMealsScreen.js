import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { MEALS } from '../data/dummy-data'
import MealItem from '../Components/MealItem'
import MealList from '../Components/MealList'

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam('categoryId')

  const specificMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))


  return (
<>
    {/* <View style={styles.categoriesScreen}>
      <FlatList data={specificMeals} renderItem={renderMealItem} keyExtractor={(item, index) => item.id} />
    </View> */}
    <MealList specificMeals={specificMeals} navigation={props.navigation} />
    </>

  )
}


CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id == catId)
  return {headerTitle: selectedCategory.title}
}



export default CategoryMealsScreen
