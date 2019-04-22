import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Welcome extends React.Component {
  render() {
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text>WELCOME</Text>
          </View>
      );
  }
}