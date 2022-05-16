
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Homescreen from "./src/screens/Homescreen";
import 'react-native-gesture-handler';
import RestaurantScreen from "./src/screens/RestaurantScreen";


  const navigator=createStackNavigator({
    Home:Homescreen,
    Restaurant:RestaurantScreen,
  },{
    initialRouteName:"Home",
    defaultNavigationOptions:{
      headerShown:false
    },
  })
 
export default createAppContainer(navigator)

