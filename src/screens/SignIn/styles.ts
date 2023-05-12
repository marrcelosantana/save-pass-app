import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  padding: ${RFValue(280)}px ${RFValue(20)}px ${RFValue(80)}px ${RFValue(20)}px;
`;

export const Info = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: #fff;
`;

export const Actions = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const FooterText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: #fff;
  font-size: ${RFValue(12)}px;
`;
