import { useEffect, useState } from 'react'
import './App.css'
import { getMuscleList } from './hooks/getMuscleList';
import { createMuscleGroups } from './hooks/createMuscleGroups';
import { getExercisesDB } from './adapters/api';
import sampleData from './assets/sampleData.json'
import { getRandom } from './hooks/getRandom';

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [targetMuscle, setTargetMuscle] = useState(null);
  const [dbConnected, setDbConnected] = useState(true); 
  const [exercises, setExercises] = useState(null);

  const dbURL = 'http://localhost:8080/exercises';

  useEffect(() => {
    const loadExercises = async () => {
      let data;

      if (dbConnected) {
        const result = await getExercisesDB(dbURL);
        if (result === "error") {
          setDbConnected(false);
          data = sampleData;
        } else {
          data = result;
        }
      } else {
        data = sampleData;
      }
      setExercises(data);
    }
    loadExercises();
  }, []);

  useEffect(() => {
    if (!exercises) return;
    const muscleList = getMuscleList(exercises);
    const targetMuscles = createMuscleGroups(muscleList);
    const randomMuscle = getRandom(targetMuscles);
    setTargetMuscle(randomMuscle);
  }, [exercises]);

  const targetMuscles = exercises ? createMuscleGroups(getMuscleList(exercises)) : [];

  return (
    <>
      <h1>Workout Buddy</h1>
      {targetMuscle && <h2>{targetMuscle}</h2>}
      {!inProgress && <button onClick={() => setTargetMuscle(getRandom(targetMuscles))}>Set Random Target Muscle</button>}
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
