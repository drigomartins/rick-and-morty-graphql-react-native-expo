import { Platform, StatusBar as StatusBarReact } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  theme: string;
};

const getStatusBarHeight = (): number => {
  if (Platform.OS === 'android') {
    return (StatusBarReact.currentHeight || 0) + 10;
  }
  return 10;
};

export const ContainerView = styled.View<Props>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === 'light' ? '#FFF' : '#292d3e'};
`;
export const HeaderView = styled.View<Props>`
  width: 100%;
  background-color: ${(props) =>
    props.theme === 'light' ? '#FFF' : '#292d3e'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${getStatusBarHeight()}px 25px 28px;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #08b7ce;
  shadow-opacity: 1;
  elevation: 20;
  position: absolute;
  top: 0px;
`;
export const ImageView = styled.Image`
  width: 100px;
  height: 30px;
`;
export const AlignHeaderView = styled.View`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SpaceHeaderView = styled.View`
  width: 25px;
  height: 25px;
`;
export const ToggleThemeView = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
`;
