import { StyleSheet, Text, TouchableOpacity } from "react-native"


export default Button = ({title, onPress, style, textStyle}) =>  {

    return (
        <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
            <Text style={[textStyle, styles.title]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: "95%",
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight:"bold"
    }
})