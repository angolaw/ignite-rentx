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
import { useNavigation } from '@react-navigation/native';
import {format} from 'date-fns'
import { getPlatformDate } from '../../utils/getPlatformDate';
interface RentalPeriod{
  start: number;
  startFormatted:string;
  end:number;
  endFormatted:string;
}

export function Scheduling(){
 const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
 const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
 const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const navigation = useNavigation();

 function handleCarSchedulingDetails(){
    navigation.navigate('SchedulingDetails')
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
      start: start.timestamp,
      end:end.timestamp,
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
              <DateValue selected={true} >{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>
            <ArrowLeft/>
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={false}>{rentalPeriod.endFormatted}</DateValue>
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
         <Button onPress={handleCarSchedulingDetails} title="Confirmar"/>
       </Footer>
    </Container>
  )
}