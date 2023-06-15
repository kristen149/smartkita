// assets
import { AppstoreOutlined } from '@ant-design/icons';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

// icons
const icons = {
    AppstoreOutlined,
    PendingActionsOutlinedIcon,
    GroupsOutlinedIcon,
    PersonSearchOutlinedIcon,
    BusinessOutlinedIcon,
    MonetizationOnOutlinedIcon,
    BusinessCenterOutlinedIcon,
    AssessmentOutlinedIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const menuNav = {
  id: 'menu',
//   title: 'menuNav',
  type: 'group',
  children: [
    {
        id: 'overview',
        title: 'Übersicht',
        type: 'item',
        url: '/overview/default',
        icon: icons.AppstoreOutlined,
        breadcrumbs: false
      },
    {
      id: 'gesamtwarteliste',
      title: 'Gesamtwarteliste',
      type: 'item',
      url: '/gesamtwarteliste',
      icon: icons.PendingActionsOutlinedIcon,

    },
    {
      id: 'belegungsliste',
      title: 'Belegungsliste',
      type: 'item',
      url: '/belegungsliste',
      icon: icons.GroupsOutlinedIcon,
    //   external: true,
    //   target: true
    },
    {
        id: 'personensuche',
        title: 'Personensuche',
        type: 'item',
        url: '/personensuche',
        icon: icons.PersonSearchOutlinedIcon
      },
      {
        id: 'einrichtungen',
        title: 'Einrichtungen',
        type: 'item',
        url: '/einrichtungen',
        icon: icons.BusinessOutlinedIcon
      },
      {
        id: 'finanzen',
        title: 'Finanzen',
        type: 'item',
        url: '/finanzen',
        icon: icons.MonetizationOnOutlinedIcon
      },
      {
        id: 'unternehmen',
        title: 'Unternehmen',
        type: 'item',
        url: '/unternehmen',
        icon: icons.BusinessCenterOutlinedIcon
      },
      {
        id: 'auswertungen',
        title: 'Auswertungen',
        type: 'item',
        url: '/auswertungen',
        icon: icons.AssessmentOutlinedIcon
      }
  ]
};

export default menuNav;
