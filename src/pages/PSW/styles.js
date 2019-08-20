import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

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
export const ButtonSub = styled(RectButton)`
 margin-top:20px;
 background:#839DCA;
 border-radius:4px;
 height:44px;
 justify-content:center;
 align-items:center;
 padding: 0 12px;
 opacity: ${props => props.loading ? 0.7 : 1};
`;
export const TextBtn = styled.Text`
  color: #FFF;
  font-weight:bold;
`;
