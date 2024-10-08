import React, { useEffect, useState, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollLayoutProps {
  children: ReactNode
}

export const ScrollLayout: React.FC<ScrollLayoutProps> = ({ children }) => {
  const location = useLocation()
  const [currentSection, setCurrentSection] = useState<number>(0)

  // Функция для прокрутки к секции
  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    const totalSections = document.querySelectorAll('[id^="section-"]').length

    if (e.deltaY > 0) {
      if (currentSection < totalSections - 1) {
        setCurrentSection((prevSection) =>
          Math.min(prevSection + 1, totalSections - 1),
        )
      }
    } else {
      if (currentSection > 0) {
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0))
      }
    }
  }

  useEffect(() => {
    // Сбрасываем текущую секцию и прокручиваем к секции 0 при переходе на другую страницу
    setCurrentSection(0)
    scrollToSection(0)
  }, [location])

  useEffect(() => {
    scrollToSection(currentSection)
  }, [currentSection])

  useEffect(() => {
    window.addEventListener('wheel', handleScroll as EventListener, {
      passive: false,
    })

    return () => {
      window.removeEventListener('wheel', handleScroll as EventListener)
    }
  }, [])

  return <div className="w-full h-fit flex flex-col">{children}</div>
}
