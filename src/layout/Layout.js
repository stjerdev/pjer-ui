import { jsx as _jsx } from "react/jsx-runtime";
import { useMediaQuery } from "@material-ui/core";
import { memo } from "react";
import { LayoutContextProvider } from "./context/LayoutContext";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
var Layout = function (props) {
    var children = props.children;
    var mostrarCabecera = props.mostrarCabecera;
    var matches = useMediaQuery("(min-width:595px)");
    if (matches) {
        return (_jsx(LayoutContextProvider, { children: _jsx(Desktop, { children: children, mostrarCabecera: mostrarCabecera }, void 0) }, void 0));
    }
    else {
        return (_jsx(LayoutContextProvider, { children: _jsx(Mobile, { children: children, mostrarCabecera: mostrarCabecera }, void 0) }, void 0));
    }
};
export default memo(Layout);
