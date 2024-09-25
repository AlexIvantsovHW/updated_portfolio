import { ROUTES } from '../../../shared/helpers'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import Battery6BarIcon from '@mui/icons-material/Battery6Bar'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
export const headerList: { title: string; icon: any; route: string }[] = [
  { title: 'About me', icon: PersonIcon, route: ROUTES.ABOUT },
  { title: 'Portfolio', icon: WorkIcon, route: ROUTES.PORTFOLIO },
  { title: 'Experience', icon: Battery6BarIcon, route: ROUTES.EXPERIENCE },
  {
    title: 'Qualification',
    icon: ImportContactsIcon,
    route: ROUTES.QUALIFICATION,
  },
  { title: 'Contact Info', icon: PhoneIphoneIcon, route: ROUTES.CONTACT },
]
