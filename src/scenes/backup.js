// import React, {useRef, useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
// import styles from '../styles/styles';

// function Home() {
//   const [pi, setPi] = useState(() => {
//     return 3;
//   });
//   const [steps, setSteps] = useState(() => {
//     return 0;
//   });
//   const [denominator, setDenominator] = useState(() => {
//     return 2;
//   });
//   const increment = useRef(null);

//   useEffect(() => {
//     calculatePi;
//   }, [steps]);

//   // A function to calculate Pi using Nilakantha series
//   function calculatePi() {
//     steps % 2 === 0
//       ? setPi(
//           pi => pi + 4 / (denominator * (denominator + 1) * (denominator + 2)),
//         )
//       : setPi(
//           pi => pi - 4 / (denominator * (denominator + 1) * (denominator + 2)),
//         );

//     setDenominator(denominator => denominator + 2);
//   }

//   // A function to automatically calculate Pi every second
//  autoCalculatePi = () => {
//     increment.current = setInterval(() => {
//       setSteps(steps => steps + 1);
//       // setDenominator(denominator => denominator + 2);
//       // setSteps(steps => steps + 1);
//     }, 1000);
//   }

//   function stopCalculatePi() {
//     clearInterval(increment.current);
//   }

//   function resetPi() {
//     clearInterval(increment.current);
//     setPi(3);
//     setSteps(0);
//     setDenominator(2.0);
//   }

//   return (
//     <View style={{flex: 1, padding: 10, backgroundColor: '#a88f59'}}>
//       <StatusBar hidden />

//       <Pi value={pi} />
//       <Text>{denominator}</Text>
//       <Text>{steps}</Text>

//       <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
//         <TouchableOpacity style={styles.button} onPress={autoCalculatePi}>
//           <Text>START</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={stopCalculatePi}>
//           <Text>STOP</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={resetPi}>
//           <Text>RESET</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // --------------------------------------------------------------------------------
// // Display the pi value
// function Pi({value}) {
//   return <Text style={styles.pi}>{value}</Text>;
// }

// // export default Home;


// // --------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import styles from '../styles/styles';

// export default function CalculatePi() {
//   const [pi, setPi] = useState(() => {
//     return 3;
//   });
//   const [steps, setSteps] = useState(() => {
//     return 0;
//   });
//   const [denominator, setDenominator] = useState(() => {
//     return 2;
//   });

//   steps % 2 === 0
//     ? setPi(
//         pi => pi + 4 / (denominator * (denominator + 1) * (denominator + 2)),
//       )
//     : setPi(
//         pi => pi - 4 / (denominator * (denominator + 1) * (denominator + 2)),
//       );

//   setDenominator(denominator => denominator + 2);
//   setSteps(steps => steps + 1);

//   return pi;
// }
