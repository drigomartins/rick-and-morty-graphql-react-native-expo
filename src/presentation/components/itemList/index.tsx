import Animated, {
  FadeInRight,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';

import { useTheme } from '@/presentation/context';

import { ContentView, ImageView, TitleView } from './style';

interface Props {
  id: string;
  name: string;
  image: string;
  onClick: () => void;
}

export const ItemList: React.FC<Props> = ({ image, name, onClick }) => {
  const { theme } = useTheme();

  return (
    <Animated.View
      layout={Layout}
      entering={FadeInRight}
      exiting={FadeOutRight}
      style={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ContentView onPress={onClick}>
        <ImageView
          source={{
            uri: image,
          }}
        />
        <TitleView theme={theme}>{name}</TitleView>
      </ContentView>
    </Animated.View>
  );
};
