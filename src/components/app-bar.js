// react/utils
import clsx from 'clsx'
import React from 'react'

// mine
import Page from '../pages/page'
import ListItemLink from './list-item-link'

// mui-icons
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

// mui-core
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

// mui-styles
import { makeStyles } from '@material-ui/core/styles'

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContet: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}))

export default function LeftDrawerRouter(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              AppBar using react-router
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <div className={classes.root}>
            <Paper elevation={0}>
              <List aria-label="All pages being routed with react-router">
                {props.pages.length === 0
                  ? (
                    <ListItemLink
                      to="/"
                      primary="Home"
                      alt="Dashboard"
                      key="Dashboard"
                      icon={<HomeIcon />}
                    />
                  )
                  : [...props.pages.map(page => {
                    return (
                      <ListItemLink
                        to={page.path}
                        alt={page.alt}
                        icon={page.icon}
                        key={page.primary}
                        primary={page.primary}
                      />
                    )
                  })]
                }
              </List>
            </Paper>
          </div>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {props.pages.length === 0
              ? (<Route key="Dashboard" exact path="/"><Page /></Route>)
              : [...props.pages.map(page => {
                return (
                  page.path === '/'
                    ? (
                      <Route key={page.primary} exact path={page.path}>
                        <Page data={page.data} component={page.component} />
                      </Route>
                    )
                    : (
                      <Route key={page.primary} path={page.path}>
                        <Page data={page.data} component={page.component} />
                      </Route>
                    )
                )
              })]}
          </Switch>
        </main>
      </div>
    </Router>
  )
}
