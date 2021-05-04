import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

const Header =  () => {
    return (
        <SafeAreaView style={styles.header}>

            <Image source={require('../assets/logo.png')} resizeMode="contain" style={{ height:50 }}></Image>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({  
    header: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
    }
})

export default Header;