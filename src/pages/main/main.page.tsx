import * as i from './imports'
const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})
  console.log(data)

  return <div>Main</div>
}
export default MainPage
