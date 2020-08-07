/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/Header';
import AddToList from './components/addItemToList'
import DisplayItems from './components/displayItems'

export default function App() {

  const [list, setList] = useState([
    {text: 'Item 1', key: '1'},
    {text: 'Item 2', key: '2'},
    {text: 'Item 3', key: '3'},
  ]);

  

  const addItemToList = (info) => {
    if(info.length > 0){
        setList((presentList) => {
          return[
            { text: info, key: Math.random().toString() },
            ...presentList
          ];
        });
      }
    else{
          Alert.alert('INSUFFICIENT LENGTH','Cannot enter an empty string!')
        }
  } 

    const removeItemFromList = (key) => {
      setList((presentList) => {
         return presentList.filter(presentList => presentList.key != key)
      });
    }

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.main}>
      <Header/>
      <View style={styles.container}>
      <AddToList addItemToList={addItemToList}/>
      <View >
        <FlatList
          style={styles.list}
          data={list}
          renderItem = { ({ item }) => (
          <DisplayItems item={item} removeItemFromList={removeItemFromList} />
          )}
        />
        </View>
      </View>
    </View>  
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    marginHorizontal: 20,
    backgroundColor: 'pink',
    paddingBottom: 50
  },

  list: {
    padding: 30,
    backgroundColor: 'pink',
    paddingBottom:20,
  },
  main:{
    flex: 1,
  }
})