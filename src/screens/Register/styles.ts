import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  padding: ${RFValue(32)}px ${RFValue(20)}px 0px ${RFValue(20)}px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-right: ${RFValue(12)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px ${RFValue(20)}px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(18)}px;
`;

export const Label = styled.Text`
  margin-bottom: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;

export const Button = styled.Pressable`
  width: 100%;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  margin-top: ${RFValue(20)}px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: 16px;
`;
