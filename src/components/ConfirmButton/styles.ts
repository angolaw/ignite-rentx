import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  height:${RFValue(56)}px;
  width:${RFValue(80)}px;
  background-color: ${({theme}) => theme.colors.shape_dark};
  justify-content:center;
  align-items:center;

`
export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.shape }
`;