import * as i from './imports'

const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})

  return (
    <i.VideoLayout video={i.video}>
      <div className="w-full h-screen  display flex flex-col items-center justify-center">
        <h1 className="text-[100px] font-bold text-white text-opacity-25 text-stroke-white">
          ALEKSANDR IVANTSOV
        </h1>
        <h2 className="text-[55px] font-bold text-white text-opacity-25 text-stroke-white">
          FRONTEND DEVELOPER
        </h2>
      </div>
    </i.VideoLayout>
  )
}

export default MainPage
