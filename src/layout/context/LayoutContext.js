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
import React, { createContext, useContext } from "react";
export var LayoutContext = createContext(undefined);
export var LayoutContextProvider = function (props) {
    var _a = React.useState(true), open = _a[0], setOpen = _a[1];
    var _b = React.useState(true), showBreadCrumb = _b[0], setShowBreadCrumb = _b[1];
    var _c = React.useState(true), footer = _c[0], setFooter = _c[1];
    var valor = {
        open: open,
        footer: footer,
        showBreadCrumb: showBreadCrumb,
        setFooter: setFooter,
        setOpen: setOpen,
        setShowBreadCrumb: setShowBreadCrumb,
    };
    return _jsx(LayoutContext.Provider, __assign({ value: valor }, props), void 0);
};
export function useLayoutContext() {
    var context = useContext(LayoutContext);
    if (!context) {
        return undefined;
        // throw new Error("no hay proveedor de expediente definido")
    }
    return context;
}
