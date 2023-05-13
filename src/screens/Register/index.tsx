import { useState } from "react";
import { Pressable, View } from "react-native";

import { useTheme } from "styled-components/native";
import { CaretLeft, Eye, EyeSlash } from "phosphor-react-native";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

interface FormDataProps {
  name: string;
  email: string;
  password: string;
}

const registerSchema = yup.object({
  name: yup.string().trim().required("Informe o nome"),
  email: yup
    .string()
    .trim()
    .email("Email inválido")
    .required("Informe o email"),
  password: yup
    .string()
    .trim()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
});

export function Register() {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
  });

  const theme = useTheme();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleShowPassword() {
    setPasswordIsHidden(!passwordIsHidden);
  }

  function handleRegister(data: FormDataProps) {
    console.log(data);
    reset();
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
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Digite o nome..."
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </Form>

        <Form>
          <Label>E-mail</Label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Digite o e-mail..."
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
        </Form>

        <Form>
          <Label>Senha</Label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Digite a senha..."
                value={value}
                onChangeText={onChange}
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
            )}
          />
        </Form>

        <Button onPress={handleSubmit(handleRegister)}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
