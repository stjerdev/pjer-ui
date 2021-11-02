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
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import { makeStyles, createStyles } from "@material-ui/core";
var useStyles = makeStyles(function (_theme) {
    return createStyles({
        vinculo: {
            color: "transparent",
            liststyle: "none",
            textdecoration: "none",
            display: "flex",
            alignitems: "center",
        },
    });
});
var AppMenuItemComponent = function (props) {
    var className = props.className, onClick = props.onClick, link = props.link, children = props.children, a = props.a;
    var classes = useStyles();
    // If link is not set return the orinary ListItem
    if (!link || typeof link !== "string") {
        return (_jsx(ListItem, { button: true, className: className, children: children, onClick: onClick }, void 0));
    }
    if (!!a) {
        return (_jsx("a", __assign({ href: link, target: "_blank", className: classes.vinculo }, { children: _jsx(ListItem, { button: true, className: className, children: children, onClick: onClick }, void 0) }), void 0));
    }
    // Return a ListItem with a link component
    return (_jsx(Link, __assign({ href: link }, { children: _jsx(ListItem, { button: true, className: className, children: children, onClick: onClick }, void 0) }), void 0));
};
export default AppMenuItemComponent;
