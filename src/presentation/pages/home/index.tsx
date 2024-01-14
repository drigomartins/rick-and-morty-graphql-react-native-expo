import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { TemplateRoot } from '@/presentation/template';
import { ItemList } from '@/presentation/components';
import { ItemDetail } from '@/presentation/components';
import { useTheme } from '@/presentation/context';
import { useDebounce } from '@/presentation/hooks';

import { useQueryCharacters } from '@/infra/graphql/requests';
import { CharacterList, CharacterShort } from '@/domain';

import { ContainerView, TextInputView, TitleView } from './style';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const { data, loading } = useQueryCharacters();
  const [characterList, setCharacterList] = useState<CharacterList>(
    data?.characters?.results
  );
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [idDetailInfo, setIdDetailInfo] = useState<string>('1');
  const [inputValue, setInputValue] = useState<string>('');

  const searchInputValue = useDebounce(inputValue, 500);

  const toggleOpenInfo = (id: string): void => {
    setOpenInfo(!openInfo);
    setIdDetailInfo(id);
  };

  const getTheme = (theme: string, light: string, dark: string): string => {
    return theme === 'light' ? light : dark;
  };

  const filterCharacters = (): void => {
    if (searchInputValue !== '') {
      const filter = data?.characters?.results.filter((data: CharacterShort) =>
        data.name.includes(searchInputValue)
      );
      setCharacterList(filter);
      return;
    }
    setCharacterList(data?.characters?.results);
  };

  useEffect(() => {
    setCharacterList(data?.characters?.results);
  }, [data]);

  useEffect(() => {
    filterCharacters();
  }, [searchInputValue]);

  if (loading) {
    return (
      <TemplateRoot>
        <ContainerView>
          <TitleView theme={theme}>Carregando...</TitleView>
        </ContainerView>
      </TemplateRoot>
    );
  }

  return (
    <TemplateRoot>
      <ContainerView>
        <TextInputView
          placeholder="Digite o nome do personagem"
          placeholderTextColor={getTheme(theme, '#e6e6e6', '#292d3e')}
          onChangeText={setInputValue}
          value={inputValue}
        />
        {characterList?.length == 0 && (
          <TitleView theme={theme}>Personagem não encontrado!</TitleView>
        )}
        <FlatList
          data={characterList}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemList
              id={item.id}
              image={item.image}
              name={item.name}
              onClick={() => toggleOpenInfo(item.id)}
            />
          )}
        />
      </ContainerView>
      {openInfo && (
        <ItemDetail id={idDetailInfo} onClose={() => toggleOpenInfo('')} />
      )}
    </TemplateRoot>
  );
};
