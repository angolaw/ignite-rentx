import React from "react";
import { Container, Header, Subtitle, Title } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Header>
        <Title>Estamos{"\n"}quase lá</Title>
        <Subtitle>
          Faça seu login para começar{"\n"}uma experiência incrível
        </Subtitle>
      </Header>
    </Container>
  );
}
