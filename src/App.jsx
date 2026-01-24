import { useState } from 'react'
import './App.css'

function App() {
  const [inProgress, setInProgress] = useState(false)

  return (
    <>
      <h1>Today's Workout:</h1>
      <div className="body">
        {!inProgress &&
          <button onClick={() => setInProgress(true)}>
            Start workout
          </button>
        }
        {inProgress &&
          <button onClick={() => setInProgress(false)}>
            End workout
          </button>
        }
      </div>
    </>
  )
}

export default App
