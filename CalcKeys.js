import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class CalcKeys extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <TouchableOpacity onPress={()=>{this.props.onClick()}}>
                <Text style={styles.textDisplay}>{this.props.displayKey}</Text>
            </TouchableOpacity>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{   
 width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginTop : 35
  },
    
  textDisplay:{
    color:"#a881af",
    textAlign:"center",
    fontSize:36,  
    fontStyle : 'lingojam'       
  }
    
});