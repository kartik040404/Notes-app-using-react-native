import React from "react"
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    FlatList,
    ScrollView
} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"
import MainPage2 from "./MainPage2"

function MainPage1(props) {
    const {data}=props
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }



    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <><>
                    <Image source={item.imagePath} style={{ height: 100, width: 100, marginLeft: 10, borderRadius: 50 }}></Image>
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                        <Text style={style.text1}>Username : {item.username}</Text>
                        <Text style={style.text1}>Email ID : {item.emailID}</Text>
                    </View>
                </>
                </>
            </View>

        )

    }

    return (

 <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'column' }}>
    
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />

            {/* <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                <FlatList
                // horizontal={true}
                    data={data}
                    renderItem={renderItem}
                />

            </View> */}
            {/* <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>First Page1</Text> */}

            {/* <View> */}
                <MainPage2/>
            {/* </View> */}


        </View>
    )
}

const style = StyleSheet.create({

    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },

})

export default MainPage1
