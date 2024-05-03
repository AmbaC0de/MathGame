import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default Operand = ({title, style, textStyle}) =>  {

    return (
        <View style={[style, styles.container]}>
            <Text style={[textStyle, styles.title]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 2,
        borderWidth:1
    },
    title: {
        fontSize: 22,
        fontWeight:"bold"
    }
})