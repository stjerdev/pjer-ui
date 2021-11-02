declare type Props = {
    agendaNavIcon: any;
};
declare const menuCategoriasMPF: (props: Props) => ({
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    link: string;
    abierto?: undefined;
    open?: undefined;
    items?: undefined;
    badge?: undefined;
} | {
    name: string;
    abierto: boolean;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    open: boolean;
    perfiles: any[];
    items: ({
        name: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
        link: string;
        perfiles: any[];
    } | {
        name: string;
        Icon: {
            agendaNavIcon: any;
        };
        link: string;
        perfiles: any[];
    })[];
    link?: undefined;
    badge?: undefined;
} | {
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    open: boolean;
    items: ({
        name: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
        link: string;
        a: boolean;
        perfiles: any[];
        items: {
            name: string;
            link: string;
            Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
            perfiles: string[];
        }[];
    } | {
        name: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
        link: string;
        a: boolean;
        perfiles: any[];
        items?: undefined;
    })[];
    link?: undefined;
    abierto?: undefined;
    badge?: undefined;
} | {
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    open: boolean;
    items: {
        name: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
        link: string;
        perfiles: any[];
    }[];
    link?: undefined;
    abierto?: undefined;
    badge?: undefined;
} | {
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    link: string;
    badge: {
        title: any;
        bg: string;
        fg: string;
    };
    abierto?: undefined;
    open?: undefined;
    items?: undefined;
})[];
export default menuCategoriasMPF;
//# sourceMappingURL=menuCategoriasMPF.d.ts.map