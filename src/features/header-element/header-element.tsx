import * as i from './imports'
export const HeaderElement = (props: i.ElementType) => {
  const { title, route } = props
  return (
    <i.Link to={route}>
      <div className="bg-red-400 h-full flex items-center justify-center">
        {title}
      </div>{' '}
    </i.Link>
  )
}
