import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Mode from "../components/Button";
import Button from "../components/Button";
import Operand from "../components/Operand";
import { useEffect, useState } from "react";
import { getRandomInt, getRandomOperatorFrom } from "../utils/functions";


export default EasyModeScreen = ({})  => {

    const [response, setResponse] = useState("");
    const [op, setOp] = useState("?");
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const operators = ['+', '-']
    const operator = getRandomOperatorFrom(operators);
    const result = eval(`${a} ${operator} ${b}`);

    const checkResponse = (item) => {
        setOp(item);
        if(eval(`${a} ${item} ${b}`) === result){
            setResponse("Correct");
        }else{
            setResponse("False")
        }
    }

    useEffect(()=> {
        setA(getRandomInt(1, 10));
        setB(getRandomInt(1, 10));
    }, [])


    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.title}>Easy mode</Text>
                <View style={styles.operandContainer}>
                    <Operand title={a} />
                    <Operand title={op} />
                    <Operand title={b} />
                    <Operand title={'='} />
                    <Operand title={result} />
                </View>
                {
                    response && <Text 
                                    style={[
                                        styles.responseText, 
                                        {color: response == "Correct" ? "green": "red"}
                                    ]}>{response}</Text>
                }
                <View style={styles.operatorsContainer}>
                    {operators.map(item =>(
                        <Button 
                            key={item} 
                            title={item}
                            style={{width:60}}
                            textStyle={{fontSize:28}}
                            onPress={()=>checkResponse(item)}
                        />
                    ))}
                </View>
                
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
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    operatorsContainer:{
        flexDirection: "row",
        justifyContent: "center"
    },
    operandContainer:{
        flexDirection: "row",
        justifyContent: "center"
    },
    responseText:{
        fontSize: 24,
        fontWeight: "bold",
        // color: "green",
        textAlign: "center",
        margin: 5
    },

  });