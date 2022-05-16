import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container: {
      marginTop: 60,
      marginHorizontal: 25,
    },
    lightHeader: {
      fontSize: 30,
    },
    boldHeader: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
export default function Header() {
  return (
    <View style={style.container}>
        <Text style={style.lightHeader}>Grab your</Text>
        <Text style={style.boldHeader}>delicious meals</Text>
    </View>
  );
};
