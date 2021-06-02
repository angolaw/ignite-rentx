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
import { useNavigation, useRoute } from '@react-navigation/native'
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
Accessories,
Footer

} from './styles'
import { Accessory } from '../../components/Accessory'
import { CarDTO } from '../../dtos/CarDTO'
import { Car } from '../../components/Car'
interface Params{
   car:CarDTO
}

export function CarDetails(){
   
  const theme = useTheme()
  const navigation = useNavigation();
  const route = useRoute()

  const { car }= route.params as Params;


 function handleCarSchedule(car:CarDTO){
    navigation.navigate('Scheduling',{car})
  }
  function handleGoBack() {
     navigation.goBack()
  }
     
  return (
     <Container>
        <Header>
           <BackButton color={theme.colors.shape_dark} onPress={handleGoBack} />
        </Header>
        <CarImages>
                    <ImageSlider imagesUrl={car.photos}/>

        </CarImages>
        <Content>
           <Details>
              <Description>
                 <Brand>{car.brand}</Brand>
                 <Name>{car.name}</Name>
              </Description>
              <Rent>
                 <Period>{car.rent.period}</Period>
                 <Price>{`R$ ${car.rent.price}`}</Price>
              </Rent>
           </Details>
           <Accessories>
               
               {car.accessories.map((accessory) => (
                  <Accessory
                     key={accessory.type}
                  name={accessory.name} icon={Speed} />
               ))}
                  

           </Accessories>
           <About>
              {car.about}
           </About>
           <Footer>
              <Button title="Escolher o periodo do aluguel" onPress={() => handleCarSchedule(car)} />
           </Footer>
        </Content>
     </Container>
  )
}