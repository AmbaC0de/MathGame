import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CountdownTimer = ({ timeLeft, setTimeLeft }) => {
//   const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // Sortie anticipée lorsque nous atteignons 0
    if (timeLeft <= 0) return;

    // Créez un intervalle pour mettre à jour le temps restant
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Nettoyez l'intervalle lors de la suppression du composant
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Formattez le temps restant en minutes et secondes
  const formatTime = (t) => (t < 10 ? '0' + t : t);

  return (
    <View>
      {/* <Text>{formatTime(Math.floor(timeLeft / 60))}:{formatTime(timeLeft % 60)}</Text> */}
      <Text style={styles.timerText}>{timeLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    timerText:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        margin: 5
    }
})

export default CountdownTimer;
