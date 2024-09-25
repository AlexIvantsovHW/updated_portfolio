import { CircularProgress, circularProgressClasses } from '@mui/material'

export const LoaderMain = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={(theme) => ({
          color: '#1a90ff',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          ...theme.applyStyles('dark', {
            color: '#308fe8',
          }),
        })}
        size={100}
        thickness={4}
      />
    </div>
  )
}
