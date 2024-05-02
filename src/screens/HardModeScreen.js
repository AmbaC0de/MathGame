import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Mode from "../components/Button";
import Button from "../components/Button";
import Operand from "../components/Operand";
import { useEffect, useState } from "react";
import { getRandomInt, getRandomOperatorFrom } from "../utils/functions";
import CountdownTimer from "../components/CountDown";


export default HardModeScreen = ({})  => {

    const [response, setResponse] = useState("");
    const [op, setOp] = useState([]);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);

    const operators = ["+", "-", "*", "/"]
    const operator1 = getRandomOperatorFrom(operators);
    const operator2 = getRandomOperatorFrom(operators);
    // const result = eval(`${a} ${operator1} ${b} ${operator2} ${c}`);
    const [result, setResult] = useState(0);

    const checkResponse = (item) => {
        // console.log(op.length);
        setOp([...op, item]);
    }

    useEffect(()=>{
        if(op.length == 2){
            if(eval(`${a} ${op[0]} ${b} ${op[1]} ${c}`) === result){
                setResponse("Correct");
            }else{
                setResponse("False")
            }
        }
    },[op])

    useEffect(()=> {
        const numbers = [
            getRandomInt(1, 20),
            getRandomInt(1, 20),
            getRandomInt(1, 20)
        ]

        setResult(eval(`${numbers[0]} ${operator1} ${numbers[1]} ${operator2} ${numbers[2]}`))

        setA(numbers[0]);
        setB(numbers[1]);
        setC(numbers[2]);
        
    }, [])


    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.title}>Hard mode</Text>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>Remaing time: </Text>
                    <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
                </View>
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
                            onPress={()=>checkResponse(item)}
                            disabled={timeLeft == 0 ? true : false}

                        />
                    ))}
                </View>
                {/* {!timeLeft ? <Text style={styles.lose}>Time is up</Text>: null} */}
                {!timeLeft && <Text style={styles.lose}>Time is up</Text>}
                {/* <Text style={styles.timer}>Temps restant : {timeRemaining} s</Text> */}
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
        fontSize: 22,
        margin:10,
        fontWeight: "bold",
        textAlign: "center"
    },
    operatorsContainer:{
        flexDirection: "row",
        justifyContent: "center"
    },
    operandContainer: {
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
    timerText: {
        fontSize: 18,
    },
    timerContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    lose:{
        color: "red",
        textAlign: "center",
        fontSize: 20

    }
  });