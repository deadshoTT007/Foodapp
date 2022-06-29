import React from 'react'
import {View,FlatList, Text,Button, StyleSheet, TouchableOpacity} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { colors } from '../colors/Colors'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity style={styles.gridItem} 
            onPress={()=>props.navigation.navigate({
                routeName:"CategoryMeals",
                params:{
                    categoryId:itemData.item.id
                }
            }
                )}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
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
gridItem:{
    flex:1,
    margin:20,
    height:120
}
})

CategoriesScreen.navigationOptions={
    headerTitle:"Meal Categories",
    headerStyle:{
        backgroundColor:colors.primaryColor
    }
}




export default CategoriesScreen
