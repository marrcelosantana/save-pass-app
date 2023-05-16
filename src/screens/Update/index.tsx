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

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";
import { ServiceDTO } from "@models/ServiceDTO";

import { useService } from "@hooks/useService";

import {
  SaveButton,
  ButtonText,
  Container,
  Content,
  Form,
  Header,
  HeaderTitle,
  Label,
} from "./styles";

type RouteParams = {
  service: ServiceDTO;
};

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

export function Update() {
  const { updateService } = useService();

  const route = useRoute();
  const { service } = route.params as RouteParams;

  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
    values: {
      name: service.name,
      email: service.email,
      password: service.password,
    },
  });

  const theme = useTheme();
  const toast = useToast();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleShowPassword() {
    setPasswordIsHidden(!passwordIsHidden);
  }

  async function handleUpdate({ name, email, password }: FormDataProps) {
    const newService: ServiceDTO = {
      id: service.id,
      name,
      email,
      password,
      created_at: service.created_at,
    };

    try {
      setIsLoading(true);

      await updateService(service.id, newService);

      await toast.show({
        title: "Registro atualizado!",
        placement: "top",
        background: "green.500",
        color: "gray.100",
      });

      navigator.navigate("home");
    } catch (error) {
      await toast.show({
        title: "Não foi possível atualizar!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Pressable onPress={() => navigator.goBack()}>
            <CaretLeft size={28} color={theme.COLORS.TEXT} />
          </Pressable>
          <HeaderTitle>Atualizar senha</HeaderTitle>
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

          <SaveButton
            onPress={handleSubmit(handleUpdate)}
            isLoading={isLoading}
          >
            <ButtonText>Atualizar</ButtonText>
          </SaveButton>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
