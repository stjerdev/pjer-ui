var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "@material-ui/core/Typography";
var changelogDataMPF = [
    {
        version: "0.6.0",
        date: "21-05-2021",
        newChanges: [
            "Editor de Texto: botón guardar dentro del panel del editor que sirve para guardar datos y continuar redactando o utilizarlo en el modo expanción, también tiene la alternativa de guardar y salir. Bloqueo del navegador con una alerta para prevenir pérdidas de datos y se agregaron funcionalidades en la barra de herramientas.",
            "Agenda: Se agregó el campo Responsable al agendamiento. tambíen incluyeron filtros por responsable, fecha, tipo y hecho.",
            "Movimientos: Posicionando el cursor del mouse sobre fecha se muestran: fecha de creación, fecha procesal y de actualización.",
            "Mejoras de estilos cuando se utiliza con celular.",
            "Mejoras en la búsqueda de expedientes.",
            "Panel auditoría para administradores.",
        ],
        notes: _jsx(_Fragment, {}, void 0),
        fixedChanges: [
            "Selectores al crear expedientes - dato no encontrado.",
            "Selectores al crear agenda - dato no encontrado.",
        ],
        breakingChanges: [
            "Visor PDF no disponible en celular momentáneamente - tiene la opcion de descargar o editar escrito.",
        ],
    },
    {
        version: "0.5.9",
        date: "09-04-2021",
        newChanges: [
            "Expedientes: guardado de busqueda y pagina acutual en el buscador",
            "Carpetas por organismo",
            "Formulario para agregar modelos",
            "Acceso por Google Autenticador y quitado acceso por Fortinet",
        ],
        notes: (_jsxs(_Fragment, { children: [_jsx(Typography, __assign({ className: "text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16", component: "div" }, { children: "Mostrando foto avatar del SGP" }), void 0), _jsx(Typography, __assign({ className: "text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16 leading-loose", component: "div" }, { children: _jsxs("span", { children: ["En caso de que su foto no aparezca complete el formulario de Auto gesti\u00F3n en:", _jsx("a", __assign({ href: "http://sgp.jusentrerios.gov.ar", target: "_blank", rel: "noopener noreferrer" }, { children: "SGP" }), void 0)] }, void 0) }), void 0)] }, void 0)),
        fixedChanges: ["Busqueda de personas"],
    },
];
export default changelogDataMPF;
