import React from 'react'
import { Text } from 'react-native';
import { Platform } from 'react-native'
import { colors } from '../colors/Colors'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import MealDetailScreen from '../screens/MealDetailScreen'
import FiltersScreen from '../screens/FiltersScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import FavoritesScreen from '../screens/FavoritesScreen'

import CustomHeaderButton from '../Components/HeaderButton'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'

const defaultNavigationOptionsObject={
    headerStyle:{
        backgroundColor:Platform.OS==="android" ? colors.primaryColor : "#fff"
    },
    headerTintColor:Platform.OS ==="android" ? "#fff" : colors.primaryColor,
}

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
    defaultNavigationOptions: defaultNavigationOptionsObject
});

const FavNavigator = createStackNavigator({
    Favorites:{
        screen:FavoritesScreen,
        // navigationOptions:{
        //     headerTitle:"Your Favorites"
        // }
    },
    MealDetail:MealDetailScreen,
},
{
    defaultNavigationOptions: defaultNavigationOptionsObject
}
)

const tabConfig={
    Meals: {
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
               return( <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} /> )
            },
            tabBarColor:colors.primaryColor,
            tabBarLabel:<Text>Kera</Text>
        },
      
    },
    Favorites:{
        screen:FavNavigator,
        navigationOptions:{
            // tabBarLabel:'Fav',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:colors.primaryColor,
        }
    },
}



const MealsFavTabNavigator = createMaterialBottomTabNavigator(tabConfig,{
    activeTintColor:"#fff",
    shifting:false,
    barStyle:{
        backgroundColor:colors.primaryColor
    }
}) 


const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
})


export default createAppContainer(MealsFavTabNavigator);