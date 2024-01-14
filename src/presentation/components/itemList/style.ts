import styled from 'styled-components/native';

type Props = {
  theme: string;
};

export const ContentView = styled.TouchableOpacity`
  width: 85%;
  margin-bottom: 25px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  shadow-color: #08b7ce;
  shadow-opacity: 1;
  elevation: 20;
  border-radius: 50px;
`;
export const ImageView = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;
export const TitleView = styled.Text<Props>`
  margin-top: -15px;
  background-color: #08b7ce;
  padding: 5px 15px;
  border-radius: 50px;
  color: ${(props) => (props.theme === 'light' ? '#FFF' : '#292d3e')};
  font-family: 'IndieFlower_400Regular';
  font-size: 14px;
  position: absolute;
  bottom: -15px;
`;
