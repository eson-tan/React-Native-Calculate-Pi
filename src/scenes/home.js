import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

export default Home = props => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Calculate Pi - Nilakantha Series</Text>
      <Text style={styles.pi}>{props.pi}</Text>
      <TouchableOpacity style={styles.button} onPress={props.start}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.stop}>
        <Text style={styles.buttonText}>STOP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.reset}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};
