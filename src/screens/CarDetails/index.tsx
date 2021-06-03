import React from 'react'
import { BackButton } from '../../components/BackButton'

import {useTheme} from 'styled-components'
import { ImageSlider } from '../../components/ImageSlider'
import Animated from 'react-native-reanimated'
import {getAccessoryIcon} from '../../utils/getAccessoryIcon'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Container, Header,CarImages,

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
        <Animated.ScrollView
         contentContainerStyle={{
            padding:24,
            alignItems: 'center',

         }}
         showsVerticalScrollIndicator={false}
        >
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
                  name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
               ))}
                  
           </Accessories>
           <About>
              {car.about}
              {car.about}
              {car.about}
              {car.about}
           </About>
           <Footer>
              <Button title="Escolher o periodo do aluguel" onPress={() => handleCarSchedule(car)} />
           </Footer>
        </Animated.ScrollView>
     </Container>
  )
}