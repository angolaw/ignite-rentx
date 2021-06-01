import React from 'react'
import { About, Brand, CarImage, Container, Details, Name, Period, Price, Rent, Type } from './styles'
import Hybrid from '../../assets/hybrid.svg'
import CarPhoto from '../../assets/placeholder_car.png'
import { RectButtonProps } from 'react-native-gesture-handler'
interface CarProps extends RectButtonProps {
  data: CarData;
}

interface CarData{
    brand: string;
    model: string;
    rent: {
      recurrency: 'daily';
      price: number;
    };
    thumbnail: string;
  
}
export function Car({data, ...rest}: CarProps){
  return (
     <Container  {...rest}>
       <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.model}</Name>
          <About>
            <Rent>
               <Period>{data.rent.recurrency}</Period>
              <Price>{`R$ ${data.rent.price}`}</Price>
            </Rent>
            <Type><Hybrid/></Type>
          </About>

       </Details>
        <CarImage source={{uri: data.thumbnail}} resizeMode="contain" />

     </Container>
  )
}