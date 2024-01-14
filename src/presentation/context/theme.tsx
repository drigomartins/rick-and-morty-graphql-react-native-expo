import { createContext, useContext, useState } from 'react';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext<any>('light');

interface Props extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const data = useContext(ThemeContext);
  const { theme, setTheme } = data;
  return { theme, setTheme };
}
