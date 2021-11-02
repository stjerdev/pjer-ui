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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import clsx from "clsx";
import { memo } from "react";
import NavigatorList from "./NavigatorList";
var drawerWidth = 200;
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        item: {
            paddingTop: 1,
            paddingBottom: 1,
            color: "rgba(255, 255, 255, 0.7)",
            backgroundColor: "#0c2439",
            paddingLeft: "6px",
            textDecoration: "none",
            listStyle: "none",
            "&:hover,&:focus": {
                backgroundColor: "#404854",
            },
        },
        firebase: {
            fontSize: 24,
            color: theme.palette.common.white,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            paddingLeft: "10px",
        },
        drawerOpen: {
            backgroundColor: "#0c2439",
            backgroundAttachment: "fixed",
            backgroundImage: "url(//www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png)",
            backgroundPosition: "left 0 bottom 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "256px 556px",
            height: "100vh",
            // aca
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: (_a = {
                background: "#0c2439",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: "hidden",
                width: theme.spacing(7) + 1
            },
            _a[theme.breakpoints.up("sm")] = {
                width: theme.spacing(9) + 1,
            },
            _a),
        toolbar: __assign({ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: theme.spacing(0, 1) }, theme.mixins.toolbar),
        iconoMenu: {
            marginLeft: "1rem",
            marginRight: "1rem",
            fill: "#fff",
        },
    });
});
var TITULO_APP = (_jsx("p", __assign({ style: { color: "white", fontSize: "24px" } }, { children: process.env.NEXT_PUBLIC_TITULO_APP }), void 0));
var Navigator = function (props) {
    var _a, _b;
    var handleDrawerClose = props.handleDrawerClose, open = props.open;
    var classes = useStyles();
    var theme = useTheme();
    return (_jsxs(Drawer, __assign({ variant: "permanent", className: clsx(classes.drawer, (_a = {},
            _a[classes.drawerOpen] = open,
            _a[classes.drawerClose] = !open,
            _a)), classes: {
            paper: clsx((_b = {},
                _b[classes.drawerOpen] = open,
                _b[classes.drawerClose] = !open,
                _b)),
        } }, { children: [_jsx("div", __assign({ className: clsx(classes.firebase, classes.item, classes.toolbar) }, { children: _jsxs(Button, __assign({ onClick: handleDrawerClose }, { children: [open ? _jsx("div", __assign({ style: { marginRight: 15 } }, { children: TITULO_APP }), void 0) : "", theme.direction === "rtl" ? (_jsx(MenuRoundedIcon, {}, void 0)) : open ? (_jsx(MenuOpenRoundedIcon, { style: { fill: "#fff" } }, void 0)) : (_jsx(MenuRoundedIcon, { className: classes.iconoMenu }, void 0))] }), void 0) }), void 0), _jsx(Divider, {}, void 0), _jsx(NavigatorList, { open: open }, "NavigatorList")] }), void 0));
};
export default memo(Navigator);
