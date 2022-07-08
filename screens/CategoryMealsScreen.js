import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
// import { MEALS } from '../data/dummy-data'
import MealItem from '../Components/MealItem'
import MealList from '../Components/MealList'
import { useSelector } from 'react-redux'

const CategoryMealsScreen = (props) => {

  // const catId = props.navigation.getParam('categoryId')
  // const catId = props.route.params.item
const selectedMeals = useSelector(state=>state.meals.filteredMeals)

  const catId= props.navigation.state.params.id
  console.log(catId,"cat")

  const specificMeals = selectedMeals.filter(meal => meal.categoryIds.includes(catId))
  console.log(specificMeals,"spec")

  if ( specificMeals.length === 0 ) {
    return (
      <View>
        <Text>No Meals Found !!!</Text>
      </View>
    )
  }


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
  const catId = navigationData.navigation.state.params.id
  // console.log(catId,"nav")
  // console.log(catId,"catId")
  const selectedCategory = CATEGORIES.find(cat => cat.id == catId)
  return {headerTitle: selectedCategory.title}
}



export default CategoryMealsScreen
