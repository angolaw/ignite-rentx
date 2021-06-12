import React, { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Header,
  Details,
  RentCarData,
  Brand,
  Model,
  RentCarCost,
  Period,
  Price,
  CarImages,
  Content,
  About,
  Footer,
  Accessories,
  CalendarIcon,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { useTheme } from "styled-components";
import { ImageSlider } from "../../components/ImageSlider";
import { Feather } from "@expo/vector-icons";

import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Accessory } from "../../components/Accessory";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { api } from "../../services/api";
import { Alert } from "react-native";
import { SuccessProps } from "../Success";
import { useNetInfo } from "@react-native-community/netinfo";

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  const routes = useRoute();
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);

  const { car, dates } = routes.params as Params;
  const [loading, setloading] = useState(false);
  async function handleConfirmRental() {
    setloading(true);

    //posting rent to  user
    await api
      .post("/rentals", {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(dates[0]),
        new_date: new Date(dates[dates.length - 1]),
        total: car.price * dates.length,
      })
      .then(() => {
        const pageData = {
          title: "Carro alugado!",
          message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar seu automóvel`,
          navigateTo: "Home",
        };
        navigation.navigate("Success", { data: pageData });
      })
      .catch(() => {
        setloading(false);
        Alert.alert("Não foi possivel agendar");
      });
  }

  const theme = useTheme();
  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  useEffect(() => {
    async function fetchCarUpdated() {
      const response = await api.get("/cars/${car.id}");
      setCarUpdated(response.data);
    }
    if (netInfo.isConnected === true) {
      fetchCarUpdated();
    }
  }, [netInfo.isConnected]);
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={
            !!carUpdated.photos
              ? carUpdated.photos
              : [{ id: car.thumbnail, photo: car.thumbnail }]
          }
        />
      </CarImages>
      <Content>
        <Details>
          <RentCarData>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </RentCarData>
          <RentCarCost>
            <Period>{car.period}</Period>
            <Price>{`R$ ${car.price}`}</Price>
          </RentCarCost>
        </Details>
        {carUpdated.accessories && (
          <Accessories>
            {carUpdated.accessories.map((accessory) => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))}
          </Accessories>
        )}
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>Ate</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.price} x ${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>
              {" "}
              {`R$ ${car.price * dates.length}`}{" "}
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title={"Alugar agora"}
          color={theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
}
