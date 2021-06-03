import React, { useRef, useState } from 'react'
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
  const [imageIndex, setimageIndex] = useState(0)
  const indexChanged = useRef((info: ChangeImageProps)=>{
    const index = info.viewableItems[0].index!
    setimageIndex(index)
    
  })

  return (
     <Container>
       <ImageIndexes>
         {
           imagesUrl.map((item, index) => (
             <ImageIndex key={String(item)}  active={imageIndex === index} />
           ))
         }
         
        
       </ImageIndexes>
         <FlatList data={imagesUrl}
          horizontal
          onViewableItemsChanged={indexChanged.current}
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