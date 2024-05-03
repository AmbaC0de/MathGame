import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LevelScreen from "../screens/LevelScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {

    const easyLevelParameters = {
        name: "Easy mode",
        operators: ["+", "-"],
        timer: 20,
        operandRange: 10,
    }

    const hardLevelParameters = {
        name: "Hard mode",
        operators: ["+", "-", "*", "/"],
        timer: 10,
        operandRange: 20,
    }


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={"EasyMode"}
                    component={LevelScreen}
                    initialParams={easyLevelParameters}
                />

                <Stack.Screen
                    name={"HardMode"}
                    component={LevelScreen}
                    initialParams={hardLevelParameters}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}