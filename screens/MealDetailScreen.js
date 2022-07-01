import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'

const MealDetailScreen = (props) => {

    console.log([props,"mealProps"])

    const mealId =  props.navigation.state.params.id

    const specificMeals = MEALS.find(meal=>meal.id===mealId)




    return (
        <View style={styles.categoriesScreen}>
            <Text>{specificMeals.title}</Text>
            <Button 
            title="Go Back to Categories"
            onPress={()=>props.navigation.popToTop()}
            />
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId =  navigationData.navigation.state.params.id;
    const selectedMeal = MEALS.find(meal=>meal.id===mealId)
    return {
        headerTitle:selectedMeal.title,
        headerRight:( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Fav" iconName="ios-star" onPress={()=>console.log("fav")} />
        </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    categoriesScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red"
    }
})

export default MealDetailScreen
