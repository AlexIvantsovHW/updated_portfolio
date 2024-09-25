import * as i from './imports'
export const Header = () => {
  /* ------------STATE------------ */
  const [value, setValue] = i.useState(0)
  const [anchorEl, setAnchorEl] = i.useState<null | HTMLElement>(null)
  /* ------------HOOKS------------ */
  const navigate = i.useNavigate()
  /* ------------FUNCTIONS------------ */
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit hidden md:block">
        <i.Box>
          <i.BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            {i.headerList.map((el, idx) => {
              return (
                <i.BottomNavigationAction
                  key={idx}
                  label={el.title}
                  icon={<el.icon />}
                  className="text-black"
                  onClick={() => navigate(el.route)}
                />
              )
            })}
          </i.BottomNavigation>
        </i.Box>
      </div>
      <div className="flex md:hidden">
        {' '}
        <i.Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i.MenuIcon />
        </i.Button>
        <i.Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {i.headerList.map((el, idx) => {
            return (
              <i.MenuItem key={idx} onClick={() => navigate(el.route)}>
                {<el.icon />}
                {el.title}
              </i.MenuItem>
            )
          })}
        </i.Menu>
      </div>
    </div>
  )
}
