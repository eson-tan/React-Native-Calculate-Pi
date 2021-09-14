import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#5b7566',
    marginHorizontal: 75,
    marginVertical: 15,
    paddingVertical: 20,
    backgroundColor: '#5b7566',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    elevation: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  pi: {
    fontSize: 70,
    marginVertical: 25,
    textAlign: 'center',
    color: '#f2f2f2',
    textShadowColor: '#525151',
    textShadowRadius: 10,
    textShadowOffset: {width: 2, height: 4},
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 45,
  },
  background: {
    backgroundColor: '#87a895',
    flex: 1,
  },
});

export default styles;
