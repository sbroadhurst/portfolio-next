import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'next/link'
import { Api, ContactPage, Face, Home, VideogameAsset, Menu } from '@mui/icons-material'
import { BottomNavigation, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import { useEffect, useState } from 'react'
import { BottomNavAction } from './styledComponents'

// const checkActiveRoute = (linkAddress) => {
//   const href = window.location.href
//   console.log(href.includes(linkAddress))

//   return href.includes(linkAddress)
// }

export const HeaderComponent = () => {
  const [mobileView, setMobileView] = useState(false)
  const [drawerOpen, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!drawerOpen)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false)
    }

    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {mobileView ? (
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <Menu />
            </IconButton>
            <Drawer
              {...{
                anchor: 'top',
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}>
              <List>
                <ListItemButton component={Link} href={''} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Home />
                  </IconButton>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} href={'projects'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Api />
                  </IconButton>
                  <ListItemText primary="Projects" />
                </ListItemButton>

                <ListItemButton component={Link} href={'games'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <VideogameAsset />
                  </IconButton>
                  <ListItemText primary="Games" />
                </ListItemButton>

                <ListItemButton component={Link} href={'about'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <Face />
                  </IconButton>
                  <ListItemText primary="About Me" />
                </ListItemButton>

                <ListItemButton component={Link} href={'contact'} onClick={toggleDrawer}>
                  <IconButton onClick={toggleDrawer}>
                    <ContactPage />
                  </IconButton>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </List>
            </Drawer>
          </Toolbar>
        ) : (
          displayDesktop()
        )}
      </AppBar>
    </Box>
  )
}

const displayDesktop = () => {
  return (
    <Toolbar style={{ justifyContent: 'space-around' }}>
      <BottomNavigation showLabels style={{ background: 'transparent' }}>
        <BottomNavAction component={Link} href={'/'} label="Home" icon={<Home />} />
        <BottomNavAction component={Link} href={'projects'} label="Projects" icon={<Api />} />
        <BottomNavAction component={Link} href={'games'} label="Games" icon={<VideogameAsset />} />
        <BottomNavAction component={Link} href={'about'} label="About Me" icon={<Face />} />
        <BottomNavAction component={Link} href={'contact'} label="Contact" icon={<ContactPage />} />
      </BottomNavigation>
    </Toolbar>
  )
}

export default HeaderComponent
