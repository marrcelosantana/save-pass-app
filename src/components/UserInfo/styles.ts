import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
  border-radius: 6px;
  margin-right: ${RFValue(8)}px;
`;

export const Info = styled.View`
  justify-content: center;
  margin-top: ${RFValue(6)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(12)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(10)}px;
`;
