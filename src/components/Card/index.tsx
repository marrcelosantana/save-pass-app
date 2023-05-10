import { useTheme } from "styled-components/native";

import { Eye, EyeSlash } from "phosphor-react-native";
import { ServiceDTO } from "@models/ServiceDTO";

import { Button, Container, Title, Info, Subtitle } from "./styles";

interface Props {
  service: ServiceDTO;
  isHidden: boolean;
  handleShowPassword: () => void;
}

export function Card({ service, isHidden, handleShowPassword }: Props) {
  const theme = useTheme();

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
