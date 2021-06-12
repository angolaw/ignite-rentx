import React, { useState, useEffect } from "react";
import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";
import {
  Container,
  Header,
  Title,
  Subtitle,
  RentQuantity,
  RentQuantityLabel,
  RentQuantityWrapper,
  Content,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/core";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { FlatList } from "react-native";
import { Car } from "../../components/Car";
import { AntDesign } from "@expo/vector-icons";
import { LoadAnimation } from "../../components/LoadAnimation";
interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}
export function MyCars() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setloading] = useState(true);

  async function loadCars() {
    try {
      const response = await api.get("/rentals");
      const data = response ? response.data : [];
      setCars(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    loadCars();
  }, []);

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />
        <Title>Seus agendamentos, {"\n"}estão aqui.</Title>
        <Subtitle>Conforto, segurança e praticidade</Subtitle>
      </Header>
      <Content>
        <RentQuantityWrapper>
          <RentQuantityLabel>Agendamentos feitos</RentQuantityLabel>
          <RentQuantity>{cars.length}</RentQuantity>
        </RentQuantityWrapper>

        {loading ? (
          <LoadAnimation />
        ) : (
          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        )}
      </Content>
    </Container>
  );
}
