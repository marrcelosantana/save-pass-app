import { useTheme } from "styled-components/native";
import { Spinner } from "native-base";
import { Container } from "./styles";

export function Loading() {
  const theme = useTheme();

  return (
    <Container>
      <Spinner size="lg" color={theme.COLORS.BLUE_500} />
    </Container>
  );
}
