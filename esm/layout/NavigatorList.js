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
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import List from "@material-ui/core/List";
import { memo } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import menuCategorias from "./menu/menuCategorias";
import menuCategoriasMPD from "./menu/menuCategoriasMPD";
import menuCategoriasMPF from "./menu/menuCategoriasMPF";
import MenuItem from "./menu/MenuItem";
var NavigatorList = function (props) {
    var open = props.open;
    var _a = useLocalStorage("navigator_selected", { categoria: "Inicio" }), itemSeleccionado = _a[0], setItemSeleccionado = _a[1];
    var opcionesMenu;
    {
        switch (process.env.NEXT_PUBLIC_REALM) {
            case "mpd":
                opcionesMenu = menuCategoriasMPD;
                break;
            case "mpf":
                opcionesMenu = menuCategoriasMPF;
                break;
            default:
                opcionesMenu = menuCategorias;
                break;
        }
    }
    return (_jsx(List, __assign({ disablePadding: true }, { children: opcionesMenu.map(function (item, index) { return (_createElement(MenuItem, __assign({}, item, { key: index, colapsado: !open, itemSeleccionado: itemSeleccionado, setItemSeleccionado: setItemSeleccionado }))); }) }), void 0));
};
export default memo(NavigatorList);
