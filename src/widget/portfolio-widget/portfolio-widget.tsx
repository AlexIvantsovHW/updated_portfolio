import * as i from './imports'

export const PortfolioWidget = (props: i.PortfolioWidgetType) => {
  const { Ref1, Ref2, Ref3 } = props
  const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpEB0pwwB8BKgqs5msjHFdboMiy8LCFKKlQ&usqp=CAU'
  return (
    <>
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
        <div className="w-full flex-grow flex-col flex items-center justify-start px-[20px] py-[50px] ">
          <div className="w-full h-fit border border-black min-h-[150px] flex gap-[20px] bg-red-100 ">
            <div className="w-[250px] h-full flex flex-col items-center justify-center border border-black">
              <img src={img} alt="company-logo" height={'100%'} width={250} />
              <h1 className="font-bold text-[22px]">Itransition</h1>
              <h3 className="font-bold text-center"> Frontend Developer</h3>
              <h4 className="italic text-center"> 02-10.2024 (8 мес.)</h4>
            </div>

            <div className="w-full h-full border border-black flex flex-col gap-[5px]">
              <p>
                {' '}
                As a Frontend developer I am engaged in comercial softtware
                development.
              </p>
              <p className="font-bold italic"> Key responsibilities</p>
              <p>
                {' '}
                ✅ Developed application business logic layer for managing cargo
                logistics using React and TypeScript, integrating the
                client-side with the server via GraphQL. ✅ Carried out
                application debugging, code reviews, and project deployment
                within apps release. ✅ Carried out project layouts based on the
                CoreUi UI-library for desktop and mobile versions.
              </p>
              <p className="font-bold italic">Achievements</p>
              <p>
                🎯 Developed the minimum viable application aimed at cargo
                logistics optimizing for an international logistic company
                within tight deadlines. 🎯 Optimized loading speed, reducing
                application loading time by 4 times.
              </p>
              <p className="font-bold italic">Software stack</p>
            </div>
          </div>
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
    </>
  )
}
