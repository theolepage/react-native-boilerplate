import React from 'react'

import { Block, Text, Button, Input } from '../components'

export default class Login extends React.Component {
    state = {
        username: "john@doe.com",
        password: "testtest"
    }

    login() {
        const {username, password} = this.state
        const {navigation} = this.props

        // API AUTH

        if (true) {
            navigation.navigate('Browse')
        }
    }

    render() {
        return (
            <Block margin={[10, 30]}>
                <Block margin={[0, 0, 50, 0]}>
                    <Text h1>Login</Text>
                </Block>
                
                <Input
                    label="Username"
                    defaultValue={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
    
                <Input
                    secure
                    label="Password"
                    defaultValue={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
    
                <Block margin={[25, 0]}>
                    <Button primary onPress={() => this.login()}>
                        <Text white center>Login</Text>
                    </Button>
                </Block>
            </Block>
          );
    }
}