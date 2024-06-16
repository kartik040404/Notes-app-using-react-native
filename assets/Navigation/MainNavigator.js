import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

function MainNavigator(){
    const navigator=React.useRef(null);
    return(
        <NavigationContainer ref={navigator}>
<StackNavigator/>
        </NavigationContainer>
    );
}

export default  MainNavigator;