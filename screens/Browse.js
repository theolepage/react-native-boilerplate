import React from 'react'

import { Block, Text } from '../components'

export default class Browse extends React.Component {
    render() {
        return (
            <Block margin={[10, 30]}>
                <Block margin={[0, 0, 50, 0]}>
                    <Text h1>Browse</Text>
                </Block>
            </Block>
        );
    }
}