import { useTheme } from "styled-components/native";

import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface Props extends IInputProps {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const theme = useTheme();
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
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

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
