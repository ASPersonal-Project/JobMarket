import React from './node_modules/react'
import { View,Text,StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>home</Text>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  