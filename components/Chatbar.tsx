import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { TextField, Grid } from '@mui/material'

const drawerWidth = 240

export function Chatbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <Grid item xs={9}>
          <List>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Hey man, What's up ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Hey, Iam Good! What about you ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="10:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField id="outlined-basic-email" label="Type Something" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  )
}
