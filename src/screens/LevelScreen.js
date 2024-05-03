import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../components/Button";
import Operand from "../components/Operand";
import { useEffect, useState } from "react";
import { getRandomInt, getRandomOperatorFrom } from "../utils/functions";
import CountdownTimer from "../components/CountDown";


export default LevelScreen = ({route})  => {

    const [response, setResponse] = useState("");
    const [selectOperator, setSelectOperator] = useState([]);
    const [radomOperators, setRandomOperators] = useState([]);
    const [operands, setOperands] = useState({});
    const [timeLeft, setTimeLeft] = useState(route.params.timer);
    const [stopTimer, setStopTimer] = useState(false);

    const operators = route.params.operators;

    const modeParameters = {
        name: route.params.name,
        operators : route.params.operators,
        timer: route.params.timer,
        operandRange: route.params.operandRange,
    }

    const [result, setResult] = useState(0);

    const chooseOperator = (item) => {
        setSelectOperator([...selectOperator, item]);
    }

    const operation = [
        operands.a,
        selectOperator[0],
        operands.b,
        selectOperator[1],
        operands.c,
        "=",
        result
    ];

    useEffect(() => {
        if(selectOperator.length == 2){
            if(eval(`${operands.a} ${selectOperator[0]} ${operands.b} ${selectOperator[1]} ${operands.c}`) === result){
                setResponse("Correct");
                setStopTimer(true);
            }else{
                setResponse("False");
            }
        }
    },[selectOperator])

    useEffect(()=> {
        const randomNumbers = Array.from(
            {length: 3},
            i => getRandomInt(1, modeParameters.operandRange)
        )

        const randomOp = Array.from(
            {length: 2},
            i => getRandomOperatorFrom(operators)
        )

        setRandomOperators(randomOp);
        setResult(eval(`
            ${randomNumbers[0]} 
            ${randomOp[0]} 
            ${randomNumbers[1]} 
            ${randomOp[1]} 
            ${randomNumbers[2]}`)
        );
        setOperands({
            a: randomNumbers[0],
            b: randomNumbers[1],
            c: randomNumbers[2]
        })
    }, []);


    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.title}>{modeParameters.name}</Text>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>Remaing time: </Text>
                    <CountdownTimer 
                        timeLeft={timeLeft} 
                        setTimeLeft={setTimeLeft}
                        stopTimer={stopTimer}
                    />
                </View>
                <View style={styles.operandContainer}>
                    {
                        operation.map((item, index) => (
                            <Operand title={item} key={`${item}-${index}`}/>
                        ))
                    }
                </View>
                {
                    response && <Text style={[
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
                            onPress={()=>chooseOperator(item)}
                            disabled={timeLeft == 0 ? true : false}

                        />
                    ))}
                </View>
                {!timeLeft && <Text style={styles.lose}>The correct answer is {"\n"}
                    {operands.a} 
                    {radomOperators[0]} 
                    {operands.b}
                    {radomOperators[1]}
                    {operands.c} </Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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