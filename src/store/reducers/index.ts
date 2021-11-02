import { combineReducers } from "redux"

import rutaReducer from "./rutasReducer"
import organismoReducer from "./organismosReducer"

export default combineReducers({
  storeRuta: rutaReducer,
  storeOrganismo: organismoReducer,
})
