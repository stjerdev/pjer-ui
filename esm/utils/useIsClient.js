import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// Usage
function Component() {
    var isClient = useIsClient();
    return _jsx("div", { children: isClient ? "Client" : "server" }, void 0);
}
// Hook
function useIsClient() {
    var _a = useState(false), isClient = _a[0], setClient = _a[1];
    useEffect(function () {
        setClient(true);
    }, []);
    return isClient;
}
export default useIsClient;
