import React, { useEffect, useState } from 'react'
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
import { useNavigation, useRoute} from '@react-navigation/native'
import { Accessory } from '../../components/Accessory'
import { CarDTO } from '../../dtos/CarDTO'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { format } from 'date-fns'
import { getPlatformDate } from '../../utils/getPlatformDate'
import { api } from '../../services/api'
import { Alert } from 'react-native'

interface Params {
   car: CarDTO;
   dates:string[];
}
interface RentalPeriod{
   start:string;
   end:string;
}

export function SchedulingDetails(){
 const navigation = useNavigation();
 const routes = useRoute();
 const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
 const {car, dates}  = routes.params as Params
 async function handleConfirmRental(){
    //post to API
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)
    const unavailable_dates = [
       ...schedulesByCar.data.unavailable_dates,
       ...dates,
    ]
    api.put(`/schedules_bycars/${car.id}`,{
       id: car.id,
       unavailable_dates,
    }).then(() => 
      navigation.navigate('SchedulingComplete')

    ).catch(() => Alert.alert('Não foi possivel agendar'))


 }
    
const theme = useTheme()
   useEffect(() => {
     setRentalPeriod({
        start:format(getPlatformDate(new Date(dates[0])),'dd/MM/yyyy'),
        end:format(getPlatformDate(new Date(dates[dates.length - 1])),'dd/MM/yyyy')
     })
   }, [])
  return (
     <Container>
       <Header>
          <BackButton onPress={() => {}} />
          
       </Header>
       <CarImages>
         <ImageSlider imagesUrl={car.photos}/>

       </CarImages>
       <Content>
         <Details>
            <RentCarData>
               <Brand>{car.brand}</Brand>
               <Model>{car.name}</Model>
            </RentCarData>
            <RentCarCost>
               <Period>{car.rent.period}</Period>
               <Price>{`R$ ${car.rent.price}`}</Price>
            </RentCarCost>
         </Details>
          <Accessories>
               
               {car.accessories.map((accessory) => (
                  <Accessory
                     key={accessory.type}
                     name={accessory.name} 
                     icon={getAccessoryIcon(accessory.type)} />
               ))}
                  

           </Accessories>
         <RentalPeriod>
            <CalendarIcon>
               <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape}/>  
            </CalendarIcon> 
            <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue>{rentalPeriod.start}</DateValue>
            </DateInfo>
           
            <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text}/> 
             <DateInfo>
               <DateTitle>Ate</DateTitle>
               <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo>

         </RentalPeriod>

         <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
               <RentalPriceQuota>{`R$ ${car.rent.price} x ${dates.length} diárias`}</RentalPriceQuota>
               <RentalPriceTotal> {`R$ ${car.rent.price * dates.length}`} </RentalPriceTotal>
            </RentalPriceDetails>
         </RentalPrice>
        
       </Content>
       <Footer>
          <Button title={"Alugar agora"} color={theme.colors.success} onPress={handleConfirmRental} />
       </Footer>
       
       
    </Container>
  )
}