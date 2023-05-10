import { Avatar, Container, Info, Subtitle, Title } from "./styles";

export function UserInfo() {
  return (
    <Container>
      <Avatar source={{ uri: "https://github.com/marrcelosantana.png" }} />

      <Info>
        <Title numberOfLines={1}>Olá, Marcelo</Title>
        <Subtitle>Sinta-se seguro aqui</Subtitle>
      </Info>
    </Container>
  );
}
