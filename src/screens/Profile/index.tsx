import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  Platform,
  Alert,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { PasswordInput } from "../../components/PasswordInput";
import * as ImagePicker from "expo-image-picker";
import { Button } from "../../components/Button";
import * as Yup from "yup";
import { useNetInfo } from "@react-native-community/netinfo";

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
  const { user, signOut, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);
  const netInfo = useNetInfo();
  const [userImage, setUserImage] = useState(
    user.avatar || "https://avatars.githubusercontent.com/u/46244572?v=4"
  );

  //handle Camera/Library permission
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Ops",
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);
  //user  data
  function handleGoBack() {
    navigation.goBack();
  }
  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        name: Yup.string().required("Nome é obrigatório"),
      });
      const data = { name, driverLicense };
      await schema.validate(data).then(() => {
        updateUser({
          id: user.id,
          user_id: user.user_id,
          name,
          email: user.email,
          driver_license: driverLicense,
          avatar: userImage,
          token: user.token,
        });
        Alert.alert("Perfil atualizado com sucesso!");
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      }
      Alert.alert("Opa", "Não foi possível salvar o perfil");
    }
  }

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }
    if (result.uri) {
      setUserImage(result.uri);
    }
  }
  async function handleSignOut() {
    Alert.alert(
      "Tem certeza?",
      "Se deslogar do app, precisará de internet para conectar-se novamente",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => signOut(),
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleGoBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>
            <PhotoContainer>
              <Photo
                source={{
                  uri: userImage,
                }}
              />
              <PhotoButton onPress={handleSelectAvatar}>
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
                  value={name}
                  onChangeText={setName}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  value={user.email}
                  defaultValue={user.email}
                  autoCorrect={false}
                />
                <Input
                  iconName="credit-card"
                  defaultValue={user.driver_license}
                  autoCorrect={false}
                  keyboardType="numeric"
                  value={driverLicense}
                  onChangeText={setDriverLicense}
                />
              </Section>
            ) : (
              <Section>
                {netInfo.isConnected === true && (
                  <>
                    <PasswordInput iconName="lock" placeholder="Senha atual" />
                    <PasswordInput iconName="lock" placeholder="Nova senha" />
                    <PasswordInput
                      iconName="lock"
                      placeholder="Confirmar nova senha"
                    />
                  </>
                )}
              </Section>
            )}
            <Button title="Salvar alterações" onPress={handleProfileUpdate} />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
