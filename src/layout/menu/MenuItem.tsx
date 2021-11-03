import { Tooltip } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import CustomNavBadge from '../theme/Badge/core/FuseNavigation/CustomNavBadge'
import MenuItemComponent from './MenuItemComponent'

// React runtime PropTypes
export const MenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
  perfiles: PropTypes.array,
  a: PropTypes.bool,
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type MenuItemPropTypes = PropTypes.InferProps<typeof MenuItemPropTypes>
type MenuItemPropsWithoutItems = Omit<MenuItemPropTypes, 'items'>

// Improve child items declaration
export type MenuItemProps = MenuItemPropsWithoutItems & {
  items?: MenuItemProps[]
  colapsado?: boolean
  itemSeleccionado?: any
  setItemSeleccionado?: any
  abierto?: boolean
  badge?: any
  user?: any
}

const useStyles = makeStyles((_theme) =>
  createStyles({
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
  }),
)

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    name,
    link,
    Icon,
    items = [],
    perfiles,
    colapsado,
    abierto,
    badge,
    itemSeleccionado,
    setItemSeleccionado,
    user,
    a,
  } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(abierto ? true : false)

  // Recupero el usuario desde el contexto
  // const { user } = userAuth()

  function handleClick(categ: string) {
    setItemSeleccionado({ categoria: categ })
    setOpen(!open)
  }

  const estilo = (selected: boolean): { icono: any; texto: any } => {
    if (selected) {
      if (open) {
        return {
          icono: clsx(classes.iconPrimary, classes.iconoCentrado),
          texto: classes.itemPrimary,
        }
      } else {
        return {
          icono: clsx(classes.iconPrimary, classes.iconoCentrado),
          texto: null,
        }
      }
    } else {
      if (open) {
        return {
          icono: clsx(classes.iconPrimaryOff, classes.iconoCentrado),
          texto: classes.itemPrimaryOff,
        }
      } else {
        return {
          icono: clsx(classes.iconPrimaryOff, classes.iconoCentrado),
          texto: null,
        }
      }
    }
  }

  const MenuItemRoot =
    !user?.perfiles.some((p) => perfiles?.includes(p)) &&
    perfiles.length > 0 ? (
      <></>
    ) : (
      <MenuItemComponent
        className={clsx(classes.item, classes.itemCategory)}
        link={link}
        onClick={() => handleClick(name)}
        a={a}
      >
        {/* Display an icon if any */}
        {!!Icon && (
          <Tooltip title={name} placement="right">
            <ListItemIcon
              className={estilo(itemSeleccionado.categoria === name).icono}
            >
              <Icon />
            </ListItemIcon>
          </Tooltip>
        )}
        <ListItemText
          className={estilo(itemSeleccionado.categoria === name).texto}
          primary={!colapsado && name}
          inset={!Icon}
        />
        {!colapsado && badge && (
          <CustomNavBadge title={badge.title} bg={badge.gb} fg={badge.fg} />
        )}
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && !colapsado && <IconExpandMore />}
        {isExpandable && open && !colapsado && <IconExpandLess />}
      </MenuItemComponent>
    )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" className={classes.itemColapse}>
        {items.map((item, index) =>
          user &&
          !user.perfiles.some((p) => item.perfiles?.includes(p)) &&
          perfiles.length > 0 ? (
            <></>
          ) : (
            <MenuItem
              {...item}
              key={index}
              colapsado={colapsado}
              itemSeleccionado={itemSeleccionado}
              setItemSeleccionado={setItemSeleccionado}
            />
          ),
        )}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

export default MenuItem
