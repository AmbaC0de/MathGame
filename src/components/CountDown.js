import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CountdownTimer = ({ timeLeft, setTimeLeft, stopTimer=false }) => {

  useEffect(() => {
    // Sortie anticipée lorsque nous atteignons 0
    if (timeLeft <= 0 || stopTimer === true) return;

    // Créez un intervalle pour mettre à jour le temps restant
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Nettoyez l'intervalle lors de la suppression du composant
    return () => clearInterval(intervalId);
  }, [timeLeft]);



  return (
    <View>
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
