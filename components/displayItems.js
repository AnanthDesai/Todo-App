import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default function DisplayList({ item, removeItemFromList }) {
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => removeItemFromList(item.key)}>
                <Text style={styles.item}>{ item.text }</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
      
    },
    item: {
        fontSize: 20,
        padding: 10,
        borderColor: '#000',
        borderRadius: 20,
        borderWidth: 2,
        margin: 5
    },
});