import React, {Component} from 'react';
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native';

// كل مهمته انه يعرض العداد
export default function TimeView(props){
    return(
        <View>
            <Text style={styles.Text}>{props.minCounter}:{props.secCounter}</Text>
        </View>
        
    )
}
const styles= StyleSheet.create({
  Text: {
    fontSize:40,
  }
})