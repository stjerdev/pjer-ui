import { useState } from "react";
// See: https://usehooks-typescript.com/use-is-client
import useIsClient from "./useIsClient";
export default function useLocalStorage(key, initialValue) {
    // Prevent build error "window is undefined" but keep keep working
    var isClient = useIsClient();
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = useState(function () {
        // Get from local storage then
        // parse stored json or return initialValue
        try {
            var item = window === null || window === void 0 ? void 0 : window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window === null || window === void 0 ? void 0 : window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
