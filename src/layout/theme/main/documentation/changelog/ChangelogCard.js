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
import Card from "@material-ui/core/Card";
import { blue, green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        padding: "24px 32px",
    },
    badge: {
        display: "inline-flex",
        fontSize: 13,
        color: "#FFF",
        letterSpacing: ".015em",
        lineHeight: 1,
        padding: "5px 8px",
        borderRadius: 2,
        "&.new": {
            backgroundColor: green[500],
        },
        "&.fix": {
            backgroundColor: blue[500],
        },
        "&.breaking": {
            backgroundColor: red[500],
        },
    },
}); });
function ChangelogCard(props) {
    var classes = useStyles();
    return (_jsxs(Card, __assign({ className: clsx(classes.root, props.className, "shadow") }, { children: [_jsxs("div", __assign({ className: "flex items-center" }, { children: [props.version && (_jsx(Typography, __assign({ className: "text-24 font-normal", variant: "h5", component: "h2" }, { children: "v" + props.version }), void 0)), props.date && (_jsxs(Typography, __assign({ className: "text-24 mx-8 font-normal", color: "textSecondary", component: "h3" }, { children: ["(", props.date, ")"] }), void 0))] }), void 0), props.newChanges.length > 0 && (_jsxs("div", __assign({ className: "mt-24" }, { children: [_jsx("div", __assign({ className: clsx(classes.badge, "new") }, { children: "Nuevo" }), void 0), _jsx("ul", __assign({ className: "my-16 px-24" }, { children: props.newChanges.map(function (change, index) { return (_jsx("li", __assign({ className: "mb-6" }, { children: _jsx(Typography, { children: change }, void 0) }), index)); }) }), void 0)] }), void 0)), props.fixedChanges.length > 0 && (_jsxs("div", __assign({ className: "mt-24" }, { children: [_jsx("div", __assign({ className: clsx(classes.badge, "fix") }, { children: "Fixed" }), void 0), _jsx("ul", __assign({ className: "my-16 px-24" }, { children: props.fixedChanges.map(function (change, index) { return (_jsx("li", __assign({ className: "mb-6" }, { children: _jsx(Typography, { children: change }, void 0) }), index)); }) }), void 0)] }), void 0)), props.breakingChanges.length > 0 && (_jsxs("div", __assign({ className: "mt-24" }, { children: [_jsx("div", __assign({ className: clsx(classes.badge, "breaking") }, { children: "Avisos importantes" }), void 0), _jsx("ul", __assign({ className: "my-16 px-24" }, { children: props.breakingChanges.map(function (change, index) { return (_jsx("li", __assign({ className: "mb-6" }, { children: _jsx(Typography, { children: change }, void 0) }), index)); }) }), void 0)] }), void 0)), props.notes] }), void 0));
}
ChangelogCard.defaultProps = {
    version: null,
    date: null,
    newChanges: [],
    fixedChanges: [],
    breakingChanges: [],
    notes: null,
};
export default ChangelogCard;
