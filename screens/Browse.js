import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Image, TouchableOpacity } from 'react-native'
import { Block, Text, Button } from '../components'

import { index } from '../actions/courseActions'

class Browse extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Browse',
        headerLeft: null,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={{width: 40, height: 40, borderRadius: 100}} source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}} />
            </TouchableOpacity>
        )
    })
    
    componentDidMount() {
        // Load courses
        this.props.index()
    }

    componentDidUpdate() {
        // Print courses
        if (this.props.courses) {
            console.log(this.props.courses.length)
        }
    }

    render() {
        let elements = []
        if (this.props.courses) {
            elements = this.props.courses.map(function(course) {
                return <Course course={course}></Course>
            })
        }

        return (
            <Block margin={[10, 30]}>
                { elements }
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
        ...bindActionCreators({index}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)