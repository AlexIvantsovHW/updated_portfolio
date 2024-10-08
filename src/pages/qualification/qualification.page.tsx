import * as i from './imports'

const QualificationPage = () => {
  const Ref1 = i.useRef<HTMLDivElement>(null)
  const Ref2 = i.useRef<HTMLDivElement>(null)
  const Ref3 = i.useRef<HTMLDivElement>(null)

  return (
    <div className="w-full h-fit flex flex-col bg-black">
      <i.VideoLayout video={i.video}>
        <div
          ref={Ref1}
          id="section-0"
          className="w-full h-screen flex flex-col items-center justify-around pt-[200px] snap-start relative"
        >
          <div className="w-full flex-grow flex items-center justify-start flex-col">
            <h1 className="text-[100px] font-bold text-white opacity-25 stroke-1 stroke-white">
              QUALIFICATION
            </h1>
          </div>
          <button onClick={() => i.scrollToSection(Ref2)} className="h-[10%]">
            <i.ExpandCircleDownIcon
              fontSize="large"
              style={{ fill: 'white' }}
            />{' '}
          </button>
        </div>
      </i.VideoLayout>
      <div
        ref={Ref2}
        id="section-1"
        className="w-full h-screen bg-gray-500 flex items-center justify-center flex-col snap-start"
      >
        <button
          onClick={() => i.scrollToSection(Ref1)}
          className="h-[10%] pt-[60px]"
        >
          <i.ExpandCircleDownIcon
            className="rotate-180 "
            fontSize="large"
            style={{ fill: 'white' }}
          />
        </button>
        <div className="w-full flex-grow flex-col flex items-center justify-center ">
          <h2 className="text-3xl text-white">Section 2</h2>
        </div>

        <button onClick={() => i.scrollToSection(Ref3)}>
          <i.ExpandCircleDownIcon
            fontSize="large"
            style={{ fill: 'white' }}
            className="h-[10%]"
          />
        </button>
      </div>

      <div
        ref={Ref3}
        id="section-2"
        className="w-full h-screen bg-blue-500 flex-col flex items-center justify-center snap-start"
      >
        <button
          onClick={() => i.scrollToSection(Ref2)}
          className="h-[10%] pt-[60px]"
        >
          <i.ExpandCircleDownIcon
            fontSize="large"
            style={{ fill: 'white' }}
            className="h-[10%] rotate-180"
          />
        </button>
        <div className="w-full flex-grow flex-col flex items-center justify-center ">
          <h2 className="text-3xl text-white">Section 3</h2>
        </div>
        <button onClick={() => i.scrollToSection(Ref1)} className="h-[10%] ">
          <i.ExpandCircleDownIcon
            fontSize="large"
            style={{ fill: 'white' }}
            className="h-[10%]"
          />{' '}
        </button>
      </div>
    </div>
  )
}
export default QualificationPage
