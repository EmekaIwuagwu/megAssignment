import React, { Component } from 'react';
import { Platform,StyleSheet, View, Text , Image,ActivityIndicator,Dimensions,Modal } from 'react-native';

export default class Splash extends Component {
 
    componentDidMount()
    {
        setTimeout(() =>{
            this.props.navigation.navigate('Login');
        },4000)
    }
 render() {
    return (
      <View styles={styles.container}>
        <Text styles={styles.splashText}> Splash </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    },

    splashText:{
        textAlign :'center',
        fontSize:16,
        justifyContent:"center",
        alignItems:"center"
    }
})