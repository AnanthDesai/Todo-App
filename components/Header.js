import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})