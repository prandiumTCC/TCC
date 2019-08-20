import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: #444A5A;
  padding: 20px;
  justify-content: center;
  align-items: stretch;
`;
export const TitleForm = styled.Text`
  color: #FFF;
  margin-top: 8px;
  font-weight:bold;
`;
export const Form = styled.View`
  margin-top: 20px;
`;
export const Input = styled.TextInput`
  background: #FFF;
  border-radius: 10px;
  height: 44px;
  padding-left: 20px;
  margin-bottom: 8px;
`;
export const ButtonCad = styled(RectButton)`
    margin-top:20px;
    background:#9DCA83;
    border-radius: 3px;
    height: 44px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;
export const TextBtn = styled.Text`
  color:#fff;
  font-weight:bold;
`;


