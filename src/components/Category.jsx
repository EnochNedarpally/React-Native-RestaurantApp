import { FlatList,View } from "react-native";
import CategoryItem from "./CategoryItem";

const Category = ({term,setTerm,categories}) => {
  return (
    <View>
    <FlatList
    data={categories}
    keyExtractor={(item) => item.name}
    renderItem={({ item,index }) => {
      return (
        <CategoryItem
         name={item.name} img={item.img} index={index}
         handlePress={()=>setTerm(item.name)}
         active={term===item.name}
        />
      );
    }}
    horizontal
  showsHorizontalScrollIndicator={false}
  />
  </View>
  )
}

export default Category