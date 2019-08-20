import React, { Component } from 'react';
import { ScrollView } from 'react-native'

import { Container, TitleForm, Form, Input, ButtonCad, TextBtn } from '../styles';

export default class Nutri extends Component {
  static navigationOptions = {
    headerTitle: 'Cadastro Nutricionista',
  }

  render() {
    const { navigation } = this.props
    return (
      <>
        <ScrollView>
          <Container>
            <TitleForm>Nome</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                // value={this.state.nome_paciente}
                placeholder="Digite seu primeiro nome"
                underlineColorAndroid="transparent"
              // onChangeText={nome_paciente => this.setState({ nome_paciente })}
              />
            </Form>
            <TitleForm>Sobrenome</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                // value={this.state.sobrenome_paciente}
                placeholder="Digite seu sobrenome"
                underlineColorAndroid="transparent"
              // onChangeText={sobrenome_paciente => this.setState({ sobrenome_paciente })}
              />
            </Form>
            <TitleForm>CPF</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                keyboardType={"numeric"}
                // value={this.state.CPF_paciente}
                placeholder="Digite seu CPF"
                underlineColorAndroid="transparent"
              // onChangeText={CPF_paciente => this.setState({ CPF_paciente })}
              />
            </Form>
            <TitleForm>Celular</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                keyboardType={"numeric"}
                // value={this.state.celular_paciente}
                placeholder="Digite seu celular"
                underlineColorAndroid="transparent"
              // onChangeText={celular_paciente => this.setState({ celular_paciente })}
              />
            </Form>
            <TitleForm>CRN</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                keyboardType={"name-phone-pad"}
                // value={this.state.celular_paciente}
                placeholder="Digite seu CRN"
                underlineColorAndroid="transparent"
              // onChangeText={celular_paciente => this.setState({ celular_paciente })}
              />
            </Form>
            <TitleForm>E-mail</TitleForm>
            <Form>
              <Input
                autoCorrect={false}
                keyboardType={"email-address"}
                value={navigation.getParam('email')}
                placeholder="Digite seu Email"
                underlineColorAndroid="transparent"
              // onChangeText={email_paciente => this.setState({ email_paciente })}
              />
            </Form>
            <TitleForm>Senha</TitleForm>
            <Form>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                // value={this.state.senha_paciente}
                placeholder="Digite seu senha"
                underlineColorAndroid="transparent"
              // onChangeText={senha_paciente => this.setState({ senha_paciente })}
              />
            </Form>

            <ButtonCad onPress={() => { }}>
              <TextBtn>{'cadastrar'.toLocaleUpperCase()}</TextBtn>
            </ButtonCad>
          </Container>
        </ScrollView>
      </>
    );
  }
}
