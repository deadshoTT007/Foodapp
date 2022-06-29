import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { MEALS } from '../data/dummy-data'
import MealItem from '../Components/MealItem'

const CategoryMealsScreen = (props) => {

  const catId = props.navigation.getParam('categoryId')

  const specificMeals = MEALS.filter(meal => meal.categoryIds.includes(catId))

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        key={itemData.item.id}
        onSelect={()=>
        props.navigation.navigate({routeName:'MealDetail',
         params:{
            mealId:itemData.item.id
        }})
        }
      />
    )
  }


  return (

    <View style={styles.categoriesScreen}>
      <FlatList style={{width:"100%"}} data={specificMeals} renderItem={renderMealItem} keyExtractor={(item, index) => item.id} />
    </View>

  )
}


CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id == catId)
  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"blue"
  }
})

export default CategoryMealsScreen
