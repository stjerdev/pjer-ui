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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Grid, ListItem, ListItemText, makeStyles, Typography, } from "@material-ui/core";
import Link from "next/link";
var useStyles = makeStyles(function (theme) { return ({
    user: {
        paddingBottom: 1,
        color: "#ffffff",
        textDecoration: "none",
        flexDirection: "column",
        listStyle: "none",
        "&:hover,&:focus": {
            backgroundColor: "#404854",
        },
        boxShadow: "0 -1px 0 #404854 inset",
        paddingTop: theme.spacing(1),
        whiteSpace: "pre-wrap",
        textAlign: "center",
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    organismo: {
        whiteSpace: "pre-wrap",
        textAlign: "center",
    },
}); });
var UserAvatar = function (props) {
    var _a, _b, _c;
    var user = props.user, agenteCtx = props.agenteCtx, loadingContext = props.loadingContext;
    var classes = useStyles();
    // Recupero el usuario desde el contexto
    var agente = agenteCtx === null || agenteCtx === void 0 ? void 0 : agenteCtx.agente;
    return (_jsx(_Fragment, { children: _jsx(Link, __assign({ href: "/usuarios/profile" }, { children: _jsxs(ListItem, __assign({ className: classes.user, button: true }, { children: [loadingContext ? (_jsx(_Fragment, { children: "Cargando.." }, void 0)) : !(agente === null || agente === void 0 ? void 0 : agente.fotoAgente) ? (_jsx(Avatar, { src: "/static/images/avatar/avatar1.png", title: user.name, alt: user.name, className: classes.large }, void 0)) : (_jsx(Avatar, { src: agente.fotoAgente.base64, title: user.name, alt: user.name, className: classes.large }, void 0)), _jsx(ListItemText, { children: _jsxs(Grid, __assign({ container: true, alignItems: "center", direction: "column" }, { children: [_jsx(Grid, __assign({ item: true }, { children: open && "" + user.name }), void 0), _jsx(Grid, __assign({ item: true, xs: true, style: { display: "flex" } }, { children: !agente ? (_jsx(_Fragment, {}, void 0)) : loadingContext ? (_jsx(_Fragment, { children: "Cargando.." }, void 0)) : (_jsx(Typography, __assign({ variant: "caption", className: classes.organismo }, { children: open &&
                                            ((_a = agente === null || agente === void 0 ? void 0 : agente.organismoActual) === null || _a === void 0 ? void 0 : _a.nombre_largo) + " (" + ((_c = (_b = agente.organismoActual) === null || _b === void 0 ? void 0 : _b.gral_localidad) === null || _c === void 0 ? void 0 : _c.descripcion) + ")" }), void 0)) }), void 0)] }), void 0) }, void 0)] }), "perfil") }), "perfil") }, void 0));
};
export default UserAvatar;
