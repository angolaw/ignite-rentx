import React, {useState, useEffect} from 'react'
import { BackButton } from '../../components/BackButton'
import { Container, Header, Title, Subtitle, RentQuantity, RentQuantityLabel, RentQuantityWrapper, Content,
CarWrapper,
CarFooter,
CarFooterTitle,
CarFooterPeriod,
CarFooterDate

} from './styles'
import {useTheme} from 'styled-components'
import { useNavigation } from '@react-navigation/core'
import { CarDTO } from '../../dtos/CarDTO'
import { api } from '../../services/api'
import { FlatList } from 'react-native'
import { Car } from '../../components/Car'
import {AntDesign} from '@expo/vector-icons'
interface CarProps {
  car: CarDTO,
  id: string;
  user_id: string;
}
export function MyCars(){
  const theme = useTheme()
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setloading] = useState(true)

  async function loadCars() {
    try{
      const response = await api.get('/schedules_byuser?user_id=1');
      const data = response ? response.data : []      
      setCars(data)
    }catch(error){
      console.log(error)
    }finally{
      setloading(false)
    }
    
  }
  useEffect(()=>{
    loadCars()
  },[])


  const navigation = useNavigation();
  function handleGoBack(){
    navigation.goBack()
  }

  return (
    
     <Container>
       <Header>
         <BackButton onPress={handleGoBack} color={theme.colors.shape} />
         <Title>Seus agendamentos, {'\n'}estão aqui.</Title>
        <Subtitle>Conforto, segurança e praticidade</Subtitle>

       </Header>
       <Content>
         <RentQuantityWrapper>
         <RentQuantityLabel>Agendamentos feitos</RentQuantityLabel>
         <RentQuantity>{cars.length}</RentQuantity>
       </RentQuantityWrapper>

       <FlatList 
        data={cars}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          <CarWrapper>
            <Car data={item.car} />
            <CarFooter>
              <CarFooterTitle>Periodo</CarFooterTitle>
              <CarFooterPeriod>
                <CarFooterDate>{}</CarFooterDate>
                <AntDesign name="arrowright" size={20} color={theme.colors.title} style={{marginHorizontal: 10}} />
                <CarFooterDate>18/05/2021</CarFooterDate>

              </CarFooterPeriod>
            </CarFooter>
          </CarWrapper>
        }
       />
       </Content>
    </Container>
  )
}