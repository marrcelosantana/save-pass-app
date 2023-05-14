import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useToast } from "native-base";

import { useTheme } from "styled-components/native";
import { MagnifyingGlass, Plus, SmileySad } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { Card } from "@components/Card";
import { Loading } from "@components/Loading";

import { useService } from "@hooks/useService";
import { useAuth } from "@hooks/useAuth";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Content,
  Header,
  Title,
  Info,
  Subtitle,
  AddButton,
  Form,
  SearchButton,
  CardList,
  EmptyContent,
  EmptyTitle,
} from "./styles";

type FormDataProps = {
  name: string;
};

const searchSchema = yup.object({
  name: yup.string(),
});

export function Home() {
  const { user } = useAuth();
  const { services, setServices, loadServices } = useService();

  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const toast = useToast();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  const { control, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(searchSchema),
  });

  function goToRegister() {
    navigator.navigate("register");
  }

  async function handleSearch({ name }: FormDataProps) {
    try {
      setIsLoading(true);
      if (name.length === 0) {
        loadServices(user.id);
      }
      const filtered = services.filter((service) =>
        service.name.toLowerCase().includes(name.toLowerCase())
      );
      setServices(filtered);
    } catch (error) {
      await toast.show({
        title: "Os dados já estão carregados!",
        placement: "top",
        background: "orange.500",
        color: "gray.100",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadServices(user.id);
  }, []);

  return (
    <>
      {services ? (
        <Container>
          <Header>
            <UserInfo />

            <AddButton onPress={goToRegister}>
              <Plus size={22} color="#fff" />
            </AddButton>
          </Header>

          <Content>
            <Form>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    w="85%"
                    placeholder="Qual senha você procura?"
                    value={value}
                    onChangeText={onChange}
                    autoCapitalize="none"
                    autoComplete="off"
                  />
                )}
              />
              <SearchButton
                onPress={handleSubmit(handleSearch)}
                isLoading={isLoading}
              >
                <MagnifyingGlass size={22} />
              </SearchButton>
            </Form>

            <Info>
              <Title numberOfLines={1}>Suas senhas</Title>
              {services.length > 0 && (
                <Subtitle numberOfLines={1}>01 ao total</Subtitle>
              )}
            </Info>

            <CardList>
              <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card service={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
                ListEmptyComponent={() => (
                  <EmptyContent>
                    <SmileySad size={42} color={theme.COLORS.TEXT_BODY} />
                    <EmptyTitle>Sem registros no momento...</EmptyTitle>
                  </EmptyContent>
                )}
              />
            </CardList>
          </Content>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
