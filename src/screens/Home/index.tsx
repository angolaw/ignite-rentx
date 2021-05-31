import React from 'react'
import { Container, Header, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
export function Home(){
  return (
     <Container>
      <Header>
        <Logo width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>Total de 12 carros</TotalCars>
      </Header>
    </Container>
  )
}