import React, {useRef, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/styles';
import Calculator from '../utils/calculatePi';

export default Home = (props) => {
  
  return (
    <View>
        <Text style={styles.pi}>{props.pi}</Text>
        <TouchableOpacity style={styles.button} onPress={props.start}>
          <Text style={{textAlign: 'center'}}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.stop}>
          <Text style={{textAlign: 'center'}}>STOP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.reset}>
          <Text style={{textAlign: 'center'}}>RESET</Text>
        </TouchableOpacity>
      </View>
  );
};

// --------------------------------------------------------------------------------
// Display the pi value
function Pi({value}) {
  return <Text style={styles.pi}>{value}</Text>;
}
