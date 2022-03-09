import '../styles/globals.css'
import AssetProvider from '../contexts/assetContext'
import React, { useEffect, useState } from 'react'

import { createTheme, IconButton, ThemeProvider } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { CssBaseline } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'

const setLocalStorage = (darkModeActive) => {
  localStorage.setItem('darkMode', darkModeActive)
}

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  useEffect(() => {
    const darkModeActive = localStorage.getItem('darkMode')
    if (darkModeActive !== null) {
      console.log('darkModeActive is : ' + darkModeActive)
      setDarkMode(JSON.parse(darkModeActive))
    }
  }, [darkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AssetProvider>
        <Header />
        <IconButton
          sx={{
            m: 1,
            position: 'absolute',
            right: 0,
            top: 0,
            color: theme.palette.mode === 'light' ? 'black' : 'white',
          }}
          onClick={() => {
            setDarkMode(!darkMode)
            setLocalStorage(!darkMode)
          }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <div style={{ marginBottom: 60 }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </AssetProvider>
    </ThemeProvider>
  )
}

export default MyApp
