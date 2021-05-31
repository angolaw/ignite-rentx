import React from 'react'
import { Container,Header,
CarImage,
RentData,
RentCarData,
Brand,
Model,
RentCarCost,
Period,
Price } from './styles'
export function CarDetails(){
  return (
     <Container>
       <Header>
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