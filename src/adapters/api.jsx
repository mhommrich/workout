import axios from "axios";

export async function getExercisesDB(url) {
  // Your fallback list
  const fallback = ['Pecs', 'Lats', 'Legs', 'Arms', 'Wet Diaper', 'Abs'];

  try {
    const response = await axios.get(url);
    return response.data;   // backend is up
  } catch (error) {
    // Detect backend offline / unreachable
    if (error.code === "ERR_NETWORK") {
      console.warn("Backend offline — using fallback exercises.");
      return fallback;
    }

    // Backend responded with an error (500, 404, etc.)
    if (error.response) {
      console.error("Backend error:", error.response.status);
      return fallback;
    }

    // Unknown error
    console.error("Unexpected error:", error);
    return fallback;
  }
}
