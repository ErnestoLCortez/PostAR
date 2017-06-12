import React, { Component } from 'react';
import { Spinner, Button, Text, Content, Card, Form } from 'native-base';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';

class LoginScreen extends Component {

  onGoogleButtonPress(){
    //FireAuth.googleLogin();
  }

  onFacebookButtonPress(){
    //FireAuth.facebookLogin();
  }

  renderButton(text, onPress) {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button full onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    )
  }

  render() {
    return (
      <Content>
        <Form>
          <Card>
            {this.renderButton('Log in with Google', this.onGoogleButtonPress.bind(this))}
            {this.renderButton('Log in with Facebook', this.onFacebookButtonPress.bind(this))}
          </Card>
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
  const { error, loading } = auth;
  return { error, loading };
};

export default connect(mapStateToProps, {
  loginUser
})(LoginScreen);