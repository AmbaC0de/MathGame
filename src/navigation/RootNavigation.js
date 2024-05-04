import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LevelScreen from "../screens/LevelScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={"Easy mode"}
                    component={LevelScreen}
                />

                <Stack.Screen
                    name={"Hard mode"}
                    component={LevelScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}