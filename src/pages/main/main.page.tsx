import * as i from './imports'
const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})

  return (
    <div className="w-full h-fit flex flex-col bg-black">
      <i.VideoLayout video={i.video}>
        <div
          id="section-0"
          className="w-full h-screen flex flex-col items-center justify-around pt-[200px] snap-start relative"
        >
          <div className="w-full flex-grow flex items-center justify-start flex-col">
            <h1 className="text-[100px] font-bold text-white opacity-25 stroke-1 stroke-white">
              ALEKSANDR IVANTSOV
            </h1>
            <h2 className="text-[55px] font-bold text-white opacity-25 stroke-1 stroke-white">
              FRONTEND DEVELOPER
            </h2>
          </div>
        </div>
      </i.VideoLayout>
    </div>
  )
}

export default MainPage
