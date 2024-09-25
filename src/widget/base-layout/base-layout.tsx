import * as i from './imports'
export const BaseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full h-screen bg-blue-500 flex flex-col justify-between">
      <i.Header />
      <div className="w-full flex-grow bg-white flex border border-black items-center justify-center">
        {children}
      </div>
      <i.Footer />
    </div>
  )
}
