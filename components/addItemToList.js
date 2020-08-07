import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default function AddToList( {addItemToList} ){

  const [info, setInfo] = useState('');

  const changeInput = (val) => {
    setInfo(val);
    console.log(val);
  }

    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='add item info...'
          onChangeText={changeInput}
          defaultValue=' '
          value={info}
        />
        <Button
          style={styles.submit}
          title='Add Item'
          onPress={() => {
            addItemToList(info);
            Keyboard.dismiss();
            setInfo('');
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
  },

  input:{
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
    fontSize: 20, 
  },
  submit: {
    margin: 20,
    padding:10,
  }
});