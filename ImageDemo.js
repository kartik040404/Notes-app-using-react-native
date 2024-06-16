import React from "react"
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    ImageBackground
} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"

function ImageDemo() {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return (
        <View>

            {/* SampleImage-start */}
            <View alignItems='center'>
                <Text style={style.text1}>Simple Image</Text>
                <Image
                    style={{ width: 200, height: 200 }}
                    // source={require('./assets/images/image1.jpg')}
                    source={MYIMG} 
                >
                </Image>
            </View>

            {/* SampleImage-end */}


            {/* BackgroundImage-start */}
            <View alignItems='center' style={{ marginTop: 20 }}>
                <Text style={style.text1}>BackGround Image</Text>

                <ImageBackground
                    style={{ width: 370, height: 200, borderColor: 'black', borderWidth: 1 }}
                    source={require('./assets/images/image2.jpg')}>

                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 50, marginTop: 80 }}>Iron Man</Text>

                </ImageBackground>
            </View>

            {/* BackgroundImage-end */}


            {/* NetworkImage-start */}
            <View alignItems='center' style={{ marginTop: 20 }}>
                <Text style={style.text1}>Network Image</Text>

                <Image source={{ uri: 'https://pbs.twimg.com/card_img/1669380535771332608/9Gf-o2vt?format=png&name=medium' }} style={{ width: 200, height: 100 }}>

                </Image>

            </View>

            {/* NetworkImage-end */}






        </View>
    )
}

const style = StyleSheet.create({

    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },

})

export default ImageDemo
