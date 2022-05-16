import { StyleSheet, Text, SafeAreaView,Dimensions ,FlatList,Image} from 'react-native'
import React from 'react'
import useSelectedRestaurant from '../hooks/useSelectedRestaurant'
import { useEffect } from 'react'

const RestaurantScreen = ({navigation}) => {
  const [{data,loading,error},searchSelectedRestaurant] = useSelectedRestaurant();
  const id = navigation.getParam("id");
  useEffect(()=>{
    searchSelectedRestaurant(id);
  },[])
  const dimensions=Dimensions.get("window")
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  if(loading) return   <Text>Loading...!</Text>
  if(error) return   <Text>Something Went Wrong...!</Text>
  return (
    <SafeAreaView >
      {data && (
        <FlatList 
        data={data.photos}
        key={(photo)=>photo}
        renderItem={({item})=>(
          <Image source={{uri:item}} style={{width:imageWidth,height:imageHeight}} />
        )}
        />
      )}
    </SafeAreaView>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})