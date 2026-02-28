import { colorMap } from '../utils'

export const Stick = ({
  position,
  rotation,
}: {
  position: 'left' | 'right'
  rotation?: number
}) => {
  const baseStyle =
    position === 'left' ? '-left-3 md:-left-4 lg:-left-5' : '-right-3 md:-right-4 lg:-right-5'
  const rotateStyle = rotation ? { transform: `rotate(${rotation}deg)` } : {}
  const randomBgColor = colorMap[Math.floor(Math.random() * colorMap.length)]
  const translation =
    position === 'left'
      ? Math.floor(Math.random() * (100 - 75 + 1)) + 75
      : Math.floor(Math.random() * (25 - 0 + 1)) + 0

  return (
    <div
      className={`h-6 w-3 md:h-8 md:w-4 lg:h-10 lg:w-5 absolute z-50 opacity-75 top-1/2 ${baseStyle} ${randomBgColor} rounded-sm shadow-md`}
      style={{
        ...rotateStyle,
        transform: `${rotateStyle.transform || ''} translateY(-${translation}%)`.trim(),
      }}
    />
  )
}
