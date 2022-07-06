import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MealList from '../Components/MealList'
import { useSelector } from 'react-redux'

const FavoritesScreen = ( props ) => {

    // const selectedMeals = useSelector(state=>state.meals.meals)
    // const favorites = selectedMeals.filter(meal=>meal.id === 'm1' || meal.id === 'm2')
    const favMeals = useSelector(state=>state.meals.favoriteMeals)

    if ( favMeals.length === 0 || !favMeals ){
        return(
            <View>
                <Text>No Favorites Selected</Text>
            </View>
        )
    }

    return (
      <MealList specificMeals={favMeals} navigation={props.navigation}  />
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
