import List from "@material-ui/core/List"
import React, { memo } from "react"
import useLocalStorage from "../utils/useLocalStorage"
import menuCategorias from "./menu/menuCategorias"
import menuCategoriasMPD from "./menu/menuCategoriasMPD"
import menuCategoriasMPF from "./menu/menuCategoriasMPF"
import MenuItem from "./menu/MenuItem"

type TProp = {
  open: boolean
}

const NavigatorList = function (props: TProp) {
  const { open } = props

  const [itemSeleccionado, setItemSeleccionado] = useLocalStorage<{
    categoria: string
  }>("navigator_selected", { categoria: "Inicio" })
  let opcionesMenu
  {
    switch (process.env.NEXT_PUBLIC_REALM) {
      case "mpd":
        opcionesMenu = menuCategoriasMPD
        break
      case "mpf":
        opcionesMenu = menuCategoriasMPF
        break
      default:
        opcionesMenu = menuCategorias
        break
    }
  }

  return (
    <List disablePadding>
      {/* <UserContextProvider>
        <UserAvatar /> */}

        {opcionesMenu.map((item, index) => (
          <MenuItem
            {...item}
            key={index}
            colapsado={!open}
            itemSeleccionado={itemSeleccionado}
            setItemSeleccionado={setItemSeleccionado}
          />
        ))}
      {/* </UserContextProvider> */}
    </List>
  )
}

export default memo(NavigatorList)
