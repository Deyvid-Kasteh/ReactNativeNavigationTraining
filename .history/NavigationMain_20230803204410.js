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
import { createDrawerNavigator } from "@react-navigation/drawer";


// Drawer Tab
const Drawer_tab = createDrawerNavigator();

function Drawer_tab_Group() {
  return (
    <Drawer_tab.Navigator>
      <Drawer_tab.Screen name="Feed" component={Dra} />
      <Drawer_tab.Screen name="Feed" component={Feed} />
      <Drawer_tab.Screen name="Feed" component={Feed} />
      <Drawer_tab.Screen name="Feed" component={Feed} />
      <Drawer_tab.Screen name="Article" component={Article} />
    </Drawer_tab.Navigator>
  );
}





// Bottom Tab
const Bottom_Tab = createBottomTabNavigator();
function Bottom_Tab_Group() {
  return (
    <Bottom_Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
        tabBarIconStyle: { color: "yellow" },
      })}
    >
      <Bottom_Tab.Screen
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

      <Bottom_Tab.Screen
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
      <Bottom_Tab.Screen
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
      <Bottom_Tab.Screen
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
    </Bottom_Tab.Navigator>
  );
}


// Native-Stack
const Stack_Tab = createNativeStackNavigator();

function Stack_Tab_Group() {
  return (
    <Stack_Tab.Navigator>
      {/* <Stack_Tab.Screen name="Home" component={Home} /> */}
      {/* <Stack_Tab.Screen name="Notifications" component={Notifications} /> */}
      {/* <Stack_Tab.Screen name="Profile" component={Profile} /> */}
      {/* <Stack_Tab.Screen name="Settings" component={Settings} /> */}
    </Stack_Tab.Navigator>
  );
}

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <Bottom_Tab_Group />
    </NavigationContainer>
  );
}
