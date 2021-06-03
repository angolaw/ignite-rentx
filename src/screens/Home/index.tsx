import React, { useEffect, useState } from 'react'
import { CarList, Container, Header, HeaderContent, MyCarsButton, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car, } from '../../components/Car'
import { useNavigation } from '@react-navigation/core'
import {api} from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'
import {Loading} from '../../components/Loading'
import {Ionicons} from '@expo/vector-icons'
import { useTheme } from 'styled-components'

export function Home(){
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const theme = useTheme()
  useEffect(()=>{
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        const data = response ? response.data : []
        
        setCars(data)
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
      
    }
    fetchCars()
  },[])

  function handleSeeMyRentedCars(){
    navigation.navigate('MyCars')
  }

 
 
  function handleCarDetails(selectedCar:CarDTO){
    navigation.navigate('CarDetails', {car:selectedCar})
  }
    
  return (
     <Container>
      <Header>
        <HeaderContent>
            <Logo width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>{`Total de ${cars.length} ${cars.length > 1 ? 'carros' : 'carro'}`}</TotalCars>
        </HeaderContent>
      </Header>
      
      {
      isLoading ? <Loading/> : 
      
        <CarList 
              data={cars}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <Car onPress={() => handleCarDetails(item)} data={item}/>}
          />
        
      }
      <MyCarsButton
        onPress={handleSeeMyRentedCars}
      >
        <Ionicons 
          name="ios-car-sport"  
          size={32} 
          color={theme.colors.shape}/>
      </MyCarsButton>
      
    
      
  
    </Container>
  )
}