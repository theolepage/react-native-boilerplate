import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Block, Text, Button, Input } from '../components'

import { login } from '../actions/authActions'

class Login extends React.Component {  
    static navigationOptions = {
        title: 'Login',
        headerLeft: null
    }
    
    state = {
        username: "ghickle@example.com",
        password: "testtest",
    }

    componentDidUpdate() {
        if (this.props.token) {
            this.props.navigation.navigate('Browse')
        }
    }

    attemptLogin() {
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <Block margin={[50, 30]}>
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
                    <Button primary onPress={() => this.attemptLogin()}>
                        <Text white center>Login</Text>
                    </Button>
                </Block>

                <Block margin={[25, 0]}>
                    <Text center>{this.props.message}</Text>
                </Block>
            </Block>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        message: state.authReducer.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({login}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)