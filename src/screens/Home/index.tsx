import { useState } from "react";
import { FlatList } from "react-native";

import { MagnifyingGlass, Plus } from "phosphor-react-native";
import uuid from "react-native-uuid";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { Card } from "@components/Card";

import { ServiceDTO } from "@models/ServiceDTO";

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
} from "./styles";

export function Home() {
  const [data, setData] = useState<ServiceDTO[]>([
    {
      id: String(uuid.v4()),
      name: "Plataforma Rockeseat",
      email: "marcelo@email.com",
      password: "4878f0fgsbhfk",
    },

    {
      id: String(uuid.v4()),
      name: "Twitch",
      email: "marcelinho19@email.com",
      password: "36844-09ni",
    },

    {
      id: String(uuid.v4()),
      name: "Linkedin",
      email: "marcelosantana@email.com",
      password: "PASS-408850F=@",
    },
  ]);

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function goToRegister() {
    navigator.navigate("register");
  }

  return (
    <Container>
      <Header>
        <UserInfo />

        <AddButton onPress={goToRegister}>
          <Plus size={22} color="#fff" />
        </AddButton>
      </Header>

      <Content>
        <Form>
          <Input w="85%" placeholder="Qual senha você procura?" />
          <SearchButton>
            <MagnifyingGlass size={22} />
          </SearchButton>
        </Form>

        <Info>
          <Title numberOfLines={1}>Suas senhas</Title>
          <Subtitle numberOfLines={1}>01 ao total</Subtitle>
        </Info>

        <CardList>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card service={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        </CardList>
      </Content>
    </Container>
  );
}
