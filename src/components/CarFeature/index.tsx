import React from 'react'
import { CarFeatureWrapper, Container, FeatureData, FeatureIcon } from './styles'
import { SvgProps } from 'react-native-svg'


export interface CarFeatureProps{
  icon: React.FC<SvgProps>;
  info: string;
}
export function CarFeature({icon: Icon, info}: CarFeatureProps){
  return (
     <Container>
       <CarFeatureWrapper>
         <Icon/>
         <FeatureData>{info}</FeatureData>
       </CarFeatureWrapper>
    </Container>
  )
}