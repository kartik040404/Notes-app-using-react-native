import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../constant/Screens/auth/Login";
import { hideHeaderOptions } from "./NavigationsOptions";
import Registration from "../constant/Screens/auth/Registration";
import HomePage from "../constant/Screens/auth/HomePage";
import SplashScreen from "../constant/Screens/auth/SpashScreen";
import GetInformation from "../../GetInformation";
import ProgramList from "../constant/Screens/auth/ProgramList";
import Displayprg from "../constant/Screens/auth/Displayprg";
import DisplayEntireProgram from "../constant/Screens/auth/DisplayEntireProgram";
import Noteprofile from "../../Noteprofile";
import Createnote from "../constant/Screens/auth/Createnote";
const Stack=createStackNavigator();

function StackNavigator(){
    return(
        
<Stack.Navigator
// initialRouteName={"Login1"}
>
<Stack.Screen
name="SplashScreen"
options={hideHeaderOptions}
component={SplashScreen}
/>
    <Stack.Screen
name="LoginScreen"
options={hideHeaderOptions}
component={Login}
    />
    <Stack.Screen
name="Registration"
options={hideHeaderOptions}
component={Registration}
    />
    <Stack.Screen
name="HomePage"
options={hideHeaderOptions}
component={HomePage}
    />
    <Stack.Screen
name="ProgramList"
options={hideHeaderOptions}
component={ProgramList}
/>
<Stack.Screen
name="Displayprg"
options={hideHeaderOptions}
component={Displayprg}
/>
<Stack.Screen
name="DisplayEntireProgram"
options={hideHeaderOptions}
component={DisplayEntireProgram}
/>
<Stack.Screen
name="Noteprofile"
options={hideHeaderOptions}
component={Noteprofile}
/>
<Stack.Screen
name="Createnote"
options={hideHeaderOptions}
component={Createnote}
/>

</Stack.Navigator>
    )
}


export default StackNavigator;