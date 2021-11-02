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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { memo } from "react";
var lightColor = "rgba(255, 255, 255, 0.7)";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        secondaryBar: {
            zIndex: 0,
        },
        menuButton: {
            marginLeft: -theme.spacing(1),
        },
        iconButtonAvatar: {
            padding: 4,
        },
        link: {
            textDecoration: "none",
            color: lightColor,
            "&:hover": {
                color: theme.palette.common.white,
            },
        },
        button: {
            borderColor: lightColor,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        fondo: {
            justifyContent: "flex-end",
            flexDirection: "row",
            display: "flex",
            alignItems: "baseline",
        },
        itemsAlineados: {
            justifyContent: "flex-start",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
        },
        root: {
        // padding: theme.spacing(1, 2),
        },
        test: {
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
        },
    });
});
function HeaderMobile(props) {
    var onDrawerToggle = props.onDrawerToggle, selectorOrganismos = props.selectorOrganismos, avisosPanel = props.avisosPanel;
    var classes = useStyles();
    return (_jsx(_Fragment, { children: _jsx(AppBar, __assign({ color: "primary", position: "sticky", elevation: 0 }, { children: _jsx(Toolbar, { children: _jsxs(Grid, __assign({ container: true, alignItems: "center" }, { children: [_jsx(Grid, __assign({ item: true, xs: 1 }, { children: _jsx(IconButton, __assign({ color: "inherit", "aria-label": "open drawer", onClick: onDrawerToggle, className: classes.menuButton }, { children: _jsx(MenuIcon, {}, void 0) }), void 0) }), void 0), _jsx(Grid, __assign({ item: true, style: { flexGrow: 1 }, xs: 10 }, { children: selectorOrganismos }), void 0), _jsx(Grid, __assign({ item: true, xs: 1, className: classes.fondo }, { children: _jsx(Grid, __assign({ item: true }, { children: avisosPanel }), void 0) }), void 0)] }), void 0) }, void 0) }), void 0) }, void 0));
}
export default memo(HeaderMobile);
