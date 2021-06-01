import React from 'react'
import { BackButton } from '../../components/BackButton'

import {useTheme} from 'styled-components'
import { ImageSlider } from '../../components/ImageSlider'

import Acceleration from '../../assets/acceleration.svg'
import Speed from '../../assets/speed.svg'
import Force from '../../assets/force.svg'
import Gasoline from '../../assets/gasoline.svg'
import People from '../../assets/people.svg'
import Exchange from '../../assets/exchange.svg'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import {Container, Header,CarImages,
Content,
Details,
Description,
Brand,
Name,
Rent,
Period,
Price,
About,
Accessories

} from './styles'
import { Accessory } from '../../components/Accessory'
export function CarDetails(){
   
  const theme = useTheme()
  const navigation = useNavigation();

 function handleCarSchedule(){
    navigation.navigate('Scheduling')
  }
     
  return (
     <Container>
        <Header>
           <BackButton color={theme.colors.shape_dark} onPress={() =>{}} />
        </Header>
        <CarImages>
                    <ImageSlider imagesUrl={['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.gratispng.com%2F20180704%2Fjxj%2Fkisspng-volkswagen-up-car-volkswagen-touareg-2018-volkswag-volkswagen-5b3ce033003919.9152554115307162110009.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.glimport.ch%2Fdoc%2Fimages%2Fvw-up.png&f=1&nofb=1']}/>

        </CarImages>
        <Content>
           <Details>
              <Description>
                 <Brand>Volkswagen</Brand>
                 <Name>UP! TSI</Name>
              </Description>
              <Rent>
                 <Period>Ao dia</Period>
                 <Price>R$ 590</Price>
              </Rent>
           </Details>
           <Accessories>
                  <Accessory name="320km/h" icon={Speed} />
                  <Accessory name="12km/l" icon={Gasoline} />
                  <Accessory name="3.2s" icon={Acceleration} />
                  <Accessory name="150HP" icon={Force} />
                  <Accessory name="Manual" icon={Exchange} />
                  <Accessory name="4 pessoas" icon={People} />

           </Accessories>
           <About>
              Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
           </About>
           <Button title="Escolher o periodo do aluguel" onPress={() =>{}} />
        </Content>
     </Container>
  )
}