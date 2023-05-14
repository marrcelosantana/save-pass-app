import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

interface CardProps {
  isHidden: boolean;
}

export const Container = styled(LinearGradient).attrs({
  end: { x: 1, y: 0 },
})`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(82)}px;
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid ${({ theme }) => theme.COLORS.TEXT_BODY};
`;

export const LeftContent = styled.View`
  flex-direction: row;
`;

export const Button = styled.Pressable`
  margin-right: 16px;
`;

export const Info = styled.View``;

export const Title = styled.Text<CardProps>`
  font-family: ${({ isHidden, theme }) =>
    isHidden ? theme.FONT_FAMILY.MEDIUM : theme.FONT_FAMILY.REGULAR};
  color: ${({ isHidden, theme }) =>
    isHidden ? theme.COLORS.TEXT : theme.COLORS.TEXT_BODY};
  font-size: ${({ isHidden }) => (isHidden ? "16px" : "14px")};
  text-transform: capitalize;
`;

export const Subtitle = styled.Text<CardProps>`
  font-family: ${({ isHidden, theme }) =>
    isHidden ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.MEDIUM};
  color: ${({ isHidden, theme }) =>
    isHidden ? theme.COLORS.TEXT_BODY : theme.COLORS.BLUE_500};
  font-size: ${({ isHidden }) => (isHidden ? "14px" : "16px")};
  text-transform: lowercase;
`;

export const RightContent = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
`;

export const DateInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT_BODY};
  font-size: ${RFValue(10)}px;
`;

export const RemoveButton = styled.Pressable`
  margin-bottom: ${RFValue(30)}px;
  margin-right: ${RFValue(-4)}px;
  margin-top: ${RFValue(-4)}px;
`;
