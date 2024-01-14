import styled from 'styled-components/native';

type Props = {
  theme: string;
};

export const ContainerView = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 85px;
`;
export const TitleView = styled.Text<Props>`
  font-family: 'IndieFlower_400Regular';
  font-size: 24px;
  text-align: center;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
`;
export const TextInputView = styled.TextInput`
  width: 100%;
  margin-top: -10px;
  margin-bottom: 10px;
  background-color: #08b7ce;
  border-radius: 50px;
  padding: 5px 12px;
  color: #fff;
`;
