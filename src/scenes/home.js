import React, {useRef, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/styles';
import Calculator from '../utils/calculatePi';

export default Home = () => {
  const [localPi, setPi] = useState(() => {
    return 3;
  });

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#a88f59'}}>
      <StatusBar hidden />
      <Pi value={localPi} />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.button} onPress={() => {Calculator.start()}}>
          <Text>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Calculator.pause();
          }}>
          <Text>STOP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Calculator.reset();
          }}>
          <Text>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// --------------------------------------------------------------------------------
// Display the pi value
function Pi({value}) {
  return <Text style={styles.pi}>{value}</Text>;
}
