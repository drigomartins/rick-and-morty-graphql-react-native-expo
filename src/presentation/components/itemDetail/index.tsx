import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  Layout,
} from 'react-native-reanimated';

import { useTheme } from '@/presentation/context';

import { useQueryCharacter } from '@/infra/graphql';
import { Character } from '@/domain';

import {
  BoxView,
  ContentAlignView,
  ContentCloseView,
  ContentImageView,
  ContentInfoView,
  ImageView,
  InfoView,
  TextView,
  TitleView,
  animatedShadowStyle,
  animatedContentStyle,
} from './style';

interface Props {
  id: string;
  onClose: () => void;
}

export const ItemDetail: React.FC<Props> = ({ id, onClose }) => {
  const { theme } = useTheme();
  const { data, loading } = useQueryCharacter(id);
  const [character, setCharacter] = useState<Character>(data?.character);

  const formatDate = (isoDate: string): string => {
    const d = new Date(isoDate);
    return d.toLocaleDateString('en-GB');
  };

  useEffect(() => {
    setCharacter(data?.character);
  }, [data]);

  return (
    <Animated.View
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
      style={animatedShadowStyle(theme)}
    >
      {loading && (
        <Animated.View style={animatedContentStyle(theme)}>
          <ContentImageView>
            <TitleView theme={theme}>Carregando...</TitleView>
          </ContentImageView>
        </Animated.View>
      )}
      {!loading && (
        <Animated.View
          layout={Layout}
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={animatedContentStyle(theme)}
        >
          <ContentImageView>
            <ImageView
              source={{
                uri: character?.image,
              }}
            />
          </ContentImageView>
          <ContentInfoView>
            <TextView theme={theme}>Nome:</TextView>
            <TitleView theme={theme}>{character?.name}</TitleView>
            <ContentAlignView>
              <BoxView>
                <TextView theme={theme}>Genero:</TextView>
                <InfoView theme={theme}>{character?.gender}</InfoView>
              </BoxView>
              <BoxView>
                <TextView theme={theme}>Especie:</TextView>
                <InfoView theme={theme}>{character?.species}</InfoView>
              </BoxView>
            </ContentAlignView>
            <ContentAlignView>
              <BoxView>
                <TextView theme={theme}>Status:</TextView>
                <InfoView theme={theme}>{character?.status}</InfoView>
              </BoxView>
              <BoxView>
                <TextView theme={theme}>Criado em:</TextView>
                <InfoView theme={theme}>
                  {formatDate(character?.created)}
                </InfoView>
              </BoxView>
            </ContentAlignView>
          </ContentInfoView>
          <TouchableOpacity onPress={onClose}>
            <ContentCloseView>Fechar</ContentCloseView>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
};
