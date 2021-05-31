import { RFValue } from "react-native-responsive-fontsize";
import Svg from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled.View`
  width:100%;
 
`
export const CarFeatureWrapper = styled.View`
  width:${RFValue(109)}px;
  height:${RFValue(92)}px;
  background-color: ${({theme}) => theme.colors.background_primary};
  align-items:center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 8px;


`;
export const FeatureData = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text};
  margin-top: 14px;
`;
