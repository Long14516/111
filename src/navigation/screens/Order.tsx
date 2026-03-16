import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
export function Order() {
  return (
    <SafeAreaView style={styles.container}>
<ScrollView showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <Feather name="trash-2" size={22} color="black" />
      </View>

      {/* Burger Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/buger1.png")}
          style={styles.mainImage}
        />

        <View style={styles.discount}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Small Images */}
      <View style={styles.smallImages}>
        <Image source={require("../../assets/ba.png")} style={styles.smallImg}/>

      </View>

      {/* Content */}
      <View style={styles.content}>

        {/* Title */}
       

      <View style={styles.titleRow}>

<View>
<Text style={styles.foodTitle}>BURGER</Text>

<View style={styles.ratingRow}>
  <AntDesign name="star" size={16} color="#FFD700"/>
  <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
</View>

</View>

<View>
<Text style={styles.price}>$28</Text>

<View style={styles.qtyRow}>
  <TouchableOpacity style={styles.circleBtn}>
    <AntDesign name="minus" size={16}/>
  </TouchableOpacity>

  <Text style={styles.qty}>02</Text>

  <TouchableOpacity style={styles.circleBtn}>
    <AntDesign name="plus" size={16}/>
  </TouchableOpacity>
</View>

</View>

</View>

        {/* Delivery */}
        <View style={styles.deliveryBox}>
          <Feather name="map-pin" size={20}/>
          <View>
            <Text style={styles.deliveryText}>Delivery Address</Text>
            <Text>Dhaka, Bangladesh</Text>
          </View>
        </View>

        {/* Payment */}
        <View style={styles.paymentRow}>
          <View style={styles.paymentLeft}>
            <FontAwesome name="credit-card" size={20}/>
            <Text style={styles.paymentText}>Payment Method</Text>
          </View>

          <TouchableOpacity style={styles.changeBtn}>
            <Text style={{color:"#4A43EC"}}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>

          <View style={styles.row}>
            <Text>Subtotal (2)</Text>
            <Text>$56</Text>
          </View>

          <View style={styles.row}>
            <Text>Delivery Fee</Text>
            <Text>$6.20</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.totalText}>Payable Total</Text>
            <Text style={styles.totalPrice}>$62.2</Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>

      </View>
 </ScrollView>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F3F3F3"
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:30,
backgroundColor:'#FEFFBF',
},

headerTitle:{
fontSize:18,
fontWeight:"bold"
},

imageContainer:{
alignItems:"center"
},

mainImage:{
width:300,
height:200,
borderRadius:20
},

discount:{
position:"absolute",
left:30,
top:20,
backgroundColor:"#5A5BFF",
padding:10,
borderRadius:20
},

discountText:{
color:"white",
fontWeight:"bold"
},

smallImages:{
flexDirection:"row",
justifyContent:"center",
marginTop:10
},

smallImg:{
borderRadius:10,
marginHorizontal:5
},

content:{
backgroundColor:"white",
marginTop:20,
borderTopLeftRadius:30,
borderTopRightRadius:30,
padding:20
},

titleRow:{
flexDirection:"row",
justifyContent:"space-between"
},

foodTitle:{
fontSize:28,
fontWeight:"bold"
},

price:{
fontSize:22,
color:"#5A5BFF"
},

ratingRow:{
flexDirection:"row",
marginTop:5
},

ratingText:{
marginLeft:5
},

qtyRow:{
flexDirection:"row",
alignItems:"center",
marginTop:15
},

circleBtn:{
width:30,
height:30,
borderRadius:15,
backgroundColor:"#EEE",
justifyContent:"center",
alignItems:"center"
},

qty:{
marginHorizontal:15,
fontSize:18
},

deliveryBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#CFE8DD",
padding:15,
borderRadius:12,
marginTop:20
},

deliveryText:{
color:"gray"
},

paymentRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:20
},

paymentLeft:{
flexDirection:"row",
alignItems:"center"
},

paymentText:{
marginLeft:10
},

changeBtn:{
borderWidth:1,
borderColor:"#4A43EC",
paddingHorizontal:15,
paddingVertical:5,
borderRadius:20
},

summary:{
marginTop:20
},

summaryTitle:{
fontWeight:"bold",
marginBottom:10
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:3
},

totalText:{
fontWeight:"bold"
},

totalPrice:{
color:"#4A43EC",
fontWeight:"bold"
},

button:{
backgroundColor:"#4A43EC",
padding:18,
borderRadius:30,
alignItems:"center",
marginTop:25
},

buttonText:{
color:"white",
fontSize:16,
fontWeight:"bold"
}

});