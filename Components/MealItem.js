import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { MEALS } from '../data/dummy-data';

const {height} = Dimensions.get('window');

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity style={{flex:3}} onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.mealList}>{props.duration} min</Text>
            <Text style={styles.mealList} >{props.complexity.toUpperCase()}</Text>
            <Text style={styles.mealList} >{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{flex:1}}>
        {/* <FlatList data={MEALS} renderItem={(item,index)=>{
          return(
          
          )
        }}
        /> */}
        <ScrollView horizontal nestedScrollEnabled>
          {MEALS.map((data)=>{
            console.log(data.imageUrl,"url")
            return(
              <Image style={styles.tinyLogo} source={{uri:data.imageUrl}}/>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo:{
    height:200,
    width:200,
    marginHorizontal: 10
},
mealList:{
  marginRight:10
},
  mealItem: {
    height: height,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default MealItem;