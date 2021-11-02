var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from './BreadCrumb';
import Copyright from './Copyright';
import Header from './Header';
import Navigator from './Navigator';
import { createTheme } from '@material-ui/core/styles';
import { useLayoutContext } from './context/LayoutContext';
var theme = createTheme({
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
theme = __assign(__assign({}, theme), { overrides: {
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
            root: (_a = {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0
                },
                _a[theme.breakpoints.up('md')] = {
                    padding: 0,
                    minWidth: 0,
                },
                _a),
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
    } });
var drawerWidth = 200;
var useStyles = makeStyles(function (_) {
    var _a;
    return createStyles({
        root: {
            display: 'flex',
            minHeight: '100vh',
        },
        drawer: (_a = {},
            _a[theme.breakpoints.up('sm')] = {
                width: drawerWidth,
                flexShrink: 0,
            },
            _a),
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
            width: "calc(100% - " + drawerWidth + "px)",
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
        toolbar: __assign({ zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1) }, theme.mixins.toolbar),
    });
});
var Desktop = function (props) {
    var _a, _b;
    var children = props.children;
    var classes = useStyles(props);
    var mostrarCabecera = props.mostrarCabecera;
    var _c = useLayoutContext(), open = _c.open, setOpen = _c.setOpen, showBreadCrumb = _c.showBreadCrumb, footer = _c.footer;
    var bread = useSelector(function (state) {
        return state.storeRuta;
    });
    var handleDrawerControl = function () {
        setOpen(!open);
    };
    return (_jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsx(CssBaseline, {}, void 0), _jsx("div", { children: _jsx(AppBar, __assign({ position: "fixed", elevation: 0, className: clsx(classes.appBar, (_a = {},
                            _a[classes.appBarShift] = open,
                            _a)) }, { children: _jsxs(Toolbar, { children: [_jsx(IconButton, __assign({ color: "inherit", "aria-label": "open drawer", onClick: handleDrawerControl, edge: "start", className: clsx(classes.menuButton, (_b = {},
                                        _b[classes.hide] = open,
                                        _b)) }, { children: _jsx(MenuIcon, {}, void 0) }), void 0), mostrarCabecera && _jsx(Header, {}, void 0)] }, void 0) }), void 0) }, void 0), _jsx(Navigator, { handleDrawerClose: handleDrawerControl, open: open }, void 0), _jsxs("div", __assign({ className: classes.app }, { children: [_jsxs("main", __assign({ className: classes.main }, { children: [_jsx("div", { className: classes.toolbar }, void 0), showBreadCrumb && (_jsx("div", { children: _jsx(Toolbar, __assign({ style: { minHeight: 'inherit', background: '#009be5' } }, { children: bread && _jsx(BreadCrumb, { enlaces: bread }, void 0) }), void 0) }, void 0)), children] }), void 0), footer && (_jsx("footer", __assign({ className: classes.footer }, { children: _jsx(Copyright, {}, void 0) }), void 0))] }), void 0)] }), void 0) }), void 0));
};
export default memo(Desktop);
