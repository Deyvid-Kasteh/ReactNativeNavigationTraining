import { NavigationContainer } from "@react-navigation/native";
import Feed from "./screens/BottomTab/Feed";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./screens/BottomTab/Notifications";
import AddTweet from "./screens/BottomTab/AddTweet";
import Settings from "./screens/BottomTab/Settings";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";








// Bottom Tab
const BottomTab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
        tabBarIconStyle: { color: "yellow" },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="logo-twitter" size={24} />;
            }
            return <Feather name="twitter" size={24} />;
          },
        }}
      />

      <Tab.Screen
        name="AddTweet"
        component={AddTweet}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AntDesign name="pluscircle" size={24} />;
            }
            return <AntDesign name="pluscircleo" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="notifications-sharp" size={24} />;
            }
            return <Ionicons name="notifications-outline" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="settings-sharp" size={24} />;
            }
            return <Ionicons name="settings-outline" size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}


// Native-Stack
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
