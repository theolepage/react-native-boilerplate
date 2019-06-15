import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Block, Text, Button } from '../components'

import { logout } from '../actions/authActions'
import { index } from '../actions/courseActions'

class Browse extends React.Component {
    componentDidMount() {
        // Load courses
        this.props.index()
    }

    componentDidUpdate() {
        // Logout
        if (this.props.token === null) {
            this.props.navigation.navigate('Welcome')
        }

        // Print courses
        if (this.props.courses) {
            console.log(this.props.courses.length)
        }
    }

    logout() {
        this.props.logout()
    }

    render() {
        return (
            <Block margin={[10, 30]}>
                <Block margin={[0, 0, 50, 0]}>
                    <Text h1>Hello {this.props.user.name}</Text>
                </Block>

                <Button onPress={() => this.logout()}>
                    <Text center>Logout</Text>
                </Button>

            </Block>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        user: state.authReducer.user,
        courses: state.courseReducer.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({logout, index}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)