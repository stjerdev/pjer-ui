declare type Props = {
    agendaNavIcon: any;
    novedadesNavIcon: any;
};
declare const menuCategoriasMPD: (props: Props) => ({
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    link: string;
    abierto?: undefined;
    items?: undefined;
    badge?: undefined;
} | {
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    abierto: boolean;
    perfiles: any[];
    items: ({
        name: string;
        Icon: {
            agendaNavIcon: any;
            novedadesNavIcon?: undefined;
        };
        link: string;
        perfiles: any[];
    } | {
        name: string;
        Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
        link: string;
        perfiles: any[];
    } | {
        name: string;
        Icon: {
            novedadesNavIcon: any;
            agendaNavIcon?: undefined;
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
    items?: undefined;
})[];
export default menuCategoriasMPD;
//# sourceMappingURL=menuCategoriasMPD.d.ts.map