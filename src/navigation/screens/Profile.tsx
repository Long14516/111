import React, {useState} from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
Switch,
ScrollView
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
export default function Profile(){

const [darkMode,setDarkMode] = useState(false)

return(

<ScrollView style={styles.container}>

  <View style={styles.header1}>
  <Ionicons name="arrow-back-outline" size={24} color="black" />

  <Text style={styles.text1}>Profile</Text>

  <View style={{width:24}} />
</View>
{/* Header */}
    <View style={styles.header}>

            <Image
              source={require('../../assets/anh1.png')}
              style={styles.avatar}
            />
</View>
{/* Name */}
<View style={styles.info}>
<Text style={styles.name}>Rakibul Hasan</Text>
<Text style={styles.email}>rakibhrand@gmail.com</Text>
</View>

{/* Menu */}

<View style={styles.menu}>
<View style={styles.menuItem}>
<AntDesign name="home" size={24} color="black" />
<Text style={styles.menuText}>Home</Text>
</View>
<View style={styles.menuItem}>
<Ionicons name="moon-outline" size={22}/>
<Text style={styles.menuText}>Dark Mood</Text>

<Switch
value={darkMode}
onValueChange={()=>setDarkMode(!darkMode)}
/>
</View>
<View style={styles.menuItem}>
<Feather name="map-pin" size={24} color="black" />
<Text style={styles.menuText}>Truck your order</Text>
</View>
<View style={styles.menuItem}>
<Feather name="settings" size={24} color="black" />
<Text style={styles.menuText}>Setting</Text>
</View>
<View style={styles.menuItem}>
<Entypo name="help" size={24} color="black" />
<Text style={styles.menuText}>Help Other</Text>
</View>

</View>

{/* Logout */}

<TouchableOpacity style={styles.logoutBtn}>
<Text style={styles.logoutText}>Log Out</Text>
<Ionicons name="log-out-outline" size={20} color="#fff"/>
</TouchableOpacity>

</ScrollView>

)
function menuItem(icon: string, title: string){
return(

<TouchableOpacity style={styles.menuItem}>
<Text style={styles.menuText}>{title}</Text>
<Ionicons name="chevron-forward"/>
</TouchableOpacity>

)
}

}const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F3F3F3"
},
text1:{
   fontSize:20,
  fontWeight:"bold",
  padding:30,
  alignSelf:'center',
},
header:{
alignItems:"center",
},
header1:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#FEFFBF",
padding:15,
justifyContent:"space-between"
},
topBar:{
flexDirection:"row",
justifyContent:"space-between",
width:"90%",
marginTop:50
},

profileText:{
fontSize:18,
fontWeight:"bold"
},

avatarContainer:{
marginTop:20,
alignItems:"center"
},

avatar:{
width:90,
height:90,
borderRadius:45
},

editIcon:{
position:"absolute",
right:-5,
bottom:0,
backgroundColor:"#4A4DFF",
padding:6,
borderRadius:15
},

info:{
alignItems:"center",
marginTop:20
},

name:{
fontSize:20,
fontWeight:"bold"
},

email:{
color:"gray"
},

menu:{
marginTop:30,
paddingHorizontal:20
},

menuItem:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingVertical:18,
borderBottomWidth:0.5,
borderColor:"#ddd"
},

menuText:{
flex:1,
marginLeft:15,
fontSize:16
},

logoutBtn:{
margin:20,
backgroundColor:"#4A4DFF",
padding:16,
borderRadius:12,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},

logoutText:{
color:"#fff",
fontSize:16,
marginRight:10
}

})
