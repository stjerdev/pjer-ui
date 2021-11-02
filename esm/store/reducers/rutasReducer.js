export var rutaState = [null];
export default function RutasReducer(state, action) {
    if (state === void 0) { state = rutaState; }
    switch (action.type) {
        case "CAMBIAR_RUTA_ACTUAL":
            return [action.payload];
        default:
            return state;
    }
}
