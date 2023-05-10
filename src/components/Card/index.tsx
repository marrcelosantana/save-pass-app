import { useState } from "react";
import { useTheme } from "styled-components/native";

import { Eye, EyeSlash } from "phosphor-react-native";
import { ServiceDTO } from "@models/ServiceDTO";

import { Button, Container, Title, Info, Subtitle } from "./styles";

interface Props {
  service: ServiceDTO;
}

export function Card({ service }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  const theme = useTheme();

  function handleShowPassword() {
    setIsHidden(!isHidden);
  }

  return (
    <Container isHidden={isHidden}>
      <Button onPress={handleShowPassword}>
        {isHidden ? (
          <EyeSlash size={32} color={theme.COLORS.TEXT_BODY} />
        ) : (
          <Eye size={32} color={theme.COLORS.LIGHT_BLUE} />
        )}
      </Button>

      <Info>
        <Title isHidden={isHidden}>{service.name}</Title>
        {isHidden ? (
          <Subtitle isHidden={isHidden}>seuemail@gmail.com</Subtitle>
        ) : (
          <Subtitle isHidden={isHidden}>{service.password}</Subtitle>
        )}
      </Info>
    </Container>
  );
}
