export const createMuscleGroups = (muscleList) => {
    const legGroup = ['Quads', 'Hamstrings', 'Glutes', 'Calves'];
    const armGroup = ['Biceps', 'Triceps', 'Delts'];

    const targetMuscles = [...new Set(muscleList.map(muscle => {
        if (legGroup.includes(muscle)) { return 'Legs'; }
        if (armGroup.includes(muscle)) { return 'Arms'; }
        return muscle;
    }))];

    console.log(targetMuscles);
    return targetMuscles;
}