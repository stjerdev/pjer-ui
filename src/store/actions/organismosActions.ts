import { IOrganismos } from "../reducers/organismosReducer"

export const setearOrganismoAction = (payload: IOrganismos) => {
  return {
    // Se debe mapear con organismosReducer cada type definido en Recucers
    type: "CAMBIAR_ORGANISMO_ACTUAL",
    payload: payload,
  }
}
