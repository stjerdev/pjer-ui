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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Grid } from "@material-ui/core";
import ChangelogCard from "./ChangelogCard";
import changelogDataMPF from "./changelogDataMPF";
import changelogDataSTJ from "./changelogDataSTJ";
var changelogData;
{
    switch (process.env.NEXT_PUBLIC_REALM) {
        case "mpf":
            changelogData = changelogDataMPF;
            break;
        case "mpd":
            changelogData = changelogDataMPF;
            break;
        case "stj":
            changelogData = changelogDataSTJ;
            break;
        default:
            changelogData = [{}];
            break;
    }
}
function ChangelogDoc() {
    return (_jsx(_Fragment, { children: changelogData.map(function (item) { return (_jsx(Grid, __assign({ spacing: 1, style: { padding: "1%" } }, { children: _jsx(ChangelogCard, __assign({ className: "mb-24" }, item), item.version) }), void 0)); }) }, void 0));
}
export var fuseReactLatestVersion = changelogData[0].version;
export default ChangelogDoc;
