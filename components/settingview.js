import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function SettingView(props){
    return(
        <View style={styles.view}>
        
           <Text style={styles.text} >Set Work Time: 
            
              
           </Text> 
            <TextInput
                style={{ height: 20, borderColor: 'gray', borderWidth: 1, width:20 }}
                onChangeText={(text)=>props.newWorkTime(text)}
                
              />
                        
            <Text style={styles.text} >Set Break Time: 
                        
            </Text>
             <TextInput
                style={styles.TextInput}
                onChangeText={(text)=>props.newBreakTime(text)}
                
              /> 
           
        </View>        
    )
}
const styles = StyleSheet.create({
  view:{    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
       
  },
  TextInput:{
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width:20
  },
})
