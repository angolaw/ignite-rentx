import { RFValue } from "react-native-responsive-fontsize";
import Svg from "react-native-svg";
import styled from "styled-components/native";


export const CarFeatureWrapper = styled.View`
  width:${RFValue(109)}px;
  height:${RFValue(92)}px;
  background-color: ${({theme}) => theme.colors.background_primary};
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 20px;



`;
export const FeatureData = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.text};
  margin-top: 14px;
`;
