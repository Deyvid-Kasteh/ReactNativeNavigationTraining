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
import Drawer1 from "./screens/DrawerTab/Drawer1";
import Drawer2 from "./screens/DrawerTab/Drawer2";
import Drawer3 from "./screens/DrawerTab/Drawer3";
import Drawer4 from "./screens/DrawerTab/Drawer4";
import Drawer5 from "./screens/DrawerTab/Drawer5";


// Drawer Tab
const Drawer_tab = createDrawerNavigator();

function Drawer_tab_Group() {
  return (
    <Drawer_tab.Navigator>
      <Drawer_tab.Screen name="Home" component={B} />

      <Drawer_tab.Screen name="Drawer1" component={Drawer1} />
      <Drawer_tab.Screen name="Drawer2" component={Drawer2} />
      <Drawer_tab.Screen name="Drawer3" component={Drawer3} />
      <Drawer_tab.Screen name="Drawer4" component={Drawer4} />
      <Drawer_tab.Screen name="Drawer5" component={Drawer5} />
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
