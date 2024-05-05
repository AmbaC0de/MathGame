import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../components/Button";
import Operand from "../components/Operand";
import { useEffect, useState } from "react";
import {generateQuestionAndResponse, getRandomInt, getRandomOperatorFrom} from "../utils/functions";
import CountdownTimer from "../components/CountDown";


export default LevelScreen = ({route, navigation})  => {

    const [response, setResponse] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedOperators, setSelectedOperators] = useState([]);
    const [question, setQuestion] = useState([]);
    const [operands, setOperands] = useState([]);
    const [timeLeft, setTimeLeft] = useState(route.params.timer);
    const [stopTimer, setStopTimer] = useState(false);
    const [result, setResult] = useState(0);

    const operators = route.params.operators;

    const modeParameters = route.params;


    const chooseOperator = (operator) => {
        setSelectedOperators([...selectedOperators, operator]);


        const index = question.findIndex(item => item === "?");
        if (index !== -1) {
            const updatedQuestion = [...question]
            updatedQuestion[index] = operator;
            setQuestion(updatedQuestion);
        }
    }

    const checkAnswer = () => {
        let { response } = generateQuestionAndResponse(operands, selectedOperators);

        return eval(response) === result;
    }


    useEffect(() => {
        if (selectedOperators.length === modeParameters.operandCount - 1){
            if (checkAnswer()){
                setResponse("Correct");
                setStopTimer(true);
            }
            else {
                setResponse(`The correct answer is: ${correctAnswer}`)
                setStopTimer(true);
            }
        }
    },[selectedOperators])

    useEffect(()=> {
        navigation.setOptions({title: modeParameters.name});
        const randomNumbers = Array.from(
            {length: modeParameters.operandCount},
            i => getRandomInt(1, modeParameters.operandRange)
        )

        const randomOperators = Array.from(
            {length: modeParameters.operandCount - 1},
            i => getRandomOperatorFrom(operators)
        )

        const {question, response} = generateQuestionAndResponse(randomNumbers, randomOperators);

        console.log("response", response);

        setResult(eval(response));
        setQuestion(question);
        setCorrectAnswer(response);
        setOperands(randomNumbers);
    }, []);


    return (
        <View style={styles.container}>
            <View  >
                <Text style={styles.title}>{modeParameters.name}</Text>
                <View style={styles.timerContainer}>
                    <Text style={styles.timerText}>Remaining time: </Text>
                    <CountdownTimer
                        timeLeft={timeLeft}
                        setTimeLeft={setTimeLeft}
                        stopTimer={stopTimer}
                    />
                </View>
                <View style={styles.operandContainer}>
                    {
                        question.map((item, index) => (
                            <Operand title={item} key={`${item}-${index}`}/>
                        ))
                    }
                </View>
                {
                    response &&
                    <Text style={[
                        styles.responseText,
                        {color: response === "Correct" ? "green": "red"}
                    ]}>{response}</Text>
                }
                {!timeLeft && <Text style={[styles.responseText, {color: "red"}]}>The correct answer is: {correctAnswer}</Text>}
                <View style={styles.operatorsContainer}>
                    {operators.map(item => (
                        <Button
                            key={item}
                            title={item}
                            style={{width:60}}
                            onPress={()=>chooseOperator(item)}
                            disabled={timeLeft === 0}
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
        justifyContent: "center",

    },
    operandContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    responseText:{
        fontSize: 20,
        fontWeight: "500",
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
    // lose:{
    //     color: "red",
    //     textAlign: "center",
    //     fontSize: 20,
    //     fontWeight: "500",
    //
    // }
  });
