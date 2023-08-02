import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// Tab bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
        <Tav></Tav>
    )
}




export default function Navigation() {
    return (
        <NavigationContainer>
            <Feed/>

        </NavigationContainer>
    )
}
