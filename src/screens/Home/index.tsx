import { Plus } from "phosphor-react-native";

import { UserInfo } from "@components/UserInfo";

import {
  Container,
  Content,
  Header,
  Title,
  Info,
  Subtitle,
  AddButton,
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
        <Info>
          <Title>Suas senhas</Title>
          <Subtitle>01 ao total</Subtitle>
        </Info>
      </Content>
    </Container>
  );
}
