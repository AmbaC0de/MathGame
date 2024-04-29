import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Mode from "../components/Button";
import Button from "../components/Button";
import Operand from "../components/Operand";
import { useEffect, useState } from "react";
import { getRandomInt, getRandomOperatorFrom } from "../utils/functions";


export default HardModeScreen = ({})  => {

    const [response, setResponse] = useState("");
    const [op, setOp] = useState([]);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const operators = ["+", "-", "*", "/"]
    const operator1 = getRandomOperatorFrom(operators);
    const operator2 = getRandomOperatorFrom(operators);
    const result = eval(`${a} ${operator1} ${b} ${operator2} ${c}`);

    const checkResponse = (item) => {
        if(eval(`${a} ${op[0]} ${b} ${op[1]} ${c}`) === result){
            setResponse("Correct");
        }else{
            setResponse("False")
        }
    }

    useEffect(()=> {
        setA(getRandomInt(1, 10));
        setB(getRandomInt(1, 10));
        setC(getRandomInt(1, 10));
    }, [])


    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.title}>Hard mode</Text>
                <View style={styles.operandContainer}>
                    <Operand title={a} />
                    <Operand title={op[0]} />
                    <Operand title={b} />
                    <Operand title={op[1]} />
                    <Operand title={c} />
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
                            // textStyle={{fontSize:28}}
                            onPress={()=>setOp([...item])}
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