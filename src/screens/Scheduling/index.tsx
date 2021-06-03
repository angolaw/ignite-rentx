import React from 'react'
import { BackButton } from '../../components/BackButton'
import { Container, Header, Title, RentalPeriod,
DateInfo,
DateTitle,
DateValue, Content, Footer} from './styles'
import {useTheme} from 'styled-components';
import ArrowLeft from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
export function Scheduling(){
    const navigation = useNavigation();

 function handleCarSchedulingDetails(){
    navigation.navigate('SchedulingDetails')
  }
   function handleGoBack() {
     navigation.goBack()
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
              <DateValue selected={true} >18/06/2021</DateValue>
            </DateInfo>
            <ArrowLeft/>
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={false}>12/01/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
       </Header>
       <Content>
        <Calendar/>
       </Content>
       <Footer>
         <Button onPress={handleCarSchedulingDetails} title="Confirmar"/>
       </Footer>
    </Container>
  )
}