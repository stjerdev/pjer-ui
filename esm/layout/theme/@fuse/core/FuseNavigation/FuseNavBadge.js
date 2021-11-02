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
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { memo } from "react";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        padding: "0 7px",
        fontSize: 11,
        fontWeight: 600,
        height: 20,
        minWidth: 20,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}); });
function FuseNavBadge(props) {
    var title = props.title, bg = props.bg, fg = props.fg;
    var classes = useStyles(props);
    return (_jsx("div", __assign({ className: clsx(classes.root, "item-badge"), style: {
            backgroundColor: bg,
            color: fg,
        } }, { children: title }), void 0));
}
FuseNavBadge.defaultProps = {};
export default memo(FuseNavBadge);
