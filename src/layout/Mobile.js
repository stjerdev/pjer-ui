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
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { createStyles } from '@material-ui/core/styles';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from './BreadCrumb';
import Copyright from './Copyright';
import HeaderMobile from './HeaderMobile';
import NavigatorMobile from './NavigatorMobile';
import { createTheme } from '@material-ui/core/styles';
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
                backgroundImage: 'url(/static/nav.png)',
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
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
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
                    width: '0.3rem',
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
        app: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(0, 155, 229)',
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
    });
});
var Mobile = function (props) {
    var children = props.children;
    var classes = useStyles(props);
    var mostrarCabecera = props.mostrarCabecera;
    var _a = useState(false), mobileOpen = _a[0], setMobileOpen = _a[1];
    var handleDrawerToggle = function () {
        setMobileOpen(!mobileOpen);
    };
    var bread = useSelector(function (state) {
        return state.storeRuta;
    });
    return (_jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsx(CssBaseline, {}, void 0), _jsxs("nav", __assign({ className: classes.drawer }, { children: [_jsx(Hidden, __assign({ smUp: true, implementation: "js" }, { children: _jsx(NavigatorMobile, { PaperProps: { style: { width: drawerWidth } }, variant: "temporary", open: mobileOpen, onClose: handleDrawerToggle }, void 0) }), void 0), _jsx(Hidden, __assign({ xsDown: true, implementation: "css" }, { children: _jsx(NavigatorMobile, { PaperProps: { style: { width: drawerWidth } } }, void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: classes.app }, { children: [mostrarCabecera && (_jsx(HeaderMobile, { onDrawerToggle: handleDrawerToggle }, void 0)), bread && _jsx(BreadCrumb, { enlaces: bread }, void 0), _jsx("main", __assign({ className: classes.main }, { children: children }), void 0), _jsx("footer", __assign({ className: classes.footer }, { children: _jsx(Copyright, {}, void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default memo(Mobile);
