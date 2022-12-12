import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { View } from "react-native"
import routes from "../common/routes"
import Home from "../screens/Home"
import Palette from "../screens/Palette"
import Users from "../screens/Users"
import UserDetails from "../screens/UserDetails"


const Stack = createNativeStackNavigator()

export default function Root() {
    return <Stack.Navigator>

<Stack.Screen name={routes.users} component={Users} options={{
            headerTitle: 'Users',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 30,
            },
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name={routes.userDetails} component={UserDetails}
            options={{
                headerStyle: {
                    backgroundColor: 'blue',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 30,
                },
                headerTitleAlign: 'center'
            }}
        />
        {/* <Stack.Screen name={routes.home} component={Home} options={{
            header: () => null,
        }} />
        <Stack.Screen name={routes.palette} component={Palette} /> */}
    </Stack.Navigator>
}