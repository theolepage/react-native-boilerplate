import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Block from './Block'
import Text from './Text'

import { theme } from '../constants'

export default class Input extends Component {
    renderLabel() {
        const { label } = this.props
    
        return (
          <Block>
            {label ? <Text lightgray>{label}</Text> : null}
          </Block>
        )
    }

    render() {
        const { secure, style, ...props } = this.props

        const inputStyles = [
            styles.input,
            style
        ]

        return (
            <Block margin={[20, 0]}>
                {this.renderLabel()}

                <TextInput
                    secureTextEntry={secure}
                    style={inputStyles}
                    {...props}
                />
            </Block>
        )
    }
}

export const styles = StyleSheet.create({
    input: {
        height: theme.sizes.base * 3,

        fontSize: 16,

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.colors.lightgray,
    }
})