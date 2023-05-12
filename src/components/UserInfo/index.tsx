import { useAuth } from "@hooks/useAuth";
import { Avatar, Container, Info, Subtitle, Title } from "./styles";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar source={{ uri: user.picture }} resizeMode="cover" />

      <Info>
        <Title numberOfLines={1}>Olá, {user.given_name}</Title>
        <Subtitle>Sinta-se seguro aqui</Subtitle>
      </Info>
    </Container>
  );
}
