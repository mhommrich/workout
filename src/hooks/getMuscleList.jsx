export const getMuscleList = (exercises) => {
    console.log(exercises)
    const muscleList = [];
    exercises.forEach((exercise) => {
        muscleList.push(exercise.primary_muscle);
    });
    return muscleList;
};
