import { Alert } from "react-native";
import { useAuth } from "@hooks/useAuth";

import {
  Avatar,
  Container,
  Info,
  ProfileButton,
  Subtitle,
  Title,
} from "./styles";

export function UserInfo() {
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    try {
      Alert.alert("Sair", "Tem certeza que deseja deslogar?", [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => signOut() },
      ]);
    } catch (error) {
      throw error;
    }
  }

  return (
    <Container>
      <ProfileButton onPress={handleSignOut}>
        <Avatar source={{ uri: user.picture }} resizeMode="cover" />
      </ProfileButton>

      <Info>
        <Title numberOfLines={1}>Olá, {user.given_name}</Title>
        <Subtitle>Sinta-se seguro aqui</Subtitle>
      </Info>
    </Container>
  );
}
