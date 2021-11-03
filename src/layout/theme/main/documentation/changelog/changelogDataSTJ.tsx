
const changelogDataSTJ = [
  {
    version: "0.7.0",
    date: "01-11-2021",
    newChanges: [
      "Administrativo: SGP -> Licencia: Se incorpora la posibilidad ver y solicitar licencias desde SIRIRI.",      
      "Agenda: Se incorpora funcionalidad para contar días hábiles.",
      "Editor: Se incorporan funciones 'Números a Letras', 'Mayúscula', 'Minúscula', 'Titulo/Capital', 'Fecha.",      
      "Editor: Se incorpora referencias dentro del documento y referencias con otros movimientos.",      
      "Editor: Se incorporan combinaciones de teclas rápidas.",      
      "Editor: Se incorpora marca de agua para impresión.",     
      "Expediente: Generación de Cédulas QR para notificación de movimientos mediante la Mesa Virtual Pública.",      
      "Firma digital: Se permite la firma digital de movimientos procesales con token físico, se requiere la instalación de la aplicación Fortify.",
      "Inicio de sesión: Se actualiza el diseño y mejoras de seguridad.",
      "Mejoras de estilos.",    
      "Modelos: Se agregan nuevas variables por pantalla",  
      "Persona: Se incorpora la consulta a RENAPER ingresando el DNI y el sexo.",      
      "Presentaciones: Se incorporan las presentaciones sin vinculación. Mecanismo de aceptación y rechazo.",
      "Presentaciones: Se incorporan filtros por fecha y abogado.",
      "Registros: Se agregan los registros estadísticos.",      
      
    ],
    notes: <></>,
    fixedChanges: [
      "Se arreglaron leyendas.",      
      "Se permite guardar documentos sin texto.",      
    ],    
  },
  {
    version: "0.6.0",
    date: "20-05-2021",
    newChanges: [
      "Editor: botón de guardar en el editor, bloqueo del navegador para prevenir pérdida de datos y se agregan funcionalidades en la barra de herramientas.",
      "Agenda: se agregan filtros por día, y en la sección Tabular filtros por Fecha, Tipo y Hecho.",
      "Movimientos: desplazando el cursor del mouse sobre fecha se muestra fecha de creación y actualización/procesal.",
      "Movimientos Presentaciones: desplazando el cursor del mouse sobre la descripción, muestra detalle de la misma.",
      "Filtro en Movimientos para visualizar los Propios.",
      "Panel auditoría para administradores.",
      "Auditoría para Administradores."
    ],
    notes: <></>,
    fixedChanges: [
      "Mejoras en la búsqueda",
      "Mejoras de estilos",
      "Validación en formulario de Justiciables",
    ],
    breakingChanges: [
      "Visor PDF no disponible en celular - descargar o editar escrito.",
    ],
  },
]

export default changelogDataSTJ
