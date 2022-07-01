import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MealList from '../Components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = ( props ) => {
    const favorites = MEALS.filter(meal=>meal.id === 'm1' || meal.id === 'm2')
    return (
      <MealList specificMeals={favorites} navigation={props.navigation}  />
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

FavoritesScreen.navigationOptions = navigationData=> {
    return{
        headerTitle:"Your Favorites"
    }
}

export default FavoritesScreen
