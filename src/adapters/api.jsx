import axios from "axios";

export async function getExercisesDB(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Detect backend offline / unreachable
    if (error.code === "ERR_NETWORK") {
      console.warn("Backend offline — using fallback exercises.");
      return "error";
    }

    // Backend responded with an error (500, 404, etc.)
    if (error.response) {
      console.error("Backend error:", error.response.status);
      return "error";
    }

    // Unknown error
    console.error("Unexpected error:", error);
    return "error";
  }
}
