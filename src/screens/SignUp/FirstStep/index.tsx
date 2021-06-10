import React, { useState } from "react";
import { BackButton } from "../../../components/BackButton";
import { Input } from "../../../components/Input";
import { Container, Title, Header, Form, Footer } from "./styles";
import * as Yup from "yup";
import { Button } from "../../../components/Button";
export function FirstStep() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cnh, setcnh] = useState("");

  async function handleNextStep() {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required("O email é obrigatório")
        .email("Digite um email válido"),
      password: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "Necessário uma senha forte"),
      cnh: Yup.string()
        .required("A senha é obrigatória")
        .min(6, "Necessário uma senha forte"),
    });
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <Form>
        <Title>1.Dados</Title>
        <Input iconName="user" value="" placeholder="Nome" />
        <Input iconName="mail" value="" placeholder="Email" />
        <Input iconName="credit-card" value="" placeholder="CNH" />
        <Footer>
          <Button title="Próximo" />
        </Footer>
      </Form>
    </Container>
  );
}
