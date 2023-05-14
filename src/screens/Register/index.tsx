import { useState } from "react";
import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useToast } from "native-base";
import { useTheme } from "styled-components/native";
import { CaretLeft, Eye, EyeSlash } from "phosphor-react-native";

import uuid from "react-native-uuid";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";
import { ServiceDTO } from "@models/ServiceDTO";

import { useAuth } from "@hooks/useAuth";
import { useService } from "@hooks/useService";

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

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

const registerSchema = yup.object({
  name: yup.string().trim().required("Informe o nome."),
  email: yup
    .string()
    .trim()
    .email("Email inválido.")
    .required("Informe o email."),
  password: yup
    .string()
    .trim()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 dígitos."),
});

export function Register() {
  const { user } = useAuth();
  const { registerService } = useService();

  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
  });

  const theme = useTheme();
  const toast = useToast();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleShowPassword() {
    setPasswordIsHidden(!passwordIsHidden);
  }

  async function handleRegister({ name, email, password }: FormDataProps) {
    const newService: ServiceDTO = {
      id: String(uuid.v4()),
      name,
      email,
      password,
      created_at: new Date(),
    };

    try {
      await registerService(newService, user.id);
      reset();

      await toast.show({
        title: "Registro efetuado!",
        placement: "top",
        background: "green.500",
        color: "gray.100",
      });

      navigator.navigate("home");
    } catch (error) {
      await toast.show({
        title: "Não foi possível registrar!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  errorMessage={errors.name?.message}
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
                  errorMessage={errors.email?.message}
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
                  errorMessage={errors.password?.message}
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
    </TouchableWithoutFeedback>
  );
}
