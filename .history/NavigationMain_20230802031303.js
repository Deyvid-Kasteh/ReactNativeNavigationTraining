import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from './screens/Notifications';
import AddTweet from './screens/AddTweet';


const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="AddTweet" component={AddTweet} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    );
}




export default function NavigationMain() {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}