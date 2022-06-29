import React from 'react'
import {View,FlatList, Text,Button, StyleSheet, TouchableOpacity} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { colors } from '../colors/Colors'
import CategoryGridTile from '../Components/CategoryGridTile'
const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return(
          <CategoryGridTile color={itemData.item.color} title={itemData.item.title} id={itemData.item.id} onSelect={()=>props.navigation.navigate({
            routeName:"CategoryMeals",
            params:{
                categoryId:itemData.item.id
            }
        }
            )} />
        )
    }

    return (
      <FlatList 
      keyExtractor={(item)=>item.id}
      data={CATEGORIES} 
      renderItem={renderGridItem}
      contentContainerStyle={styles.flatlist}

      numColumns={2}/>
    )
}




const styles=StyleSheet.create({
    flatlist:{
        // flex:1,
        // alignItems:"center",
        // justifyContent:"center"
        // flexGrow:1
    },
categoriesScreen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green"
},

})

CategoriesScreen.navigationOptions={
    headerTitle:"Meal Categories",
    headerStyle:{
        backgroundColor:colors.primaryColor
    }
}




export default CategoriesScreen
