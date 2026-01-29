import axios from "axios";

export const getExercisesDB = async (url) => {
    const response = await axios.get(url).then((response) => response.data );
    return response;
};
