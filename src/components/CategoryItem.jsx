import { Text, View, Image,StyleSheet,TouchableOpacity } from "react-native";

export default function CategoryItem({ name, img,index,active,handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={[styles.container, index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },active ? {backgroundColor:'rgb(241,186,87)'}:{backgroundColor:'white'}]}>
          <View style={[styles.imageContainer]}>
            <Image style={styles.image} source={img} />
          </View>
          <Text style={styles.header}>{name}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    marginVertical:20,
    borderRadius: 500,
    backgroundColor:'white',
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
    marginBottom: 7,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
