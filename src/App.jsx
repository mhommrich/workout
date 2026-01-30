import { useEffect, useState } from 'react'
import './App.css'
import { getMuscleList } from './hooks/getMuscleList';
import { getExercisesDB } from './adapters/api';

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [targetMuscle, setTargetMuscle] = useState(null);
  let dbURL = 'http://localhost:8080/exercises';
  let muscleList;
  
  const getTargetMuscle = async () => {
    const dbRaw = await getExercisesDB(dbURL)
    const muscleList = getMuscleList(dbRaw);
    const randomIndex = Math.floor(Math.random() * muscleList.length);
    setTargetMuscle(muscleList[randomIndex]);
  };
  return (
    <>
      <h1>Workout Buddy</h1>
      {targetMuscle && <h2>{targetMuscle}</h2>}
      {!inProgress && <button onClick={getTargetMuscle}>Set Random Target Muscle</button>}
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
