import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
 
  background-color: ${({theme}) => theme.colors.background_primary};
`
export const Header = styled.View`
  height:113px;
  width:100%;
  background-color: ${({theme}) => theme.colors.shape_dark}

`;