import React from 'react'
import { Container, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'
export function Home(){
  return (
     <Container>
      <Header>
        <HeaderContent>
            <Logo width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car/>
      <Car/>
    </Container>
  )
}