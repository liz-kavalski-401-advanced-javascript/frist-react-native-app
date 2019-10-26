import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {When} from './when.js'

export default function RandomStr(){  
   const [random,setRandom]=useState('Ask a yes/no question and Just Shake your phone')

    let listOfStr=['Yes','No','Try Again Later','Might Not Be A Good Idea', 'Go for it','Aright','Definitely go for it', 'That A Great Idea', 'You Might Want to Rethink Your Decisions'];

    let randomMaker = listOfStr[Math.floor(Math.random()*listOfStr.length)];
  //console.log(randomMaker,'line 8')
   
  const _handlePress=()=>{
      setRandom(randomMaker)
     // console.log('I got in!')
    }
 useEffect(()=>{
  let acceleration={ x:5,y:5,z:5}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.8 && acceleration.z >.5){
      _handlePress()
     // console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  }
 )})
    return (
     <View>
        {/* <When condition={true}>
          <Button title='Click on Me' onPress={_handlePress}/>
        </When> */}
        <Text>
         {random}
        </Text>
     </View>
    );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:12,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
