export interface IRuta {
    ruta?: string;
    link?: string;
    as?: string;
}
export declare const rutaState: Array<IRuta>;
export default function RutasReducer(state: IRuta[], action: {
    type: string;
    payload: IRuta;
}): IRuta[];
//# sourceMappingURL=rutasReducer.d.ts.map