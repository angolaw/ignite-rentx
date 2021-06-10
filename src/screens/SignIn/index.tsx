import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Footer, Container, Header, Subtitle, Title, Form } from "./styles";

export function SignIn() {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView>
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
        <Form>
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <PasswordInput
            iconName="lock"
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </Form>

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
    </KeyboardAvoidingView>
  );
}
