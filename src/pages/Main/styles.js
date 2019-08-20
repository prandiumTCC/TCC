import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  text-align:center;
  font-weight: bold;
`;
export const Form = styled.View`
  margin-top:20px;
`;

export const TitleText = styled.Text`
  color: #FFF;
  margin-top: 8;
  margin-bottom: 8;
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background:#FFF;
  border-radius: 10px;
  height: 44px;
  padding-left: 20px;
`;
export const ButtonRec = styled(RectButton)`
  margin-top:20px;
  margin-bottom:20px;
  background: transparent;
`;
export const TextRec = styled.Text`
  color: #FFF;
`;
export const ButtonLogar = styled(RectButton)`
 background:#9DCA83;
 border-radius:4px;
 height:44px;
 justify-content:center;
 align-items:center;
 padding: 0 12px;
 opacity: ${props => props.loading ? 0.7 : 1};
`;
export const ButtonCad = styled(RectButton)`
 background:#ffee58;
 border-radius:4px;
 height:44px;
 justify-content:center;
 align-items:center;
 padding: 0 12px;
 margin-top:10px;
`;
export const TextBtn = styled.Text`
  color: #FFF;
  font-weight:bold;
`;
export const TextBtnD = styled.Text`
  color: #000;
  font-weight:bold;
`;
export const Container_Modal = styled.View`
  background: #FFF;
  border-radius: 3px;
  padding: 10px;
`;
export const BtnClose = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  background: transparent;
`;
export const TxtClose = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 18px;
`;
export const TitleModal = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const TxtModal = styled.Text`
    font-weight:bold;
`;
export const BtnCadM = styled.TouchableOpacity`
    background: #839DCA;
    border-radius: 3px;
    height: 44px;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;
export const BtnCadP = styled.TouchableOpacity`
    background: #9DCA83;
    border-radius: 3px;
    height: 44px;
    margin-top:10px;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;