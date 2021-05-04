import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity, Image, Button } from 'react-native'


var {width} = Dimensions.get('window');

const ProductCard = (props) => {

    const { image, brand, price, rating, numReviews, isFeatured, name, description, countInStock } = props

    return(
       <View style={styles.container}>
           <Image style={styles.image}
           resizeMode="contain"
           source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
           ></Image>
           <View style={styles.card}></View>

           <Text style={styles.title}>
               {name.length > 15 ? name.substr(0,15-3) + '...' : name }
           </Text>
           <Text style={styles.price}>
               ${price}
           </Text>

           { countInStock > 0 ? (
               <View style={styles.countInStock}>
                   <Button style={styles.button} title="Add" color="green"></Button>
               </View>
           ) : <Text>Currently Unavailable</Text> }
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        textAlign: 'center',
        color: 'orange',
        marginTop: 10
    },
    countInStock: {
        paddingBottom: 15
    },
   
})


export default ProductCard;