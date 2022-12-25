import { useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider} from '@mui/material'
import { useAppSelector } from './app/hooks'
import { selectMode } from './features/theme/themeSlice'
import { themeSettings } from './theme'
import './App.css'
import Layout from './features/Layout'
import Dashboard from './features/Dashboard'
import Products from './features/Products'
import Customers from './features/Customers'

function App() {
  const mode = useAppSelector(selectMode) as PaletteMode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])  

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/customers' element={<Customers />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
