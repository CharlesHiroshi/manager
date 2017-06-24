import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='E-mail'
            placeholder='example@example.com'
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password'
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
