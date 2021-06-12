import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
} from "./styles";
import { Feather } from "@expo/vector-icons";
export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  function handleGoBack() {
    navigation.goBack();
  }
  function logOut() {}

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleGoBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={logOut}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>
        <PhotoContainer>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/46244572?v=4",
            }}
          />
          <PhotoButton onPress={() => {}}>
            <Feather
              name="camera"
              size={24}
              color={theme.colors.background_secondary}
            />
          </PhotoButton>
        </PhotoContainer>
      </Header>
      <Content>
        <Options>
          <Option
            active={option === "dataEdit"}
            onPress={() => setOption("dataEdit")}
          >
            <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
          </Option>
          <Option
            active={option === "passwordEdit"}
            onPress={() => setOption("passwordEdit")}
          >
            <OptionTitle active={option === "passwordEdit"}>
              Trocar senha
            </OptionTitle>
          </Option>
        </Options>
      </Content>
    </Container>
  );
}
