import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../components/Button";


export default HomeScreen = ({navigation})  => {

    const levels = [
        {
            name: "Easy mode",
            operators: ["+", "-"],
            operandCount: 2,
            timer: 10,
            operandRange: 10,
        },
        {
            name: "Hard mode",
            operators: ["+", "-", "*", "/"],
            operandCount: 3,
            timer: 10,
            operandRange: 20
        }
    ]

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Choose a mode</Text>
                {
                    levels.map((item, index) => (
                        <Button
                            title={item.name}
                            onPress={()=>navigation.navigate("Level", item )}
                            key={`${item.name}_${index}`}
                        />
                    ))
                }
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
