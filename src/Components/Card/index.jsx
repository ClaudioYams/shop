import { View, Text } from "react-native"
import { Style } from "../../Contexts/Theme"
import { useState } from "react"
import { ImageCuston } from "../Image"
import { ButtonCuston } from '../Button'
import React from 'react';
import { Button, View, Text } from 'react-native';
import { useCart } from '../contexts/CartContext';

function ProductList() {
    const { cart, setCart } = useCart();

    const products = [
        { id: 1, name: 'Produto 1' },
        { id: 2, name: 'Produto 2' },
    ];

    const addToCart = (product) => {
        const productInCart = cart.find(item => item.id === product.id);

        if (productInCart) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const productInCart = cart.find(item => item.id === productId);

        if (productInCart) {
            if (productInCart.quantity > 1) {
                setCart(cart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ));
            } else {
                setCart(cart.filter(item => item.id !== productId));
            }
        }
    };

}

export const Card = (props) => {
    const [getQtd, setQtd] = useState(0)
    const add = () => {
        setQtd(getQtd + 1)
    }
    const remove = () => {
        if (getQtd != 0) {
            setQtd(getQtd - 1)
        }
    }
    const onPress = () => {
        props.navigation.navigate('Detalhes', { ...props })
    }
    return (<View style={[Style.row, Style.card, Style.cardBorder]}>
        <View style={[Style.column, Style.cardImg]}><ImageCuston img={props.img} />
            <Text onPress={onPress} style={Style.subText}>Veja mais detalhes</Text>
        </View>
        <View style={Style.column}>
            <Text style={Style.title}>{props.title}</Text>
            <View style={[Style.card]}>
                <Text style={Style.text}><Text>R$ </Text>{props.price}</Text>
                <Text style={Style.text}> {props.descrition}</Text>
            </View>
            <Text style={Style.text}><Text>Qtd </Text>{getQtd}</Text>
            <View style={[Style.row, Style.card]}>
                <View style={[Style.column]}>
                    <ButtonCuston onPress={add} placeholder='+' />
                </View>
                <View style={Style.column}>
                    <ButtonCuston onPress={remove} placeholder='-' />
                </View>
            </View>
        </View>
    </View>)
}

export const ProductDetails = (props) => {
    return (<View style={Style.row}>
        <View style={[Style.row, Style.cardImg]}>
            <ImageCuston img={props.img} />
        </View>
        <View style={[Style.row, Style.card]}>
            <Text style={Style.title}><Text>R$ </Text>{props.price} </Text>
            <Text style={Style.title}>{props.descrition}</Text>
        </View>
        <View style={Style.row}><Text style={Style.text}>{props.descritionAll}</Text></View>

    </View>)
}