import React from 'react'
import {View, Button, FlatList, StyleSheet} from 'react-native'
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = (props) =>{

    const { specificMeals, navigation } = props ;

const favoriteMealsList = useSelector(state=>state.meals.favoriteMeals)    
    const renderMealItem = (itemData) => {
      const favMeals = favoriteMealsList.some(meal=>meal.id === itemData.item.id);
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            key={itemData.item.id}
            onSelect={()=>
            navigation.navigate('MealDetail',
             {
                id:itemData.item.id,
                title:itemData.item.title,
                isFav:favMeals
            })
            }
          />
        )
      }

    return(
        <>
        <View style={styles.list}>
      <FlatList data={specificMeals} renderItem={renderMealItem} keyExtractor={(item, index) => item.id} />
    </View>
        </>
    )
}

const styles = StyleSheet.create({
    tinyLogo:{
      height:200,
      width:200
  },
    list: {
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor:"blue"
    }
  })

export default MealList