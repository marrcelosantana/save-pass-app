import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  padding: ${RFValue(20)}px ${RFValue(20)}px 0px ${RFValue(20)}px;
  flex-direction: row;
`;

export const AddButton = styled.Pressable`
  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
  border: 1px dotted ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px ${RFValue(20)}px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${RFValue(-20)}px;
`;

export const SearchButton = styled.Pressable`
  width: 15%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(10)}px;
`;
