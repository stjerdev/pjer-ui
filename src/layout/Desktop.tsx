import { AppBar, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import clsx from 'clsx';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from './BreadCrumb';
import Copyright from './Copyright';
import Header from './Header';
import Navigator from './Navigator';
import { createTheme } from '@material-ui/core/styles' 
import { IRuta } from '../store/reducers/rutasReducer';
import { useLayoutContext } from './context/LayoutContext';

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      root: {
        minWidth: '30px',
      },
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: '#fff',
        textDecorationColor: '#0c2439',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '0.5rem',
        },
        '*::-webkit-scrollbar-track': {
          background: '#fff',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#009be5',
          borderRadius: '4px',
          '&:active': {
            background: '#f50057',
          },
          '&:hover': {
            background: '#f50057',
          },
        },
      },
    },
  },
};

const drawerWidth = 200;

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    main: {
      flex: 1,
      background: '#eaeff1',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#eaeff1',
    },
    'pdfobject-container': {
      height: '100%',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    toolbar: {
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);

type Props = {
  children: React.ReactNode;
  className?: string;
  mostrarCabecera: boolean;
};

const Desktop = function (props: Props) {
  const { children } = props;
  const classes = useStyles(props);
  const mostrarCabecera = props.mostrarCabecera;
  const { open, setOpen, showBreadCrumb, footer } = useLayoutContext();

  const bread = useSelector<any, IRuta>((state) => {
    return state.storeRuta;
  });

  const handleDrawerControl = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div>
          <AppBar
            position="fixed"
            elevation={0}
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerControl}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              {mostrarCabecera && <Header />}
            </Toolbar>
          </AppBar>
        </div>
        <Navigator handleDrawerClose={handleDrawerControl} open={open} />
        <div className={classes.app}>
          <main className={classes.main}>
            <div className={classes.toolbar} />
            {showBreadCrumb && (
              <div>
                <Toolbar
                  style={{ minHeight: 'inherit', background: '#009be5' }}
                >
                  {bread && <BreadCrumb enlaces={bread} />}
                </Toolbar>
              </div>
            )}

            {children}
          </main>
          {footer && (
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default memo(Desktop);
