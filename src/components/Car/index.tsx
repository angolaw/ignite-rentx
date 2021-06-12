import React from "react";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";
import Hybrid from "../../assets/hybrid.svg";
import CarPhoto from "../../assets/placeholder_car.png";
import { RectButtonProps } from "react-native-gesture-handler";
import { Car as ModelCar } from "../../database/model/Car";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
interface CarProps extends RectButtonProps {
  data: ModelCar;
}

export function Car({ data, ...rest }: CarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>
          <Type>
            {" "}
            <MotorIcon />{" "}
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
