import * as i from './imports'

const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})

  return <i.VideoLayout video={i.video}>Main</i.VideoLayout>
}

export default MainPage
