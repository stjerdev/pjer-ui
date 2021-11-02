import PropTypes from 'prop-types';
import React from 'react';
export declare const MenuItemPropTypes: {
    name: PropTypes.Validator<string>;
    link: PropTypes.Requireable<string>;
    Icon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    items: PropTypes.Requireable<any[]>;
    perfiles: PropTypes.Requireable<any[]>;
    a: PropTypes.Requireable<boolean>;
};
declare type MenuItemPropTypes = PropTypes.InferProps<typeof MenuItemPropTypes>;
declare type MenuItemPropsWithoutItems = Omit<MenuItemPropTypes, 'items'>;
export declare type MenuItemProps = MenuItemPropsWithoutItems & {
    items?: MenuItemProps[];
    colapsado?: boolean;
    itemSeleccionado?: any;
    setItemSeleccionado?: any;
    abierto?: boolean;
    badge?: any;
    user?: any;
};
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
//# sourceMappingURL=MenuItem.d.ts.map