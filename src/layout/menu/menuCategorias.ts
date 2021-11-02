import ChatIcon from "@material-ui/icons/Chat"
import ComputerIcon from "@material-ui/icons/Computer"
import DescriptionIcon from "@material-ui/icons/Description"
import EmailIcon from "@material-ui/icons/Email"
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import GavelIcon from "@material-ui/icons/Gavel"
import GroupIcon from "@material-ui/icons/Group"
import FolderIcon from "@material-ui/icons/Folder"
import HelpIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import PersonIcon from "@material-ui/icons/Person"
import SettingsIcon from "@material-ui/icons/Settings"
import WorkIcon from "@material-ui/icons/Work"
import { fuseReactLatestVersion } from "../theme/main/documentation/changelog/ChangelogDoc"
import HistoryIcon from "@material-ui/icons/History"

type Props = {
  agendaNavIcon: any;
  novedadesNavIcon: any;
  presentacionesNavIcon: any
};

const menuCategorias  = (props: Props) => {
  const { agendaNavIcon, novedadesNavIcon, presentacionesNavIcon } = props;
  return [
  { name: "Inicio", Icon: HomeIcon, perfiles: [], link: "/" },
  {
    name: "Jurisdiccional",
    // link: "",
    abierto: true,
    Icon: GavelIcon,
    perfiles: [],
    items: [
      {
        name: "Novedades",
        Icon: {novedadesNavIcon},
        link: "/novedades",
        perfiles: [],
      },
      {
        name: "Expedientes",
        Icon: DescriptionIcon,
        link: "/expedientes",
        perfiles: [],
      },
      {
        name: "Presentaciones",
        Icon: {presentacionesNavIcon},
        link: "/presentaciones",
        perfiles: [],
      },
      {
        name: "Notificaciones",
        Icon: NotificationsActiveIcon,
        link: "/notificaciones",
        perfiles: [],
      },
      {
        name: "Personas",
        Icon: PersonIcon,
        link: "/personas",
        perfiles: [],
      },
      {
        name: "Agenda",
        Icon: {agendaNavIcon},
        link: "/agenda",
        perfiles: [],
      },
      {
        name: "Modelo",
        Icon: FileCopyOutlinedIcon,
        link: "/modelos",
        perfiles: [],
      },
    ],
  },
  {
    name: "Administrativo",
    // link: "",
    Icon: ComputerIcon,
    perfiles: [],
    items: [
      // {
      //   name: "Licencias",
      //   link: "/sgp/licencias/licencias",
      //   Icon: FolderIcon,
      //   perfiles: ["admin"],
      // },
      // {
      //   name: "Informes",
      //   Icon: FolderIcon,
      //   perfiles: ["admin"],
      //   items: [
      //     {
      //       name: "Libro de Personal",
      //       link: "/sgp/informes/libroPersonal",
      //       Icon: FolderIcon,
      //       perfiles: ["admin"],
      //     },
      //   ],
      // },
      {
        name: "SGP",
        Icon: GroupIcon,
        link: "",
        a: true,
        perfiles: [],
        items: [
          {
            name: "Licencias",
            link: "/sgp/licencias/licencias",
            Icon: FolderIcon,
            perfiles: ["admin", "censo"],
          },
        ],
      },
      {
        name: "Email",
        Icon: EmailIcon,
        link: "https://correo.jusentrerios.gov.ar",
        a: true,
        perfiles: [],
      },
      {
        name: "Chat",
        Icon: ChatIcon,
        link: "https://chat.jusentrerios.gov.ar",
        a: true,
        perfiles: [],
      },
    ],
  },
  {
    name: "Configuración",
    // link: "",
    Icon: SettingsIcon,
    perfiles: [],
    items: [
      {
        name: "Organismos",
        Icon: WorkIcon,
        link: "/configuracion/organismo",
        perfiles: [],
      },
      {
        name: "Ayuda",
        Icon: HelpIcon,
        link: "/configuracion/ayuda",
        perfiles: [],
      },
    ],
  },
  {
    name: "Cambios",
    // link: "",
    Icon: HistoryIcon,
    perfiles: [],
    link: "/cambios",
    badge: {
      title: fuseReactLatestVersion,
      bg: "#f50057",
      fg: "#FFFFFF",
    },
  },
];
};

export default menuCategorias
