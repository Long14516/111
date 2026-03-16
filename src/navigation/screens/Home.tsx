import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const { width } = Dimensions.get("window");
export function Home() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.head}>
        <Image
          source={require('../../assets/anh1.png')}
          style={styles.avatar}
        />

        <View style={styles.head1}>
          <Text style={styles.locationText}>Your location</Text>
          <View style={styles.head2}>
            <Feather name="map-pin" size={18} color="black" />
            <Text style={styles.city}>Savor, Dhaka</Text>
          </View>
        </View>

        <View style={styles.head3}>
          <AntDesign name="bell" size={20} color="black" />
        </View>
      </View>

      {/* Search */}
      <View style={styles.timkiem}>
        
        <View style={styles.searchLeft}>
          <Entypo name="magnifying-glass" size={20} color="white" />
          <Text style={styles.searchText}>Search your food</Text>
        </View>

        <View style={styles.timkiem1}>
          <AntDesign name="bars" size={20} color="white" />
        </View>

      </View>
      {/*List */}
  {/* List */}
{/* Category */}
<ScrollView 
  horizontal
  showsHorizontalScrollIndicator={false}
   contentContainerStyle={styles.categoryContainer}
>

  <View style={[styles.categoryItem, styles.activeCategory]}>
    <FontAwesome5 name="pizza-slice" size={24} color="white" />
    <Text style={styles.activeText}>PIZZA</Text>
  </View>

  <View style={styles.categoryItem}>
    <FontAwesome5 name="hamburger" size={24} color="black" />
    <Text style={styles.categoryText}>BURGER</Text>
  </View>

  <View style={styles.categoryItem}>
    <Entypo name="drink" size={24} color="black" />
    <Text style={styles.categoryText}>DRINK</Text>
  </View>

  <View style={styles.categoryItem}>
    <FontAwesome6 name="bowl-rice" size={24} color="black" />
    <Text style={styles.categoryText}>RICE</Text>
  </View>

</ScrollView>
{/*Anh nen */}
<View style={styles.anhnenn}>
  <Image
          source={require('../../assets/anhnen.png')}
          style={styles.anhnen}
        />
        <Image
          source={require('../../assets/Dot.png')}
          style={styles.dot}
        />
</View>
{/*Popular */}
    <View >
      <View style={styles.text}>
      <Text>Popular Items</Text>
      <Text>View All</Text>
      </View>
        <Image
          source={require('../../assets/popular.png')}
          style={styles.anhnen1}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  anhnenn:{
      marginTop:5,
  alignItems:"center"
  },
  head:{
    backgroundColor:"#FEFFBF",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    padding:30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  text:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:30,
  },
  dot:{
    alignSelf:'center',
  },
  anhnen:{
    width: width - 40,
  height: 160,
  borderRadius: 20,
  alignSelf: "center",
  resizeMode: "cover"
  },
  anhnen1:{
    alignSelf:'center',
    
  },
  avatar:{
    width:45,
    height:45,
    borderRadius:25
  },
anh:{
  marginTop:20,
  paddingLeft:20
},
categoryContainer:{
  marginTop:30,
  paddingLeft:20
},

categoryItem:{
  width:80,
  height:80,
  backgroundColor:"#F2F2F2",
  borderRadius:15,
  justifyContent:"center",
  alignItems:"center",
  marginRight:15
},

activeCategory:{
  backgroundColor:"#29D697"
},

categoryText:{
  marginTop:5,
  fontSize:12,
  fontWeight:"600"
},

activeText:{
  marginTop:5,
  fontSize:12,
  fontWeight:"600",
  color:"white"
},
  head1:{
    alignItems:"center"
  },

  head2:{
    flexDirection:"row",
    alignItems:"center"
  },

  locationText:{
    fontSize:12,
    color:"gray"
  },

  city:{
    marginLeft:5,
    fontWeight:"bold"
  },

  head3:{
    width:45,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:"center",
  },

  timkiem:{
    flexDirection:'row',
    width: "90%",
    height:55,
    borderRadius:30,
    backgroundColor:"#4A43EC",
    alignSelf:"center",
    marginTop:20,
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  },

  searchLeft:{
    flexDirection:"row",
    alignItems:"center"
  },

  searchText:{
    color:"white",
    marginLeft:10
  },

  timkiem1:{
    width:35,
    height:35,
    borderRadius:10,
    backgroundColor:"#3C35C6",
    justifyContent:"center",
    alignItems:"center"
  },
});