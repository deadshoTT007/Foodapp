import React from 'react'
import { TouchableOpacity, View, Text, Platform,Image, Title, StyleSheet, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = ( props ) => {
    console.log(props,"props")
    let TouchableComp = TouchableOpacity

    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback
    }

    const { title, id, onSelect, color } = props;

    return (
        <View  style={styles.gridItem} >
        <TouchableComp style={{flex:1}}
        onPress={onSelect}>
        <View style={{...styles.categoryItem,...{backgroundColor:color}}} >
            <Text numberOfLines={2} style={styles.categoryHeader}>{title}</Text>
        </View>
        </TouchableComp>
        </View>
    )
}

const styles = StyleSheet.create({
   
    gridItem:{
        flex:1,
        margin:20,
        height:120,
        borderRadius:10,
        elevation:6,
        overflow:"hidden"
    },
    categoryItem:{
        alignItems:"flex-end",
        justifyContent:"flex-end",
        flex:1,
        borderRadius:10,
        padding:15
        // overflow:"hidden"
        // shadowColor:"#000",
        // shadowOpacity:0.26,
        // shadowOffset: { width:0, height:2 },
    },
    categoryHeader:{
        fontSize:18
    }
})

export default CategoryGridTile
