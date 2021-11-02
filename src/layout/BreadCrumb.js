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
import { Breadcrumbs, Grid, Tooltip, Typography, useMediaQuery, } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { memo } from 'react';
var ColorDesktop = '#fff';
var ColorMobile = '#fff';
var useStyles = makeStyles(function (theme) { return ({
    linkDesktop: {
        textDecoration: 'none',
        color: ColorDesktop,
        '&:hover': {
            color: 'blue',
        },
        maxWidth: '30em',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    linkMobile: {
        textDecoration: 'none',
        textIndent: '18px',
        color: ColorMobile,
        width: '120px',
        overflowInline: 'hidden',
        '&:hover': {
            color: 'blue',
        },
        maxWidth: '30em',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    itemsAlineados: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}); });
function BreadCrumb(props) {
    var enlaces = props.enlaces;
    var classes = useStyles(props);
    var matches = useMediaQuery('(min-width:800px)');
    if (enlaces && enlaces[0]) {
        var link_1 = enlaces[0].link.split('/');
        var as_1 = enlaces[0].as ? enlaces[0].as.split('/') : [];
        var ruta_1 = enlaces[0].ruta.split('|');
        return (_jsx(Grid, { children: _jsx(Breadcrumbs, __assign({ separator: _jsx(Typography, __assign({ variant: "subtitle1" }, { children: "\u203A" }), void 0), "aria-label": "breadcrumb" }, { children: ruta_1.map(function (_, index) {
                    var asRef = "/" + link_1.slice(0, index + 1).join('/');
                    var href = "/" + as_1.slice(0, index + 1).join('/');
                    return (ruta_1[index] &&
                        ruta_1[index] !== 'undefined' && (_jsx(Link, __assign({ href: href, as: asRef }, { children: _jsx(MaterialLink, __assign({ color: "inherit", href: "#", className: matches ? classes.linkDesktop : classes.linkMobile }, { children: matches ? (_jsx(Tooltip, __assign({ title: ruta_1[index] }, { children: _jsx(Typography, __assign({ variant: "subtitle1", className: classes.linkDesktop }, { children: ruta_1[index] }), void 0) }), void 0)) : (_jsx(Typography, __assign({ variant: "body2", className: classes.linkMobile }, { children: ruta_1[index] }), void 0)) }), void 0) }), index)));
                }) }), void 0) }, void 0));
    }
    else
        return _jsx("p", {}, void 0);
}
export default memo(BreadCrumb);
