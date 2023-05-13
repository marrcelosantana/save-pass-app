import { useEffect } from "react";
import { FlatList } from "react-native";

import { MagnifyingGlass, Plus } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { Card } from "@components/Card";
import { Loading } from "@components/Loading";

import { useService } from "@hooks/useService";
import { useAuth } from "@hooks/useAuth";

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
  const { user } = useAuth();
  const { services, loadServices } = useService();

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function goToRegister() {
    navigator.navigate("register");
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
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card service={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
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
