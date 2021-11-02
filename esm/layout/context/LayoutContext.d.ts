import React from "react";
interface ILayoutContext {
    open: boolean;
    showBreadCrumb: boolean;
    footer: boolean;
    setOpen: (value: boolean) => void;
    setFooter: (value: boolean) => void;
    setShowBreadCrumb: (value: boolean) => void;
}
export declare const LayoutContext: React.Context<ILayoutContext>;
interface ILayoutContextProvider {
}
export declare const LayoutContextProvider: React.FunctionComponent<ILayoutContextProvider>;
export declare function useLayoutContext(): ILayoutContext;
export {};
//# sourceMappingURL=LayoutContext.d.ts.map