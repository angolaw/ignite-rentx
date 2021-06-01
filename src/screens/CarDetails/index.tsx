import React from 'react'
import { BackButton } from '../../components/BackButton'
import { CarFeature } from '../../components/CarFeature'
import { Container,Header,
Details,
RentCarData,
Brand,
Model,
RentCarCost,
Period,
Price, 
CarImages,
Content,
About,
Footer,
Features} from './styles'
import {useTheme} from 'styled-components'
import { ImageSlider } from '../../components/ImageSlider'

import Acceleration from '../../assets/acceleration.svg'
import Speed from '../../assets/speed.svg'
import Force from '../../assets/force.svg'
import Gasoline from '../../assets/gasoline.svg'
import Exchange from '../../assets/exchange.svg'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export function CarDetails(){
   
  const theme = useTheme()
  const navigation = useNavigation();

 function handleCarSchedule(){
    navigation.navigate('Scheduling')
  }
     
  return (
     <Container>
       <Header>
          <BackButton onPress={() => {}} />
          
       </Header>
       <CarImages>
         <ImageSlider imagesUrl={['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.gratispng.com%2F20180704%2Fjxj%2Fkisspng-volkswagen-up-car-volkswagen-touareg-2018-volkswag-volkswagen-5b3ce033003919.9152554115307162110009.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.glimport.ch%2Fdoc%2Fimages%2Fvw-up.png&f=1&nofb=1']}/>

       </CarImages>
       <Content>
         <Details>
            <RentCarData>
               <Brand>Volkswagen</Brand>
               <Model>Up! TSI</Model>
            </RentCarData>
            <RentCarCost>
               <Period>AO DIA</Period>
               <Price>{`R$ 250`}</Price>
            </RentCarCost>
         </Details>
         <Features>
            <CarFeature
            icon={Acceleration}
            info="3.2s" />
            <CarFeature
            icon={Speed}
            info="300km/h" />
            <CarFeature
            icon={Exchange}
            info="Manual" />
            <CarFeature
            icon={Gasoline}
            info="2.8km/l" />
            <CarFeature
            icon={Force}
            info="800hp" />
            <CarFeature
            icon={Force}
            info="800hp" />
            <CarFeature
            icon={Force}
            info="800hp" />
         </Features>
        
         <About>
            Este é automóvel desportivo. 
            Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
         </About>
       </Content>
       <Footer>
          <Button title={"Escolher período do aluguel"} color={theme.colors.main} onPress={handleCarSchedule} />
       </Footer>
       
       
    </Container>
  )
}