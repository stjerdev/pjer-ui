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
import PropTypes from "prop-types";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
var defaultTheme = createTheme();
export default function AppTheme(props) {
    var children = props.children;
    return _jsx(ThemeProvider, __assign({ theme: defaultTheme }, { children: children }), void 0);
}
AppTheme.propTypes = {
    children: PropTypes.element.isRequired,
};
