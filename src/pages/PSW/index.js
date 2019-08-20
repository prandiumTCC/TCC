import React, { Component } from 'react';
import { Container } from '../../global/styles';
// import { ActivityIndicator, Keyboard } from 'react-native'
import { Form, TitleText, Input, ButtonSub, TextBtn } from './styles'


export default class PSW extends Component {
  // console.tron.log(navigation, getParam('email'))
  state = {
    email: ''
  }
  static navigationOptions = {
    headerTitle: 'Recuperar senha',
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Form>
          <TitleText>E-mail</TitleText>
          <Input
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            keyboardType={"email-address"}
            value={navigation.getParam('email')}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
          <ButtonSub >
            <TextBtn>{"enviar".toLocaleUpperCase()}</TextBtn>
          </ButtonSub>
        </Form>
      </Container>
    );
  }
}
