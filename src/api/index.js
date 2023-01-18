
import axios from "axios";

const rota = "http://localhost:5000/nomes-sortados";

async function criarSorteio(nomes) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const request = await axios.post(rota, { nomes }, config);
    const sorteados = request.data;
    console.log(sorteados);
  } catch (error) {
    console.log(error);
    alert("There was an error with the API call. Please try again later.");
  }
}

export default criarSorteio;
