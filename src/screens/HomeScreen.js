import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../components/Button";


export default HomeScreen = ({navigation})  => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Choose a mode</Text>

                <Button title={"Easy"} onPress={() => navigation.navigate("EasyMode")}/>
                <Button title={"Hard"} onPress={() => navigation.navigate("HardMode")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
  });