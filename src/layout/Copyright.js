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
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
import { memo } from "react";
function Copyright(props) {
    var titulo = props.titulo;
    return (_jsxs(Typography, __assign({ variant: "body2", color: "textSecondary", align: "center" }, { children: ["Desarrollo ", titulo, " ", new Date().getFullYear(), " - Versi\u00F3n:", " ", process.env.NEXT_PUBLIC_APP_VERSION, "."] }), void 0));
}
export default memo(Copyright);
