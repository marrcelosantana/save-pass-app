import { Platform } from "react-native";

import AppleLogo from "@assets/apple.svg";
import GoogleLogo from "@assets/google.svg";

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
  return (
    <Container>
      <Info>
        <Title>Hello,</Title>
        <Subtitle>Welcome to Save Pass!</Subtitle>
      </Info>

      <Actions>
        <SocialButton title="Sign in with Google" svg={GoogleLogo} />

        {Platform.OS === "ios" && (
          <SocialButton title="Sign in with Apple" svg={AppleLogo} />
        )}

        <FooterText>Choose an option</FooterText>
      </Actions>
    </Container>
  );
}
