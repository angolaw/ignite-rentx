import React, { useEffect, useState } from 'react'
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car, } from '../../components/Car'
import { useNavigation } from '@react-navigation/core'
import {api} from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'
import {Loading} from '../../components/Loading'

export function Home(){
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
      setCars(response.data)
      } catch (error) {
        console.log(error);
        
      }finally{
        setIsLoading(false)
      }
      
    }
    fetchCars()
  },[])


 
 
  function handleCarDetails(){
    navigation.navigate('CarDetails')
  }
    
  return (
     <Container>
      <Header>
        <HeaderContent>
            <Logo width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {isLoading ?  <Loading/> : 
      
    <CarList 
        data={cars}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Car onPress={handleCarDetails} data={item}/>}
      />
    }
      
  
    </Container>
  )
}