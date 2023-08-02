import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Feed2" component={Not} />
      </Tab.Navigator>
    )
}




export default function NavigationMain() {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}