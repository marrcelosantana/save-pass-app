import { useState } from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "styled-components/native";
import { CaretLeft, Eye, EyeSlash } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";

import {
  Button,
  ButtonText,
  Container,
  Content,
  Form,
  Header,
  HeaderTitle,
  Label,
} from "./styles";

export function Register() {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const theme = useTheme();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleShowPassword() {
    setPasswordIsHidden(!passwordIsHidden);
  }

  return (
    <Container>
      <Header>
        <Pressable onPress={() => navigator.goBack()}>
          <CaretLeft size={28} color={theme.COLORS.TEXT} />
        </Pressable>
        <HeaderTitle>Cadastro de senha</HeaderTitle>
        <View />
      </Header>

      <Content>
        <Form>
          <Label>Nome do serviço</Label>
          <Input />
        </Form>

        <Form>
          <Label>E-mail</Label>
          <Input />
        </Form>

        <Form>
          <Label>Senha</Label>
          <Input
            secureTextEntry={passwordIsHidden}
            rightElement={
              <Pressable onPress={handleShowPassword}>
                {passwordIsHidden ? (
                  <EyeSlash
                    size={22}
                    color={theme.COLORS.TEXT_BODY}
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <Eye
                    size={24}
                    color={theme.COLORS.TEXT_BODY}
                    style={{ marginRight: 10 }}
                  />
                )}
              </Pressable>
            }
          />
        </Form>

        <Button>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
