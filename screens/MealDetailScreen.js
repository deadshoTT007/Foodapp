import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/HeaderButton'
import { colors } from '../colors/Colors'

const MealDetailScreen = (props) => {

    console.log([props,"mealProps"])

    const mealId =  props.navigation.state.params.id

    const specificMeals = MEALS.find(meal=>meal.id===mealId)

    console.log(specificMeals,"url")




    return (
        <ScrollView>
            <View style={styles.mealContainer}>
            <Image style={styles.mealImage} source={{ uri:specificMeals.imageUrl }} />
        <View style={styles.mealItemContainer}>
            <Text style={styles.mealItem}>{specificMeals.duration}</Text>
            <Text style={styles.mealItem}>{specificMeals.complexity}</Text>
            <Text style={styles.mealItem}>{specificMeals.affordability}</Text>
        </View>
        <View style={styles.mealContent}>
            <Text style={styles.mainTitle}>Ingredients</Text>
        {specificMeals.ingredients.map((ing,index)=>{
            return (
                <Text style={styles.contentText} key={index}># {ing}</Text>
            )
        })}
        </View>
        <View style={styles.mealContent}>
            <Text style={styles.mainTitle}>Steps</Text>
        {specificMeals.steps.map((ing,index)=>{
            return (
                <Text style={styles.contentText} key={index}># {ing}</Text>
            )
        })}
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoriesScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red"
    },
    mealImage:{
        width:"100%",
        height:300,
        borderRadius:16
    },
    mealContainer:{
        margin:20
    },
    mealItemContainer:{
        marginTop:10,
        flexDirection:"row",
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:colors.accentColor
    },
    mealItem:{
        marginHorizontal:10,
        // marginTop:10,
        color:"#fff",
    },
    mealContent:{
        marginTop:20
    },
    contentText:{
        
    },
    mainTitle:{
        color:colors.primaryColor,
        fontSize:22,
        marginBottom:10
    }
})



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


export default MealDetailScreen
