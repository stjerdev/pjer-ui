declare type Props = {
    agendaNavIcon: any;
    novedadesNavIcon: any;
    presentacionesNavIcon: any;
};
declare const menuCategorias: (props: Props) => ({
    name: string;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    link: string;
    abierto?: undefined;
    items?: undefined;
    badge?: undefined;
} | {
    name: string;
    abierto: boolean;
    Icon: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").SvgIconTypeMap<{}, "svg">>;
    perfiles: any[];
    items: ({
        name: string;
        Icon: {
            novedadesNavIcon: any;
            presentacionesNavIcon?: undefined;
            agendaNavIcon?: undefined;
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
            presentacionesNavIcon: any;
            novedadesNavIcon?: undefined;
            agendaNavIcon?: undefined;
        };
        link: string;
        perfiles: any[];
    } | {
        name: string;
        Icon: {
            agendaNavIcon: any;
            novedadesNavIcon?: undefined;
            presentacionesNavIcon?: undefined;
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
export default menuCategorias;
//# sourceMappingURL=menuCategorias.d.ts.map