import React from 'react'
import { Container } from './styles'
import LotteView from 'lottie-react-native'
import loadingCar from '../../assets/loading_animation.json'
export function LoadAnimation(){
  return (
     <Container>
        <LotteView
          source={loadingCar}
          style={{
            height:200
          }}
          resizeMode="contain"
          loop
          autoPlay
          
        >

        </LotteView>
    </Container>
  )
}