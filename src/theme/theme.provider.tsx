import React, {ReactElement, useCallback, useState} from 'react';

import {ThemeContext} from './theme.context';
import {ThemeType} from './theme.type';

interface ThemeProviderProps {
  children: ReactElement | ReactElement[];
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const changeTheme = useCallback((value: ThemeType) => {
    setTheme(value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
