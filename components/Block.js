import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { theme } from '../constants'

export default class Block extends Component {
    getMargins() {
        const { margin } = this.props

        if (typeof margin === 'number') {
            return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin
            }
        }
        
        if (typeof margin === 'object') {
            switch (Object.keys(margin).length) {
                case 1:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[0],
                        marginBottom: margin[0],
                        marginLeft: margin[0]
                    }
                case 2:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[0],
                        marginLeft: margin[1]
                    }
                case 4:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[3]
                    }
            }
        }
    }

    getPaddings() {
        const { padding } = this.props

        if (typeof padding === 'number') {
            return {
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding
            }
        }
        
        if (typeof padding === 'object') {
            switch (Object.keys(padding).length) {
                case 1:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[0],
                        paddingBottom: padding[0],
                        paddingLeft: padding[0]
                    }
                case 2:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[0],
                        paddingLeft: padding[1]
                    }
                case 4:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[3]
                    }
            }
        }
    }

    render() {
        const { margin, padding, center, style, children, ...props } = this.props

        const blockStyles = [
            styles.block,
            center && styles.center,
            margin && { ...this.getMargins() },
            padding && { ...this.getPaddings() },
            style
        ]

        return (
            <View style={blockStyles}>
                {children}
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    block: {
        
    },
    center: {
        alignItems: 'center',
    }
})