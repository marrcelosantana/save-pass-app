import { MagnifyingGlass, Plus } from "phosphor-react-native";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";

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
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <UserInfo />

        <AddButton>
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
          <Title>Suas senhas</Title>
          <Subtitle>01 ao total</Subtitle>
        </Info>
      </Content>
    </Container>
  );
}
