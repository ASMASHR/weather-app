import React from 'react';
import { Text, View, SafeAreaView,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function CurrentWeather() {

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highLowContainer}>
            <Text style={styles.highLow}>High:8</Text>
            <Text style={styles.highLow}> Low:6</Text>
          </View>
        </View>
          <View style={styles.bodyWrapper}>
          <Text style={styles.bodyWrapperDesc}>It is sunny</Text>
          <Text style={styles.bodyWrapperMsg}>It is perfect t-shirt weather</Text>
          </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:"pink",
      },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp:{
    color:"black",
    fontSize:48
  },
  feels:{
    color:"black",
    fontSize:40

  },
  highLow:{
    color:"black",
    fontSize:20
  },
  highLowContainer:{
    flexDirection:'row',
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  bodyWrapperDesc:{

    fontSize:48
  },
  bodyWrapperMsg:{

    fontSize:30
  }
});