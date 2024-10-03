import { useState } from 'react'

export const VideoLayout: React.FC<{
  children: React.ReactNode
  video: string
}> = ({ children, video }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          Загрузка
        </div>
      )}
      <video
        src={video}
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoad}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className={`relative z-10 ${isLoading ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  )
}
