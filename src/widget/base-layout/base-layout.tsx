import { Header } from '../header'

export const BaseLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full h-screen bg-blue-500">
      <Header />
      <div>{children}</div>
      <div>Footer</div>
    </div>
  )
}
