import { IRuta } from "../reducers/rutasReducer"

export const setearRutaAction = (ruta: IRuta) => {
  return {
    type: "CAMBIAR_RUTA_ACTUAL",
    payload: ruta,
  }
}
