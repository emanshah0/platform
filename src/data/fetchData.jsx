import axios from "axios";

const API_ENDPOINT = "http://127.0.0.1:5000/api";

async function FetchData() {
  try {
    const response = await axios.get(`${API_ENDPOINT}/data`);
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default FetchData;
