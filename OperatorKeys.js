import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class OperatorKeys extends Component {
  render() {
    return (
      <View style={styles.calcKey}>
        <TouchableOpacity
          onPress={() => {
            this.props.onClick();
          }}>
          <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calcKey: {
    backgroundColor: 'aquamarine',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },

  textDisplay: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 36,
  },
});
