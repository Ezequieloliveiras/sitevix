import React, { useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import Link from 'next/link'


const anchorValues = ['left']

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      ((event.key === 'Tab') || (event.key === 'Shift'))
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: (anchor === 'top' || anchor === 'bottom') ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inicío'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href='/'>
              <ListItemIcon >
                <HomeIcon sx={{ color: '#ef6c00' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Suporte'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href='/pages/support'>
              <ListItemIcon >
                <ContactSupportIcon sx={{ color: '#ef6c00' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Enviar email'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href='/pages/contact'>
              <ListItemIcon >
                <AttachEmailIcon sx={{ color: '#ef6c00' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        {['Whatsapp'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href='https://api.whatsapp.com/send?phone=27997337338'>
              <ListItemIcon>
                  <WhatsAppIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  )

  return (
    <div>
      {anchorValues.map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: '#ef6c00' }} /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
