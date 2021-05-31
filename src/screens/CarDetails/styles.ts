import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.colors.background_primary}
`
export const Header = styled.View`
  height:56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight()};
  margin-left:24px ;
`;

export const CarImage = styled.Image`
  width:100%;
  height:${RFValue(132)}px;
  
`;

export const RentData = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
`;

export const RentCarData = styled.View`
  padding: 4px;
`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;

`;

export const Model = styled.Text`
   font-size: ${RFValue(25)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
  margin-top: 4px;
`;

export const RentCarCost = styled.View``;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;

`;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.main};
  margin-top: 4px;
`;
export const CarFeatureList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding: 8,
  },
  showsVerticalScrollIndicator:false
})``
export const Content = styled.ScrollView.attrs({
  contentContainerStyle:{
    padding:24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})`
`;
export const About = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme})=>theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  margin-top: 24px;

`;
export const CarImages = styled.View`
  margin-top:${getStatusBarHeight()+32}px;
`;
export const Features = styled.View`
  width: 100%;
`;