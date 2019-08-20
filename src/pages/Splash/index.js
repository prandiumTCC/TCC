import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container, Title, TitlePsw } from './style';

export default class Splash extends Component {
  state = {
    netstatus: false,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Main')
    }, 3000);
  }
  render() {
    const { netstatus } = this.state
    return (
      <Container>
        <Title>{'prandium'.toLocaleUpperCase()}</Title>
        <TitlePsw>Planejamento nutricional</TitlePsw>
        <Text>{netstatus}</Text>
      </Container>
    )
  }
}
