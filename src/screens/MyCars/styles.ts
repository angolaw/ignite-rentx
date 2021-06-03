import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_primary}
`
export const Header = styled.View`
  width: 100%;
  height:273px;
  background-color: ${({theme})=>theme.colors.header};
  justify-content:space-around;
  padding: 25px;
  padding-top: ${getStatusBarHeight()+30}px;
  
  
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.background_secondary};
`;
export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.background_secondary};
  margin-top: 18px;
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;
export const RentQuantityWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  width: 100%;
`;
export const RentQuantityLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.text}

`;
export const RentQuantity = styled.Text`
   font-family: ${({theme}) => theme.fonts.secondary_500};
   font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title}

`;
export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  margin-top:-10px;
  background-color: ${({theme}) => theme.colors.background_secondary}
  
`;

export const CarFooterTitle = styled.Text`
   font-family: ${({theme}) => theme.fonts.secondary_500};
   font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail}
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
 font-family: ${({theme}) => theme.fonts.primary_400};
   font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.title}
`;
