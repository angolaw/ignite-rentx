import React from 'react'
import { CarFeatureWrapper, FeatureData } from './styles'
import { SvgProps } from 'react-native-svg'


export interface CarFeatureProps{
  icon: React.FC<SvgProps>;
  info: string;
}
export function CarFeature({icon: Icon, info}: CarFeatureProps){
  return (
       <CarFeatureWrapper>
         <Icon/>
         <FeatureData>{info}</FeatureData>
       </CarFeatureWrapper>
  )
}