import { createTheme } from '@mui/material'
import { Theme as MUITheme, ThemeOptions as MUIThemeOptions } from '@mui/material/styles'
import { useMemo } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import { selectMode } from './features/theme/themeSlice';
import { themeSettings } from './theme';

interface ThemeOptions extends MUIThemeOptions {
  palette?: {},
  mode: {}
}

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

function App() {
  const mode = useAppSelector(selectMode)
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
