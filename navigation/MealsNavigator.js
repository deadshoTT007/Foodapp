import React from 'react'
import { Platform } from 'react-native'
import { colors } from '../colors/Colors'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import MealDetailScreen from '../screens/MealDetailScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import FavoritesScreen from '../screens/FavoritesScreen'

import CustomHeaderButton from '../Components/HeaderButton'

const MealsNavigator=createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:"Meals Categories",
        }
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
       
    },
    MealDetail:{
        screen:MealDetailScreen,
        navigationOptions:{
            headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Fav" iconName="ios-star" onPress={()=>console.log("fav")} />
            </HeaderButtons>
        }
       
    },

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==="android" ? colors.primaryColor : "#fff"
        },
        headerTintColor:Platform.OS ==="android" ? "#fff" : colors.primaryColor
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
               return( <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} /> )
            }
        }
    },
    Favorites:{
        screen:FavoritesScreen,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    },
},{
    tabBarOptions:{
        activeTintColor:colors.accentColor,
    }
})

export default createAppContainer(MealsNavigator);