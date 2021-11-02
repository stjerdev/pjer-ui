import { useMediaQuery } from "@material-ui/core"
import React, { memo } from "react"
import { LayoutContextProvider } from "./context/LayoutContext"
import Desktop from "./Desktop"
import Mobile from "./Mobile"

type Props = {
  children: React.ReactNode
  className?: string
  mostrarCabecera: boolean
}

const Layout = function (props: Props) {
  const { children } = props
  const mostrarCabecera = props.mostrarCabecera
  const matches = useMediaQuery("(min-width:595px)")
  if (matches) {
    return (
      <LayoutContextProvider>
        <Desktop children={children} mostrarCabecera={mostrarCabecera} />
      </LayoutContextProvider>
    )
  } else {
    return (
      <LayoutContextProvider>
        <Mobile children={children} mostrarCabecera={mostrarCabecera} />
      </LayoutContextProvider>
    )
  }
}

export default memo(Layout)
