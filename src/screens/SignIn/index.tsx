import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Subtitle, Title } from "./styles";

export function SignIn() {
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
    </Container>
  );
}
