import { Platform } from "react-native";

import AppleLogo from "@assets/apple.svg";
import GoogleLogo from "@assets/google.svg";

import { useAuth } from "@hooks/useAuth";
import { SocialButton } from "@components/SocialButton";

import {
  Actions,
  Container,
  FooterText,
  Info,
  Subtitle,
  Title,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  return (
    <Container>
      <Info>
        <Title>Hello!</Title>
        <Subtitle>Welcome to Save Pass :)</Subtitle>
      </Info>

      <Actions>
        <SocialButton
          title="Sign in with Google"
          svg={GoogleLogo}
          onPress={signInWithGoogle}
        />

        {Platform.OS === "ios" && (
          <SocialButton
            title="Sign in with Apple"
            svg={AppleLogo}
            onPress={signInWithApple}
          />
        )}

        <FooterText>Choose an option</FooterText>
      </Actions>
    </Container>
  );
}
