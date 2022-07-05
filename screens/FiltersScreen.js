import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { colors } from '../colors/Colors'
import CustomHeaderButton from '../Components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const FilterSwitch = (props) =>{

    const { label, value, onChange } = props;

    return(
        <View style={styles.filterContainer}>
        <Text style={styles.mainText}>{label}</Text>
        <Switch
         style={styles.switch}
           value={value} 
           thumbColor={colors.primaryColor}
           onValueChange={onChange}
           trackColor={{ true:colors.primaryColor }}
           />
    </View>
    )
}

const FiltersScreen = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [ isLactoseFree, setIsLactoseFree ] = useState(false)
    const [ isVeganFree, setIsVeganFree ] = useState(false)
    const [isVegetarianFree, setIsVegetarianFree ] = useState(false)

    return (
        <View style={styles.screen}>
            <Text style={styles.title} >Filters Screen</Text>
           <FilterSwitch label="Gluten Free" value={isGlutenFree} onChange={value=>setIsGlutenFree(value)} />
           <FilterSwitch label="Lactose Free" value={isLactoseFree} onChange={value=>setIsLactoseFree(value)} />
           <FilterSwitch label="Vegan Free" value={isVeganFree} onChange={value=>setIsVeganFree(value)} />
           <FilterSwitch label="Vegetarian" value={isVegetarianFree} onChange={value=>setIsVegetarianFree(value)} />
        </View>
    )
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        alignItems:"center"
    },
    title:{
        fontSize:22,
        marginBottom:20,
        marginTop:20
    },
    filterContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        width:"80%",
    },
    mainText:{
        fontSize:16,
        marginRight:10
    },
   
})

FiltersScreen.navigationOptions = navigationData => {
    console.log(navigationData,"navData")
    return {
        headerTitle:" Filter Meals ",
        // headerRight:(
        //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //         <Item
        //         title="save"
        //         iconName=""
        //         // onPress={()=>{
        //         // navigationData.navigation.
        //         // }}
        //         />

        //     </HeaderButtons>
        // )
    }
}



export default FiltersScreen
