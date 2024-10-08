import { useEffect } from 'react'
import * as i from './imports'
import { PortfolioWidget } from '../../widget/portfolio-widget'
const PortfolioPage = () => {
  const Ref1 = i.useRef<HTMLDivElement>(null)
  const Ref2 = i.useRef<HTMLDivElement>(null)
  const Ref3 = i.useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log('Component mounted')
    return () => {
      i.scrollToSection(Ref1)
      setTimeout(() => {}, 1)
    }
  }, [])
  return (
    <div className="w-full h-fit flex flex-col bg-black">
      <i.VideoLayout video={i.video}>
        <div
          ref={Ref1}
          id="section-0"
          className="w-full h-screen flex flex-col items-center justify-around pt-[200px] snap-start relative"
        >
          <div className="w-full flex-grow flex items-center justify-start flex-col">
            <h1 className="text-[100px] font-bold text-white text-opacity-[10%]  text-stroke-white">
              PORTFOLIO
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
      <PortfolioWidget Ref1={Ref1} Ref2={Ref2} Ref3={Ref3} />
    </div>
  )
}
export default PortfolioPage
