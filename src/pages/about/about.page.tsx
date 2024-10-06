import * as i from './imports'
const AboutPage = () => {
  return (
    <i.VideoLayout video={i.video}>
      <div className="w-full h-screen  display flex flex-col items-center justify-center">
        <h1 className="text-[100px] font-bold text-white text-opacity-25  text-stroke-white">
          ABOUT ME
        </h1>
      </div>
    </i.VideoLayout>
  )
}
export default AboutPage
