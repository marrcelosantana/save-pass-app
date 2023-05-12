import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Container, ImageContainer, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SocialButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Title>{title}</Title>
    </Container>
  );
}
