import * as i from './imports'
const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})
  console.log(data)
  return <div>Main page</div>
}
export default MainPage
