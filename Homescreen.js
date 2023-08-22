import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToCaluculatorScreen = () => {
    this.props.navigation.navigate('CaluculatorScreen');
  };

  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}> press the image to proceed </Text>
          </TouchableOpacity>
        

        <TouchableOpacity onPress={this.goToCaluculatorScreen}>
          <ImageBackground
            source={require('../assets /caluculatorImg.jpg')}
            style={styles.imgback}></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    marginTop: 5,
    width: 350,
    height: 50,
    backgroundColor: 'red',
  },
  buttonText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    fontWeight: 500,
    fontFamily: 'arial',
  },

  imgback: {
    height: 420,
    width: 310,
    marginTop: 1,
    marginLeft: 5,
    flex: 1,
  },

  downimg: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
    marginTop: 450,
  },
});
