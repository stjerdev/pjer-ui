import React, { createContext, useContext } from "react"

interface ILayoutContext {
  open: boolean
  showBreadCrumb: boolean
  footer: boolean
  setOpen: (value: boolean) => void
  setFooter: (value: boolean) => void
  setShowBreadCrumb: (value: boolean) => void
}

export const LayoutContext = createContext<ILayoutContext>(undefined)

interface ILayoutContextProvider {}
export const LayoutContextProvider: React.FunctionComponent<ILayoutContextProvider> = (
  props: ILayoutContextProvider,
) => {
  const [open, setOpen] = React.useState(true)
  const [showBreadCrumb, setShowBreadCrumb] = React.useState(true)
  const [footer, setFooter] = React.useState(true)

  const valor: ILayoutContext = {
    open,
    footer,
    showBreadCrumb,
    setFooter,
    setOpen,
    setShowBreadCrumb,
  }

  return <LayoutContext.Provider value={valor} {...props} />
}

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) {
    return undefined
    // throw new Error("no hay proveedor de expediente definido")
  }
  return context
}
