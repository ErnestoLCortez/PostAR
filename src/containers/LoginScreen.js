import React, { Component } from 'react';
import { Spinner, Button, Label, Text, Content, Card, CardItem, Form, Input, Item } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../redux/actions';

class LoginScreen extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button full onPress={this.onButtonPress.bind(this)}>
        <Text>Sign In</Text>
      </Button>
    )
  }

  render() {
    return (
      <Content>
        <Form>
          <Item
            inlineLabel
          >
            <Label>Username</Label>
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </Item>
          <Item
            inlineLabel
          >
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </Item>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          {this.renderButton()}
        </Form>
      </Content>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'

  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginScreen);