import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Container, IconContainer, InputText, Visibility } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.title} />
      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}
