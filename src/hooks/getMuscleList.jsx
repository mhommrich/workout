export const getMuscleList = (exercises) => {
    console.log(exercises)
    const muscleList = [];
    exercises.forEach((exercise) => {
        if (typeof(exercise) === 'string') {
            muscleList.push(exercise);
        } else {
            muscleList.push(exercise.primary_muscle);
        }
    });
    return muscleList;
};
