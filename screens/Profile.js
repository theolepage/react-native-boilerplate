import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Image, TouchableOpacity } from 'react-native'
import { Block, Text, Button } from '../components'

import { logout } from '../actions/authActions'

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerLeft: null
    }

    componentDidUpdate() {
        // Logout
        if (this.props.token === null) {
            this.props.navigation.navigate('Welcome')
        }
    }

    render() {
        return (
            <Block margin={[10, 30]}>

                <Image style={{width: 80, height: 80, borderRadius: 100}} source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}} />

                <Button onPress={() => this.props.logout()}>
                    <Text center>Logout</Text>
                </Button>

            </Block>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        user: state.authReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({logout}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)