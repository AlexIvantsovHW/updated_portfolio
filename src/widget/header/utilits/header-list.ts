import * as i from './imports'

export const headerList: {
  title: string
  icon: i.OverridableComponent<i.SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  route: string
}[] = [
  { title: 'About me', icon: i.PersonIcon, route: i.ROUTES.ABOUT },
  { title: 'Portfolio', icon: i.WorkIcon, route: i.ROUTES.PORTFOLIO },
  { title: 'Experience', icon: i.Battery6BarIcon, route: i.ROUTES.EXPERIENCE },
  {
    title: 'Qualification',
    icon: i.ImportContactsIcon,
    route: i.ROUTES.QUALIFICATION,
  },
  { title: 'Contact Info', icon: i.PhoneIphoneIcon, route: i.ROUTES.CONTACT },
  { title: 'Login', icon: i.LoginIcon, route: i.ROUTES.LOGIN },
]
