import React from 'react'
import { BackButton } from '../../components/BackButton'
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
Accessories,
CalendarIcon,
RentalPeriod,
DateInfo,
DateTitle,
DateValue, 
RentalPrice,
RentalPriceLabel,
RentalPriceDetails,
RentalPriceQuota,
RentalPriceTotal,

} from './styles'
import {useTheme} from 'styled-components'
import { ImageSlider } from '../../components/ImageSlider'
import {Feather} from '@expo/vector-icons'
import Acceleration from '../../assets/acceleration.svg'
import Speed from '../../assets/speed.svg'
import Force from '../../assets/force.svg'
import Gasoline from '../../assets/gasoline.svg'
import People from '../../assets/people.svg'
import Exchange from '../../assets/exchange.svg'
import { Button } from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { Accessory } from '../../components/Accessory'

export function SchedulingDetails(){
     const navigation = useNavigation();

 function handleCarSchedulingComplete(){
    navigation.navigate('SchedulingComplete')
  }
    
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
          <Accessories>
                  <Accessory name="320km/h" icon={Speed} />
                  <Accessory name="12km/l" icon={Gasoline} />
                  <Accessory name="3.2s" icon={Acceleration} />
                  <Accessory name="150HP" icon={Force} />
                  <Accessory name="Manual" icon={Exchange} />
                  <Accessory name="4 pessoas" icon={People} />

           </Accessories>
         <RentalPeriod>
            <CalendarIcon>
               <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape}/>  
            </CalendarIcon> 
            <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue>12/07/2021</DateValue>
            </DateInfo>
           
            <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text}/> 
             <DateInfo>
               <DateTitle>Ate</DateTitle>
               <DateValue>19/07/2021</DateValue>
            </DateInfo>

         </RentalPeriod>

         <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
               <RentalPriceQuota>R$ 580 x3 diarias</RentalPriceQuota>
               <RentalPriceTotal>R$ 1740.00</RentalPriceTotal>
            </RentalPriceDetails>
         </RentalPrice>
        
       </Content>
       <Footer>
          <Button title={"Alugar agora"} color={theme.colors.success} onPress={handleCarSchedulingComplete} />
       </Footer>
       
       
    </Container>
  )
}