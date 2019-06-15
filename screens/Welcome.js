import React from 'react'

import { Block, Text, Button } from '../components'

export default class Welcome extends React.Component {
	static navigationOptions = {
		header: null
	}

  	render() {
		return (
			<Block margin={[100, 30]}>
				<Block>
					<Text center h1>My app.</Text>
					<Text center h2>A short description.</Text>
				</Block>
				<Block margin={[300, 0]}>
					<Button primary onPress={() => this.props.navigation.navigate('Login')}>
						<Text white center>Login</Text>
					</Button>
					<Button onPress={() => {}}>
						<Text center>Signup</Text>
					</Button>
				</Block>
			</Block>
		)
  	}
}