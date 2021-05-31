import React from 'react'
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car, } from '../../components/Car'
export function Home(){
  const carData = {
    brand: "Audi",
    model: "R8 V12",
    rent: {
      recurrency: 'ao dia',
      price: 299,
    },
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fforzamotorsport%2Fimages%2Fe%2Feb%2FHOR_XB1_Audi_R8_16.png%2Frevision%2Flatest%3Fcb%3D20191016205352&f=1&nofb=1',
  }
  const carDataPorsche= {
     brand: "Porsche",
    model: "911",
    rent: {
      recurrency: 'ao dia',
      price: 299,
    },
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fporsche%2Fporsche_PNG10622.png&f=1&nofb=1',
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
      <CarList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Car data={carData}/>}
      />
    

    </Container>
  )
}