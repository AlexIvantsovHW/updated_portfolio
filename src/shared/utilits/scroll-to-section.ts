export const scrollToSection = (
  sectionRef: React.RefObject<HTMLDivElement>,
) => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
}
