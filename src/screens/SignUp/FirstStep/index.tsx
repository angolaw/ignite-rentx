import React, { useState } from "react";
import { BackButton } from "../../../components/BackButton";
import { Input } from "../../../components/Input";
import { Container, Title, Header, Form, Footer } from "./styles";
import * as Yup from "yup";
import { Button } from "../../../components/Button";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
export function FirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setcnh] = useState("");

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .required("O email é obrigatório")
          .email("O email deve ser válido"),
        cnh: Yup.string()
          .required("A CNH é obrigatória")
          .min(6, "Necessário uma CNH válida"),
      });
      await schema.validate({ name, email, cnh });
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        Alert.alert("Opa", e.message);
      } else {
        Alert.alert("Erro", "Erro ao validar os dados");
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton />
          </Header>
          <Form>
            <Title>1.Dados</Title>
            <Input
              iconName="user"
              autoCorrect={false}
              autoCapitalize="none"
              value={name}
              placeholder="Nome"
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              placeholder="Email"
              onChangeText={setEmail}
            />
            <Input
              iconName="credit-card"
              autoCorrect={false}
              autoCapitalize="none"
              value={cnh}
              placeholder="CNH"
              onChangeText={setcnh}
            />
            <Footer>
              <Button title="Próximo" onPress={handleNextStep} />
            </Footer>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
