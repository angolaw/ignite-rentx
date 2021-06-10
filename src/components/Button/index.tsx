import React from "react";
import { Container, Title } from "./styles";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;

  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  loading = false,
  light = false,
  enabled = true,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      color={color}
      enabled
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
