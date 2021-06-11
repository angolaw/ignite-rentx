import React from "react";
import { BackButton } from "../../components/BackButton";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import { Accessory } from "../../components/Accessory";
import { CarDTO } from "../../dtos/CarDTO";
import { Car } from "../../components/Car";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  //anim scroll
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });
  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
    };
  });
  const { car } = route.params as Params;

  function handleCarSchedule(car: CarDTO) {
    navigation.navigate("Scheduling", { car });
  }
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton
            color={theme.colors.shape_dark}
            onPress={() => handleGoBack}
          />
        </Header>
        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: "center",
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>{`R$ ${car.price}`}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
        <Footer>
          <Button
            title="Escolher o periodo do aluguel"
            onPress={() => handleCarSchedule(car)}
          />
        </Footer>
      </Animated.ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  back: {
    marginTop: 24,
  },
});
