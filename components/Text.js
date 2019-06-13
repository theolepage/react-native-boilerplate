import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

import { theme } from '../constants'

export default class Typography extends Component {
    render() {
        const { h1, h2, center, white, lightgray, style, children, ...props } = this.props

        const textStyles = [
            styles.text,
            h1 && styles.h1,
            h2 && styles.h2,
            center && styles.center,
            white && styles.white,
            lightgray && styles.lightgray,
            style
        ]

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        )
    }
}

export const styles = StyleSheet.create({
    text: {
        fontSize: theme.sizes.font,
        color: theme.colors.black
    },
    center: {
        textAlign: 'center'
    },
    h1: {
        fontSize: 26,
        fontWeight: "bold",
        color: theme.colors.title
    },
    h2: {
        fontSize: 20
    },
    white: {
        color: theme.colors.white
    },
    lightgray: {
        color: theme.colors.lightgray
    }
})