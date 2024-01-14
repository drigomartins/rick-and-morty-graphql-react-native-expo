import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  useFonts,
  IndieFlower_400Regular,
} from '@expo-google-fonts/indie-flower';

import { useTheme } from '@/presentation/context';

import {
  AlignHeaderView,
  ContainerView,
  HeaderView,
  ImageView,
  SpaceHeaderView,
  ToggleThemeView,
} from './style';

interface Props extends React.PropsWithChildren {}

export const TemplateRoot: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  const getTheme = (theme: string, light: string, dark: string): string => {
    return theme === 'light' ? light : dark;
  };

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <SafeAreaView>
      <ContainerView theme={theme}>
        <StatusBar
          animated={true}
          backgroundColor={getTheme(theme, '#FFF', '#292d3e')}
          style={getTheme(theme, 'dark', 'light')}
        />
        <HeaderView theme={theme}>
          <AlignHeaderView>
            <SpaceHeaderView />
            <ImageView
              source={require('../../../assets/Rick-And-Morty-Logo.png')}
            />
            <ToggleThemeView
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Ionicons
                name={getTheme(theme, 'moon', 'sunny')}
                size={25}
                color={'#08b7ce'}
              />
            </ToggleThemeView>
          </AlignHeaderView>
        </HeaderView>
        {children}
      </ContainerView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
