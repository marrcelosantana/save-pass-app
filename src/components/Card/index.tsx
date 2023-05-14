import { useState } from "react";
import { Alert } from "react-native";

import { useToast } from "native-base";
import { useTheme } from "styled-components/native";

import { Eye, EyeSlash, Trash } from "phosphor-react-native";
import { ServiceDTO } from "@models/ServiceDTO";
import { dateFormatter } from "@utils/formatters";

import { useService } from "@hooks/useService";

import {
  Button,
  Container,
  Title,
  Info,
  Subtitle,
  LeftContent,
  RemoveButton,
  DateInfo,
  RightContent,
} from "./styles";

interface Props {
  service: ServiceDTO;
}

export function Card({ service }: Props) {
  const { removeService } = useService();

  const [isHidden, setIsHidden] = useState(true);

  const theme = useTheme();
  const toast = useToast();

  function handleShowPassword() {
    setIsHidden(!isHidden);
  }

  async function onRemove() {
    try {
      await removeService(service.id);

      await toast.show({
        title: "Serviço removido!",
        placement: "top",
        background: "orange.500",
        color: "gray.100",
      });
    } catch (error) {
      await toast.show({
        title: "Não foi possível remover!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }
  }

  async function handleRemoveService() {
    Alert.alert("Remover", `Deseja remover o serviço "${service.name}"?`, [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onRemove() },
    ]);
  }

  return (
    <Container
      colors={[
        isHidden ? theme.COLORS.SHAPE : theme.COLORS.CARD_GRADIENT,
        theme.COLORS.SHAPE,
      ]}
    >
      <LeftContent>
        <Button onPress={handleShowPassword}>
          {isHidden ? (
            <EyeSlash size={32} color={theme.COLORS.TEXT_BODY} />
          ) : (
            <Eye size={32} color={theme.COLORS.BLUE_500} />
          )}
        </Button>

        <Info>
          <Title isHidden={isHidden}>{service.name}</Title>
          {isHidden ? (
            <Subtitle isHidden={isHidden}>{service.email}</Subtitle>
          ) : (
            <Subtitle isHidden={isHidden}>{service.password}</Subtitle>
          )}
        </Info>
      </LeftContent>

      <RightContent>
        <RemoveButton onPress={handleRemoveService}>
          <Trash size={22} color={theme.COLORS.TEXT_BODY} />
        </RemoveButton>

        <DateInfo>
          {dateFormatter.format(new Date(service.created_at))}
        </DateInfo>
      </RightContent>
    </Container>
  );
}
