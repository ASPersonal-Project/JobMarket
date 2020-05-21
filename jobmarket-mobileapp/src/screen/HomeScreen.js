import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { View,Text,StyleSheet} from 'react-native';
import {getAllNotice} from '../actions/noticeAction';

const HomeScreen = ({getAllNotice}) => {
     useEffect(() => {
        getAllNotice();
    }, [])
    return (
        <View style={styles.container}>
            <Text >
                home
            </Text>
        </View>
    )
}

export default connect(null,{getAllNotice})(HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
