import { StyleSheet, Text, View,ActivityIndicator,FlatList,SafeAreaView } from 'react-native'
import React from 'react'
import useRestaurant from '../hooks/useRestaurant'
import { useEffect } from 'react'
import RestaurantItem from './RestaurantItem'

const Restaurant = ({term}) => {
   const [{data,loading,error},searchRestaurant]=useRestaurant();
   useEffect(()=>{
     searchRestaurant({term});
   },[term])

  
  if(loading) return ( <ActivityIndicator  size="large" marginVertical={30} color='rgb(241,186,87)' />)
  if(error) return(<View style={styles.container}>
    <Text style={styles.text}>Something Went Wrong!!!</Text>
  </View>)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Restaurants</Text>
      <SafeAreaView>
      <FlatList
      data={data}
      keyExtractor={item=>item.id}
      renderItem={({ item }) => {
        
        return (
          <RestaurantItem
           rest={item}
          />
        );
      }}
      />
      </SafeAreaView>
    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({
  container:{
    margin:25,
    marginBottom:10,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
  }
})