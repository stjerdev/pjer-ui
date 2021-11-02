export interface IOrganismos {
  organismos: any[]
}

export const organismoState: IOrganismos = { organismos: [] }

export default function OrganismosReducer(state = organismoState, action) {
  switch (action.type) {
    case "CAMBIAR_ORGANISMO_ACTUAL":
      return {
        organismos: action.payload.organismos,
      }
    default:
      return state
  }
}
