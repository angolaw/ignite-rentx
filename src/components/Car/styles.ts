import { FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Svg from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.background_secondary};
  width: 100%;
  height:126px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:24px;
  margin-bottom: 16px;
`
export const Details = styled.View`
`;
export const Rent = styled.View`
  margin-right: 24px;
`;
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.main};
`;

export const Type = styled.Text`

`;
export const CarImage = styled(FastImage)`
  width: 167px;
  height:85px;
`;
