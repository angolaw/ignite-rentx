import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
 
  background-color: ${({theme}) => theme.colors.background_primary};
`
export const Header = styled.View`
  height:113px;
  width:100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: ${({theme}) => theme.colors.header}

`;
export const TotalCars = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`