import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Restaurant from '../components/Restaurant';
import { StatusBar } from 'expo-status-bar';

const Homescreen = () => {
    const [term, setTerm] = useState("Burger");
    const commonCategories =[
      {
        name: "Burger",
        img: require("../assets/images/burger.png"),
      },
      {
        name: "Pizza",
        img: require("../assets/images/pizza.png"),
      },
      {
        name: "Drinks",
        img: require("../assets/images/smoothies.png"),
      },
      {
        name: "Steak",
        img: require("../assets/images/steak.png"),
      },
      {
        name: "Pasta",
        img: require("../assets/images/pasta.png"),
      },
      {
        name: "Desserts",
        img: require("../assets/images/cake.png"),
      },
    ];
  return (
    <View>
      <Header />
      <Search setTerm={setTerm}/>
      <Category categories={commonCategories} term={term} setTerm={setTerm} />
      <Restaurant term={term}/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})