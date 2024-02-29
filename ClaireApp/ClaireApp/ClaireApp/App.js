import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

export default class App extends React.Component {
 state = {
  isFontLoad:false
 }
 async componentDidMount(){
  await Font.loadAsync({
   //  'SemiBold' : require('./src/fonts/Montserrat SemiBold.ttf')
    // 'Medium' : require('./src/fonts/fontawesome-webfont.eot'),
  });
  this.setState({isFontLoad:true})
 }
 render(){
  return(
    (this.state.isFontLoad === true) ? (<AppNavigator/>):(AppLoading)
    
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
