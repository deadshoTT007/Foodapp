import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppLoading } from 'expo'
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsNavigator from './navigation/MealsNavigator';
import Navigator from './routes/drawer';
import { enableScreens } from 'react-native-screens'
// const fetchFonts = () =>{
//   return Font.loadAsync({
//        'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
//        'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
//    })
// }

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function HomeScreen({ navigation }) {
  return (
  <Tab.Navigator>
      //Put your Tab screens here.
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      {/* <Tab.Screen name="Feed" component={Feed} /> */}
    </Tab.Navigator>

  );
}

enableScreens()

const App = () =>  {

  const [ fontLoaded, setFontLoaded ] = useState(false)

// if(!fontLoaded){
//     return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontLoaded(true)} />
// }


  return (
    <>
    {/* <Navigator/> */}
   <MealsNavigator/>
   {/* <NavigationContainer>
      <Drawer.Navigator initialRouteName="Categories" >
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>


    </NavigationContainer> */}
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;

