import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Container, IconContainer, InputText, Visibility } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  fieldValid: boolean;
}

export function Input({ iconName, fieldValid, ...rest }: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={fieldValid ? theme.colors.main : theme.colors.title}
        />
      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}
