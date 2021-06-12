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
  Section,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { getTabBarHeight } from "@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar";
import { PasswordInput } from "../../components/PasswordInput";

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
  const { user } = useAuth();
  function handleGoBack() {
    navigation.goBack();
  }
  function logOut() {}

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Content
            style={{
              marginBottom: useBottomTabBarHeight(),
            }}
          >
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
            {option === "dataEdit" ? (
              <Section>
                <Input
                  iconName="user"
                  defaultValue={user.name}
                  placeholder="Nome"
                  autoCorrect={false}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                  autoCorrect={false}
                />
                <Input
                  iconName="credit-card"
                  defaultValue={user.driver_license}
                  autoCorrect={false}
                  keyboardType="numeric"
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput
                  iconName="lock"
                  placeholder="Confirmar nova senha"
                />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
