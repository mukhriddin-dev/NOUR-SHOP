import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductList from './ProductList'
import { Container, Header, Text, Icon, Item, Input } from 'native-base'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner'

const data = require('../../database/products.json')


const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);

        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
        }
    }, []);

    const searchProdut = (text) =>{
        setProductsFiltered(products.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur =  () => {
        setFocus(false)
    }

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="search"></Icon>
                    <Input placeholder="Search" onFocus={openList} onChangeText={(text) => searchProdut(text)}></Input>
                </Item>

                {focus == true ? (
                    <Icon onPress={onBlur} name="close"></Icon>
                ) : null}
            </Header>

           <View>
                <Banner></Banner>
           </View>

            {focus == true ? (
                <SearchedProducts productsFiltered={productsFiltered}></SearchedProducts>
            ) : (
                <View>
                    <FlatList
                            data={products}
                            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                            keyExtractor={item => item.id}
                    />
                </View>
            )}

        </Container>
    )
}

export default ProductContainer