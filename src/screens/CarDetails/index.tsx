import React from 'react'
import { BackButton } from '../../components/BackButton'
import { CarFeature, CarFeatureData } from '../../components/CarFeature'
import { Container,Header,
CarImage,
RentData,
RentCarData,
Brand,
Model,
RentCarCost,
Period,
Price, 
CarFeatureList} from './styles'
import {useTheme} from 'styled-components'
export function CarDetails(){
   const carFeatures: CarFeatureData[] = [
      {
         category: 'Speed',
         info: '320 km/h',

      },
      {
         category: 'Speed',
         info: '3.2s',

      },
      {
         category: 'Speed',
         info: '800hp'

      },
      {
         category: 'Speed',
         info: 'Gasolina',

      },
      {
         category: 'Speed',
         info: 'Auto',

      },
      {
         category: 'Speed',
         info: '2 pessoas',

      },

]
const theme = useTheme()
   
  return (
     <Container>
       <Header>
          <BackButton onPress={() => {}} />
          
       </Header>
       <CarImage source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.imagin.studio%2FgetImage%3Fmake%3Dvw%26modelFamily%3Dup%26modelRange%3D1-0-tsi-gti%26modelYear%3D2019%26modelVariant%3Dhatchback%26bodySize%3D5%26transmission%3Dmanual%26paintId%3Dimagingrey%26angle%3D09%26zoomType%3Drelative%26width%3D800%26fileType%3Dpng%26tailoring%3Dleaseplan%26customer%3Dlpl&f=1&nofb=1'}} ></CarImage>
       <RentData>
          <RentCarData>
               <Brand>Volkswagen</Brand>
                <Model>Up! TSI</Model>
          </RentCarData>
          <RentCarCost>
             <Period>AO DIA</Period>
              <Price>{`R$ 250`}</Price>
          </RentCarCost>
       </RentData>
       
       
    </Container>
  )
}