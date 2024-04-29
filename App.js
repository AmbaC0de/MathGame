import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EasyModeScreen from './src/screens/EasyModeScreen';
import HomeScreen from './src/screens/HomeScreen';
import HardModeScreen from './src/screens/HardModeScreen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='EasyMode' component={EasyModeScreen}/>
        <Stack.Screen name='HardMode' component={HardModeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


