import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Car} from '../../database/model/Car'
export const Container = styled.View`
  flex:1;
 
  background-color: ${({theme}) => theme.colors.background_primary};
`
export const Header = styled.View`
  height:113px;
  width:100%;

  background-color: ${({theme}) => theme.colors.header};
  justify-content:flex-end;
  padding: 32px 24px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TotalCars = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`
export const CarList = styled(FlatList as new () => FlatList<Car>).attrs({
  contentContainerStyle:{
    padding:24
  },
  showsVerticalScrollIndicator: false,
})`

`;
