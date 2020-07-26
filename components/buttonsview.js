import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ButtonsView(props){
    return(
        <View>
          <Button style={styles.buttons} title={props.StartPause} onPress={props.playPauseBtnPress}/>
          <Button style={styles.buttons} title='Stop' onPress={props.StopBtnPress}/>
        </View>
    )
}
const styles= StyleSheet.create({
  buttons:{
    margin:5,
  },
})