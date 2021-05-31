import React from 'react'
import { CarFeatureWrapper, Container, FeatureData, FeatureIcon } from './styles'
import Speed from '../../assets/speed.svg'

interface CarFeatureProps {
  data: CarFeatureData
}
export interface CarFeatureData{
  category: string;
  info: string;
}
export function CarFeature({data}: CarFeatureProps){
  return (
     <Container>
       <CarFeatureWrapper>
         <FeatureIcon> {<Speed/>} </FeatureIcon>
         <FeatureData>{data.info}</FeatureData>
       </CarFeatureWrapper>
    </Container>
  )
}