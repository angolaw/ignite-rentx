import React from 'react'
import { BackButton } from '../../components/BackButton'
import { CarFeature } from '../../components/CarFeature'
import { Container,Header,
CarImage,
RentData,
RentCarData,
Brand,
Model,
RentCarCost,
Period,
Price, 
CarFeatureList,
CarImages,
Content,
About,
Features} from './styles'
import {useTheme} from 'styled-components'
import { ImageSlider } from '../../components/ImageSlider'

import Acceleration from '../../assets/acceleration.svg'

export function CarDetails(){
   
const theme = useTheme()
   
  return (
     <Container>
       <Header>
          <BackButton onPress={() => {}} />
          
       </Header>
       <CarImages>
                 <ImageSlider imagesUrl={['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.gratispng.com%2F20180704%2Fjxj%2Fkisspng-volkswagen-up-car-volkswagen-touareg-2018-volkswag-volkswagen-5b3ce033003919.9152554115307162110009.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.glimport.ch%2Fdoc%2Fimages%2Fvw-up.png&f=1&nofb=1']}/>

       </CarImages>
       <Content>
         <RentData>
            <RentCarData>
               <Brand>Volkswagen</Brand>
               <Model>Up! TSI</Model>
            </RentCarData>
            <RentCarCost>
               <Period>AO DIA</Period>
               <Price>{`R$ 250`}</Price>
            </RentCarCost>
         </RentData>
         <Features>
            <CarFeature
            icon={Acceleration}
            info="300km/h" />
         </Features>
        
         <About>
            Este é automóvel desportivo. 
            Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
         </About>
       </Content>
       
       
       
    </Container>
  )
}