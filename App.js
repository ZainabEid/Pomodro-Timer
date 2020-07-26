import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils'


 // my created components:
import TimeView from './components/timerview'
import SettingView from './components/settingview'
import ButtonsView from './components/buttonsview' 
 
 
export default class App extends React.Component {   
 constructor(props){
     super(props)
     this.state={
       workTime: 25,
       breakTime: 5,
       minCounter: 25,
       secCounter:2,
       isCounting: false,
       WrkOrBrk:true, // Wrk:true, // Brk: false,
       status:'Stop', //['Working', 'Break', 'Pause', 'Stop']
      }
   }
   
   componentDidMount(){
    this.Interval= setInterval(()=>{
       const prevSecCounter= this.state.secCounter
       const prevMinCounter= this.state.minCounter
       if(this.state.isCounting){
    
         if(this.state.minCounter>0 && this.state.secCounter>0 ){
           this.setState({secCounter: prevSecCounter-1})}
         else if (this.state.minCounter>0 && this.state.secCounter==0){this.setState({minCounter: prevMinCounter-1,
               secCounter: 59})
                    
         }else if (this.state.minCounter==0 && this.state.secCounter>0){          
                             this.setState({secCounter: prevSecCounter-1})
            
         }else if(this.state.minCounter==0 && this.state.secCounter==0){
           
               // switch between Wrk and Brk
               const WrkBrk=this.state.WrkOrBrk 
               this.setState({WrkOrBrk: !WrkBrk, status: !WrkBrk? 'Working': 'Break'})
               //settin min counter to be Wrk ot Brk
               this.setState({minCounter: this.state.WrkOrBrk ? this.state.workTime : this.state.breakTime}) 
               Vibrate() 
            }
         }         
       },1000)}

componentWillUnmount(){
  clearInterval(this.interval)
}
//Setting Time
  newWorkTime=(time)=>{
    this.setState({workTime: time, minCounter:time})}
   newBreakTime=(time)=>{
    this.setState({breakTime: time, minCounter:time})}
         
   //
   playPauseBtnPress=()=>{ 
     const WorkingOrBreak= this.state.WrkOrBrk? 'Working' : 'Break'     
     const PrevStatus= this.state.status    
     const PrevIsCounting= this.state.isCounting     
     this.setState({ isCounting: !PrevIsCounting,
     status: (PrevStatus=='Stop') ? 'Working' : (PrevStatus== 'Working'||PrevStatus== 'Break')? 'Pause': WorkingOrBreak,
     })            
   }
   
   StopBtnPress=()=>{   
     const min=this.state.workTime     
     this.setState({
       minCounter: min,
       secCounter:0,
       isCounting: false,
       status:'Stop',
     })
   }

//put 0 before single digit : بتخلي اللرقم قبله صفر لمجرد العرض فقط
  makeItTwo(number){
    if(number<=9){return "0"+number}else {return number}
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text> POMODRO TIMER {"<3"}</Text>
        <Text>Work Time {this.state.workTime} - Breake Time {this.state.breakTime}</Text> 
        <Text>status: {this.state.status}</Text>
        <TimeView 
          minCounter={this.makeItTwo(this.state.minCounter)} 
          secCounter={this.makeItTwo(this.state.secCounter)} 
          />
        <ButtonsView playPauseBtnPress={this.playPauseBtnPress} StopBtnPress={this.StopBtnPress} StartPause={(this.state.status=='Stop'||this.state.status=='Pause')? 'Start' :'Pause'} />
        <SettingView newWorkTime={this.newWorkTime} newBreakTime={this.newBreakTime} />      
      </View>        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})