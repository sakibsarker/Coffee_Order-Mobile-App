import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../src/Profile';
import Editprofile from '../src/Editprofile'
import Roomnumber from '../src/Roomnumber';

import Automation from '../src/Automation'
import AutomationCard from '../components/AutomationCard';
import Fan from '../src/Fan';
import Light from '../src/Light';

const Stack=createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileScreen'>
        <Stack.Screen name='ProfileScreen' component={Profile}options={{
            headerShown:false
        }
        }/>
        <Stack.Screen name='EditProfile' component={Editprofile}/>
        <Stack.Screen name='RoomNumber' component={Roomnumber}/>


        {/* DIU Smart App */}
        <Stack.Screen name='Smart' component={Automation} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Autofood' component={AutomationCard} options={{
          headerShown:false,
            }}/>
        <Stack.Screen name='Fan' component={Fan}/>
        <Stack.Screen name='Light' component={Light}/>
        
    </Stack.Navigator>
  )
}

export default ProfileStack