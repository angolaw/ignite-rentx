import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";
import { Container, ImageIndexes, CarImagesWrapper, CarImage } from "./styles";
interface ImageSliderProps {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}
interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageIndex, setimageIndex] = useState(0);
  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setimageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <Bullet key={String(item.id)} active={imageIndex === index} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        horizontal
        onViewableItemsChanged={indexChanged.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CarImagesWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarImagesWrapper>
        )}
      />
    </Container>
  );
}
