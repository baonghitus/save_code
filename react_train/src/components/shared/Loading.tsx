import type { FC } from 'react'

const Loading: FC = () => {
  return (
    <div className="content">
      <div className="flex justify-center">
        <div className="spinner">
          <div className="spinner-item"></div>
          <div className="spinner-item"></div>
          <div className="spinner-item"></div>
          <div className="spinner-item"></div>
          <div className="spinner-item"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
