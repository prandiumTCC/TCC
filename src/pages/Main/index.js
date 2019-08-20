import React, { Component } from 'react';
import { Container } from '../../global/styles';
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { ActivityIndicator, Keyboard } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import {
  Title, Form, TitleText, Input,
  ButtonRec, TextRec, ButtonLogar,
  ButtonCad, TextBtn, TextBtnD,
  Container_Modal, BtnClose, TxtClose,
  TitleModal, TxtModal, BtnCadM, BtnCadP
} from './styles';
export default class Main extends Component {
  static navigationOptions = {
    header: null
  }
  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired
  }
  state = {
    email: '',
    senha: '',
    loading: false,
    isModalVisible: false,
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  handleNavigateRec = (email) => {
    const { navigation } = this.props
    navigation.navigate('PSW', { email })
    console.tron.log("click")
  }
  closeKeyBord = () => {
    Keyboard.dismiss();
  };
  handleCadP = (email) => {
    console.tron.log("click")
    const { navigation } = this.props
    this.closeKeyBord();
    this.setState({ isModalVisible: !this.state.isModalVisible });
    navigation.navigate('User', { email });
  };


  handleCadN = (email) => {
    const { navigation } = this.props
    this.closeKeyBord();
    navigation.navigate('Nutri', { email });
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  handleLogar = () => {
    const { navigation } = this.props
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Principal' }),
      ],
    });
    this.closeKeyBord();
    navigation.dispatch(resetAction);

  }
  render() {
    const { loading, isModalVisible } = this.state
    return (
      <Container>
        <Title>Bem-vindo</Title>
        <Form>
          <TitleText>E-mail</TitleText>
          <Input
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            keyboardType={"email-address"}
            value={this.state.email}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
          <TitleText>Senha</TitleText>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            placeholder="Digite sua senha"
            // value={this.state.senha}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            onChangeText={senha => this.setState({ senha })}
          />
          <ButtonRec onPress={() => this.handleNavigateRec(this.state.email)}>
            <TextRec>Redefinir senha</TextRec>
          </ButtonRec>

          <ButtonLogar loading={loading} onPress={this.handleLogar}>
            {loading ? <ActivityIndicator color="#FFF" /> : <TextBtn>{"logar".toLocaleUpperCase()}</TextBtn>}
          </ButtonLogar>

          <ButtonCad onPress={this.toggleModal}>
            <TextBtnD>{"Cadastrar".toLocaleUpperCase()}</TextBtnD>
          </ButtonCad>
        </Form>
        <Modal isVisible={isModalVisible}>
          <Container_Modal>
            <BtnClose onPress={this.toggleModal}>
              <TxtClose>X</TxtClose>
            </BtnClose>
            <TitleModal>
              <TxtModal>
                {"tipo de cadastro".toUpperCase()}
              </TxtModal>
            </TitleModal>
            <BtnCadM onPress={() => this.handleCadN(this.state.email)}>
              <TextBtn>{"Cadastro Nutricionista".toUpperCase()}</TextBtn>
            </BtnCadM>
            <BtnCadP onPress={() => this.handleCadP(this.state.email)}>
              <TextBtn>{"Cadastro paciente".toUpperCase()}</TextBtn>
            </BtnCadP>
          </Container_Modal>
        </Modal>
      </Container >
    );
  }
}
