import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

import { theme } from '../constants'

export default class Block extends Component {
    render() {
        const { children, ...props } = this.props

        return (
            <View>
                {children}
            </View>
        )
    }
}

export const styles = StyleSheet.create({
})