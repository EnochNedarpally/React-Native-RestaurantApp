import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'

const RestaurantItem = ({rest,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant",{id:rest.id})}>
        <SafeAreaView style={styles.contaier}>
          <Image style={styles.image} source={{uri:rest.image_url}} />
          <View style={styles.infoContainer}>
              <Text style={styles.title}>{rest.name}</Text>
              <View style={styles.info}>
                  <Text>{rest.rating}</Text>
                  <Text style={styles.price}>{rest.price}</Text>
              </View>
          </View>
        </SafeAreaView>
    </TouchableOpacity>
  )
}

export default withNavigation(RestaurantItem);

const styles = StyleSheet.create({
    contaier:{
        backgroundColor:'white',
        alignSelf:'stretch',
        flexDirection:'row',
        marginBottom:14,
        gap:14,
        borderRadius: 500,
        shadowOffset: { width: 1, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        elevation: 3,
        padding:10,
    },
    image:{
       width:70,
       height:70 ,
       resizeMode:'contain',
       borderRadius:50,
       marginRight:16,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
      },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    info:{
        flexDirection:'row',
      
    },
    rating:{
        fontWeight:'bold',
    },
    price:{
        color:'gold',
        marginLeft:16,
        fontWeight:'bold'
    }
})