import { Input as NativeBaseInput, IInputProps } from "native-base";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: IInputProps) {
  const theme = useTheme();

  return (
    <NativeBaseInput
      bg={theme.COLORS.SHAPE}
      height="48px"
      borderRadius={0}
      fontFamily={theme.FONT_FAMILY.REGULAR}
      fontSize={14}
      color={theme.COLORS.TEXT}
      _focus={{
        bg: theme.COLORS.SHAPE,
        borderColor: theme.COLORS.TEXT_BODY,
      }}
      {...rest}
    />
  );
}
