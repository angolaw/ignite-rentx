import React from 'react'
import { Container, Content, Title,Message, Footer } from './styles'
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { useWindowDimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ConfirmButton } from '../../components/ConfirmButton'
import { useNavigation } from '@react-navigation/native'
export function SchedulingComplete(){
  const dimensions = useWindowDimensions()
    const navigation = useNavigation();

 function handleCarSchedulingHome(){
    navigation.navigate('Home')
  }
    
  return (
     <Container>
       <LogoSvg width={dimensions.width} />
       <Content>
          <DoneSvg width={RFValue(80)} height={RFValue(80)}/>
          <Title>Carro alugado!</Title>
          <Message>Agora você só precisa ir{'\n'}até a concessionária da RENTX{'\n'}pegar o seu automóvel.</Message>
       </Content>
       <Footer>
         <ConfirmButton title="Ok" onPress={handleCarSchedulingHome}/>
       </Footer>
    </Container>
  )
} 