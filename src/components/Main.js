import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Clipboard,
  TextInput
} from 'react-native'; 

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {text: '', result: 'Result'};
    }

    _onSubmit(event) {
      this.setState({result:this.state.text.split("").reverse().join("")})
    }

    _onCopy(event) {
       Clipboard.setString(this.state.result);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Reverse Word
        </Text>
        <TextInput
        id="txtWord"
          placeholder="Enter a word to be reversed!"
          onChangeText={(text) => this.setState({text:text}) }
          style={{height: 40, width:"40%%", borderColor: 'gray', borderWidth: 1}}
       />
         <Button
                title="Submit"
                onPress={this._onSubmit.bind(this)}
              />

        <Text style={styles.result}>
          {this.state.result}
        </Text>
          <Button title="Copy to Clipboard"
          onPress={this._onCopy.bind(this)}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
