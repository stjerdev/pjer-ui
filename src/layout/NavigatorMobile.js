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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import Router from "next/router";
import { memo } from "react";
import NavigatorList from "./NavigatorList";
import { useKeycloak } from "@react-keycloak/ssr";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        categoryHeader: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        categoryHeaderPrimary: {
            color: theme.palette.common.white,
        },
        item: {
            paddingTop: 1,
            paddingBottom: 1,
            color: "rgba(255, 255, 255, 0.7)",
            paddingLeft: theme.spacing(3),
            textDecoration: "none",
            listStyle: "none",
            "&:hover,&:focus": {
                backgroundColor: "#404854",
            },
        },
        itemCategory: {
            boxShadow: "0 -1px 0 #404854 inset",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(1),
        },
        firebase: {
            fontSize: 24,
            color: theme.palette.common.white,
        },
        itemActiveItem: {
            color: "#4fc3f7",
        },
        itemPrimary: {
            fontSize: "inherit",
        },
        itemIcon: {
            minWidth: "auto",
            marginRight: theme.spacing(2),
        },
        divider: {
            marginTop: theme.spacing(2),
        },
        // add
        vinculo: {
            color: "white",
            liststyle: "none",
            textdecoration: "none",
            display: "flex",
            alignitems: "center",
        },
        titulo: {
            fontSize: theme.typography.pxToRem(25),
            fontWeight: theme.typography.fontWeightBold,
            textAlign: "center",
        },
    });
});
function NavigatorMobile(props) {
    var _this = this;
    var other = __rest(props, []);
    var classes = useStyles();
    var keycloak = useKeycloak().keycloak;
    var cerrarSesion = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    localStorage.removeItem("token");
                    localStorage.removeItem("state");
                    localStorage.clear();
                    sessionStorage.clear();
                    return [4 /*yield*/, Router.push({ pathname: "/", query: {} })];
                case 1:
                    _a.sent();
                    keycloak.logout();
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(Drawer, __assign({ variant: "permanent" }, other, { children: [_jsx(NavigatorList, { open: true }, void 0), _jsx("a", __assign({ onClick: function () { return cerrarSesion(); } }, { children: _jsxs(ListItem, __assign({ className: clsx(classes.item, classes.itemCategory) }, { children: [_jsx(ListItemIcon, __assign({ className: classes.itemIcon }, { children: _jsx(ExitToAppIcon, {}, void 0) }), void 0), _jsx(ListItemText, __assign({ classes: {
                                primary: classes.itemPrimary,
                            } }, { children: "Salir" }), void 0)] }), void 0) }), void 0)] }), void 0));
}
export default memo(NavigatorMobile);
