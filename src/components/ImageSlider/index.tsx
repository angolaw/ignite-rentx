import React from 'react'
import { Container, ImageIndexes, ImageIndex, CarImagesWrapper, CarImage} from './styles'
interface ImageSliderProps {
  imagesUrl: string[];
}
export function ImageSlider(){
  return (
     <Container>
       <ImageIndexes>
         <ImageIndex active={true} ></ImageIndex>
         <ImageIndex active={false} ></ImageIndex>
         <ImageIndex active={false} ></ImageIndex>
         <ImageIndex active={false} ></ImageIndex>
        
       </ImageIndexes>
       <CarImagesWrapper>
         <CarImage
          source={{uri: ''}}
          resizeMode="contain"
         
         />
       </CarImagesWrapper>
    </Container>
  )
}