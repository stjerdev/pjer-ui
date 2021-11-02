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
import { createElement as _createElement } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FuseNavBadge from '../theme/@fuse/core/FuseNavigation/FuseNavBadge';
import MenuItemComponent from './MenuItemComponent';
// React runtime PropTypes
export var MenuItemPropTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    Icon: PropTypes.elementType,
    items: PropTypes.array,
    perfiles: PropTypes.array,
    a: PropTypes.bool,
};
var useStyles = makeStyles(function (_theme) {
    return createStyles({
        item: {
            paddingTop: 1,
            paddingBottom: 1,
            color: 'rgba(255, 255, 255, 0.7)',
            paddingLeft: _theme.spacing(2),
            textDecoration: 'none',
            listStyle: 'none',
            '&:hover,&:focus': {
                backgroundColor: '#404854',
            },
        },
        itemCategory: {
            boxShadow: '0 -1px 0 #404854 inset',
            paddingLeft: _theme.spacing(1),
            paddingRight: _theme.spacing(1),
            paddingTop: '3px',
            paddingBottom: '3px',
        },
        itemPrimary: {
            fontSize: 'inherit',
            color: '#fff',
        },
        itemPrimaryOff: {
            fontSize: 'inherit',
            color: '#bdc1c5',
        },
        iconPrimary: {
            minWidth: 'auto',
            marginRight: _theme.spacing(2),
            color: '#659cf4',
        },
        iconPrimaryOff: {
            minWidth: 'auto',
            marginRight: _theme.spacing(2),
            color: '#bdc1c5',
        },
        iconoCentrado: {
            marginLeft: '1rem',
            marginRight: '1rem',
        },
        itemColapse: {
            paddingLeft: '0.5rem',
        },
    });
});
var MenuItem = function (props) {
    var name = props.name, link = props.link, Icon = props.Icon, _a = props.items, items = _a === void 0 ? [] : _a, perfiles = props.perfiles, colapsado = props.colapsado, abierto = props.abierto, badge = props.badge, itemSeleccionado = props.itemSeleccionado, setItemSeleccionado = props.setItemSeleccionado, user = props.user, a = props.a;
    var classes = useStyles();
    var isExpandable = items && items.length > 0;
    var _b = React.useState(abierto ? true : false), open = _b[0], setOpen = _b[1];
    // Recupero el usuario desde el contexto
    // const { user } = userAuth()
    function handleClick(categ) {
        setItemSeleccionado({ categoria: categ });
        setOpen(!open);
    }
    var estilo = function (selected) {
        if (selected) {
            if (open) {
                return {
                    icono: clsx(classes.iconPrimary, classes.iconoCentrado),
                    texto: classes.itemPrimary,
                };
            }
            else {
                return {
                    icono: clsx(classes.iconPrimary, classes.iconoCentrado),
                    texto: null,
                };
            }
        }
        else {
            if (open) {
                return {
                    icono: clsx(classes.iconPrimaryOff, classes.iconoCentrado),
                    texto: classes.itemPrimaryOff,
                };
            }
            else {
                return {
                    icono: clsx(classes.iconPrimaryOff, classes.iconoCentrado),
                    texto: null,
                };
            }
        }
    };
    var MenuItemRoot = !(user === null || user === void 0 ? void 0 : user.perfiles.some(function (p) { return perfiles === null || perfiles === void 0 ? void 0 : perfiles.includes(p); })) &&
        perfiles.length > 0 ? (_jsx(_Fragment, {}, void 0)) : (_jsxs(MenuItemComponent, __assign({ className: clsx(classes.item, classes.itemCategory), link: link, onClick: function () { return handleClick(name); }, a: a }, { children: [!!Icon && (_jsx(Tooltip, __assign({ title: name, placement: "right" }, { children: _jsx(ListItemIcon, __assign({ className: estilo(itemSeleccionado.categoria === name).icono }, { children: _jsx(Icon, {}, void 0) }), void 0) }), void 0)), _jsx(ListItemText, { className: estilo(itemSeleccionado.categoria === name).texto, primary: !colapsado && name, inset: !Icon }, void 0), !colapsado && badge && (_jsx(FuseNavBadge, { title: badge.title, bg: badge.gb, fg: badge.fg }, void 0)), isExpandable && !open && !colapsado && _jsx(IconExpandMore, {}, void 0), isExpandable && open && !colapsado && _jsx(IconExpandLess, {}, void 0)] }), void 0));
    var MenuItemChildren = isExpandable ? (_jsxs(Collapse, __assign({ in: open, timeout: "auto", unmountOnExit: true }, { children: [_jsx(Divider, {}, void 0), _jsx(List, __assign({ component: "div", className: classes.itemColapse }, { children: items.map(function (item, index) {
                    return user &&
                        !user.perfiles.some(function (p) { var _a; return (_a = item.perfiles) === null || _a === void 0 ? void 0 : _a.includes(p); }) &&
                        perfiles.length > 0 ? (_jsx(_Fragment, {}, void 0)) : (_createElement(MenuItem, __assign({}, item, { key: index, colapsado: colapsado, itemSeleccionado: itemSeleccionado, setItemSeleccionado: setItemSeleccionado })));
                }) }), void 0)] }), void 0)) : null;
    return (_jsxs(_Fragment, { children: [MenuItemRoot, MenuItemChildren] }, void 0));
};
export default MenuItem;
