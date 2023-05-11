import styled, { css } from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

interface CardProps {
  isHidden: boolean;
}

export const Container = styled.View<CardProps>`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(72)}px;
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border: 1px solid
    ${({ isHidden, theme }) =>
      isHidden ? theme.COLORS.TEXT_BODY : theme.COLORS.LIGHT_BLUE};
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
`;

export const Subtitle = styled.Text<CardProps>`
  font-family: ${({ isHidden, theme }) =>
    isHidden ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.MEDIUM};
  color: ${({ isHidden, theme }) =>
    isHidden ? theme.COLORS.TEXT_BODY : theme.COLORS.BLUE_500};
  font-size: ${({ isHidden }) => (isHidden ? "14px" : "16px")};
`;

export const RemoveButton = styled.Pressable`
  margin-bottom: ${RFValue(30)}px;
  margin-right: ${RFValue(-8)}px;
`;
