import React from 'react'
import { About, Brand, CarImage, Container, Details, Name, Period, Price, Rent, Type } from './styles'
import Hybrid from '../../assets/hybrid.svg'
import CarPhoto from '../../assets/placeholder_car.png'
interface CarProps {
  brand: string;
  model: string;
  recurrency: 'daily';
  price: number;
  fuel: 'eletric' | 'gas' | 'hybrid'
}

export function Car(){
  return (
     <Container>
       <Details>
            <Brand>AUDI</Brand>
            <Name>RS 5 Coupè</Name>
          <About>
            <Rent>
               <Period>AO DIA</Period>
              <Price>R$ 120</Price>
            </Rent>
            <Type><Hybrid/></Type>
          </About>

       </Details>
        <CarImage source={CarPhoto} />
     </Container>
  )
}