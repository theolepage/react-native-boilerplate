import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { theme } from '../constants'

export default class Button extends Component {
    render() {
        const { primary, opacity, style, children, ...props } = this.props

        const buttonStyles = [
            styles.button,
            primary && styles.primary,
            style
        ]

        return (
            <TouchableOpacity style={buttonStyles} activeOpacity={opacity || 0.8} {...props}>
                {children}
            </TouchableOpacity>
        )
    }
}

export const styles = StyleSheet.create({
    button: {
        height: theme.sizes.base * 4,
        marginVertical: theme.sizes.padding / 4,

        justifyContent: 'center',

        backgroundColor: '#eee',
        borderRadius: theme.sizes.radius
    },
    primary: {
        color: theme.colors.white,
        backgroundColor: theme.colors.accent
    }
})