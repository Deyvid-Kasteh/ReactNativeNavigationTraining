import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// Tab bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='' com/>
        </Tab.Navigator>
    )
}




export default function Navigation() {
    return (
        <NavigationContainer>
            <Feed/>

        </NavigationContainer>
    )
}
