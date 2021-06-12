import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`
export const Header = styled.View`
  margin-top: ${getStatusBarHeight()+32}px;
`;
export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text``;
export const LogoutButton = styled(BorderlessButton)``;