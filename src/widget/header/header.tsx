import * as i from './imports'

export const Header = () => {
  /* ------------STATE------------ */

  const [anchorEl, setAnchorEl] = i.useState<null | HTMLElement>(null)
  const [hoveredIconIdx, setHoveredIconIdx] = i.useState<number | null>(null)

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
    <div className="w-full h-fit fixed t-0 l-0 z-50">
      <div className="w-full h-fit hidden md:block">
        <div className="w-full h-[60px] flex items-center justify-between px-[25px] py-[10px]">
          <i.PublicTwoToneIcon
            style={{ fill: 'white', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
          {i.headerList.map((el, idx) => {
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIconIdx(idx)}
                onMouseLeave={() => setHoveredIconIdx(null)}
              >
                <button
                  onClick={() => navigate(el.route)}
                  className="flex items-center justify-center gap-[10px]"
                >
                  <el.icon
                    style={{
                      fill: hoveredIconIdx === idx ? 'gray' : 'white',
                      cursor: 'pointer',
                    }}
                  />
                  <span
                    className="text-white"
                    style={{
                      color: hoveredIconIdx === idx ? 'gray' : 'white',
                      cursor: 'pointer',
                    }}
                  >
                    {el.title.toLocaleUpperCase()}
                  </span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex md:hidden justify-between">
        <img
          src={i.imgs.logo}
          alt="logo"
          width={60}
          height={40}
          className="cursor-pointer"
          onClick={() => navigate('/')}
        />
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
                <el.icon
                  style={{
                    fill: hoveredIconIdx === idx ? 'gray' : 'white',
                  }}
                  onMouseEnter={() => setHoveredIconIdx(idx)}
                  onMouseLeave={() => setHoveredIconIdx(null)}
                />
              </i.MenuItem>
            )
          })}
        </i.Menu>
      </div>
    </div>
  )
}
