import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Notifications from './screens/Notifications';
import AddTweet from './screens/AddTweet';
import Settings from './screens/Settings';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBar: () => (
              <Ionicons name="logo-twitter" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen name="AddTweet" component={AddTweet} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />
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