import { Platform } from 'react-native'
import { colors } from '../colors/Colors'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import MealDetailScreen from '../screens/MealDetailScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen'

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
    MealDetail:MealDetailScreen,

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==="android" ? colors.primaryColor : "#fff"
        },
        headerTintColor:Platform.OS ==="android" ? "#fff" : colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);