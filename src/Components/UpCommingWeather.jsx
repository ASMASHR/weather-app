import React from 'react';
import { Text, View, SafeAreaView,StyleSheet,FlatList ,StatusBar} from 'react-native';

import { Feather } from '@expo/vector-icons';
const Item = (props) => {
  const { dt_text, min, max, condition }=props;
  return ( <View style={styles.item}>
      <Feather name="sun" size={50} color={"white"} />
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
      <Text>{condition}</Text>
  </View>)
}
export default function UpCommingWeather() {
const renderItem=({item})=>{
  <Item condition={item.weather[0].main} dt_txt={item.dt_text} min={item.main.temp_min} max={item.main.temp_max} />
}
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
          <Text style={styles.feels}>up comming weather</Text>
          <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt}>

          </FlatList>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight||0,
    backgroundColor:'red',
  },

});
