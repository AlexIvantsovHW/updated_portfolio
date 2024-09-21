import * as i from './imports'
export const Header = () => {
  return (
    <div className="w-full h-[60px] flex px-[20px] py-[5px] items-center justify-around">
      {i.headerList.map((el, idx) => {
        return <i.HeaderElement title={el.title} key={idx} route={el.route} />
      })}
    </div>
  )
}
