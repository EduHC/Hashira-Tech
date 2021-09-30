import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Circle } from 'react-native-svg';

interface Props {
  stage: boolean;
}

export const Container = styled.View`
  width: 60%;
  height: ${RFValue(30)}px;

  align-self: center;
  flex-direction: row;

  margin-top: ${RFValue(45)}px;
`;

export const BallOne = styled(Circle).attrs(({ theme }) => ({
  cx: 16,
  cy: 14,
  r: 8,
  stroke: theme.colors.components,
  strokeWidth: '1'
}))`
`;

export const BallTwo = styled(Circle).attrs(({ theme }) => ({
  cx: 75,
  cy: 14,
  r: 8,
  stroke: theme.colors.components,
  strokeWidth: '1'
}))`
`;

export const BallThree = styled(Circle).attrs(({ theme }) => ({
  cx: 140,
  cy: 14,
  r: 8,
  stroke: theme.colors.components,
  strokeWidth: '1'
}))`
`;

export const BallFour = styled(Circle).attrs(({ theme }) => ({
  cx: 200,
  cy: 14,
  r: 8,
  stroke: theme.colors.components,
  strokeWidth: '1'
}))`
`;