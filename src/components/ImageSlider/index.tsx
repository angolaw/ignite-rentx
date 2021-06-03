import React from 'react'
import { FlatList, ViewToken } from 'react-native'
import { Container, ImageIndexes, ImageIndex, CarImagesWrapper, CarImage} from './styles'
interface ImageSliderProps {
  imagesUrl: string[];
}
interface ChangeImageProps {
  viewableItems:ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({imagesUrl}:ImageSliderProps){
  return (
     <Container>
       <ImageIndexes>
         {
           imagesUrl.map((item, index) => (
             <ImageIndex key={String(item)}  active={true} />
           ))
         }
         
        
       </ImageIndexes>
         <FlatList data={imagesUrl}
          horizontal
         onViewableItemsChanged={()=>{}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item)}
          renderItem={({item}) => 
          <CarImagesWrapper>
            <CarImage
             source={{uri: item}}
             resizeMode="contain"/>
          </CarImagesWrapper>

            }
         />
         
    </Container>
  )
}