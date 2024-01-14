import { StyleProp, ViewStyle } from 'react-native';
import { AnimateStyle } from 'react-native-reanimated';
import styled from 'styled-components/native';

type Props = {
  theme: string;
};

export const animatedContentStyle = (
  theme: string
): StyleProp<AnimateStyle<StyleProp<ViewStyle>>> => {
  return {
    width: '100%',
    height: 400,
    padding: 10,
    backgroundColor: theme === 'light' ? '#FFF' : '#292d3e',
    position: 'absolute',
    bottom: 0,
  };
};

export const animatedShadowStyle = (
  theme: string
): StyleProp<AnimateStyle<StyleProp<ViewStyle>>> => {
  return {
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme === 'light' ? '#00000050' : '#00000099',
  };
};

export const ContentImageView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageView = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-top: -100px;
`;
export const ContentInfoView = styled.View`
  padding: 10px;
  margin-top: 20px;
  background-color: #08b7ce50;
  border-radius: 10px;
`;
export const TextView = styled.Text<Props>`
  font-size: 10px;
  color: ${(props) => (props.theme === 'light' ? '#525252' : '#FFF')};
`;
export const TitleView = styled.Text<Props>`
  font-family: 'IndieFlower_400Regular';
  font-size: 24px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;
export const InfoView = styled.Text<Props>`
  font-family: 'IndieFlower_400Regular';
  font-size: 18px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;
export const ContentCloseView = styled.Text`
  padding: 10px;
  margin-top: 20px;
  background-color: #08b7ce;
  border-radius: 10px;
  text-align: center;
  font-weight: 800;
  color: #fff;
`;
export const ContentAlignView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BoxView = styled.View`
  width: 50%;
`;
