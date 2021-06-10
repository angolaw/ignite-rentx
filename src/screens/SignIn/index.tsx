import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Footer, Container, Header, Subtitle, Title } from "./styles";

export function SignIn() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Title>Estamos{"\n"}quase lá</Title>
        <Subtitle>
          Faça seu login para começar{"\n"}uma experiência incrível
        </Subtitle>
      </Header>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={false}
          light
          color={theme.colors.background_secondary}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
