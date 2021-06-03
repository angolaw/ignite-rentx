import React, { useState } from 'react'
import { BackButton } from '../../components/BackButton'
import { Container, Header, Title, RentalPeriod,
DateInfo,
DateTitle,
DateValue, Content, Footer} from './styles'
import {useTheme} from 'styled-components';
import ArrowLeft from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns'
import { getPlatformDate } from '../../utils/getPlatformDate';
import { Alert } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod{
  startFormatted:string;
  endFormatted:string;
}
interface Params{
   car:CarDTO
}


export function Scheduling(){
 const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
 const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
 const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
 const navigation = useNavigation();
 const routes = useRoute();
 const {car} = routes.params as Params
 function handleCarSchedulingDetails(){

    navigation.navigate('SchedulingDetails', {
      car, 
      dates: Object.keys(markedDates)
    })
   
  }
   function handleGoBack() {
     navigation.goBack()
  }
  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }
    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
    const firstDate = Object.keys(interval)[0]
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy')
    })


  }
   
    
  const theme = useTheme()
  return (
     <Container>
       <Header>
          <BackButton color={theme.colors.shape} onPress={handleGoBack} />
          <Title>
            Escolha uma{`\n`}
            data de início e {`\n`}
            fim do aluguel
          </Title>
          <RentalPeriod>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue selected={!!rentalPeriod.endFormatted} >{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>
            <ArrowLeft/>
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
            </DateInfo>
          </RentalPeriod>
       </Header>
       <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}

        />
       </Content>
       <Footer>
         <Button enabled={!!rentalPeriod.startFormatted} onPress={handleCarSchedulingDetails} title="Confirmar"/>
       </Footer>
    </Container>
  )
}