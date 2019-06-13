import React from 'react'

import { Block, Text, Button } from '../components'

export default class Welcome extends React.Component {
  render() {
	const { navigation } = this.props
	
	return (
		<Block margin={[10, 30]}>
			<Block>
				<Text h1>My app.</Text>
				<Text h2>A short description.</Text>
			</Block>
			<Block margin={[300, 0]}>
				<Button primary onPress={() => navigation.navigate('Login')}>
					<Text white center>Login</Text>
				</Button>
				<Button onPress={() => {}}>
					<Text center>Signup</Text>
				</Button>
			</Block>
		</Block>
	);
  }
}