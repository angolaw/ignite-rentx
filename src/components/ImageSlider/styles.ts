import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface ImageIndexProps{
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`
export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const CarImagesWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  justify-content:center;
  align-items:center;
`;

export const CarImage = styled.Image`
  height: 132px;
  width: 280px;
`;
