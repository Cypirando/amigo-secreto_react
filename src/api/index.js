
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
    alert("Ocorreu um erro com a chamada de API. Por favor, tente novamente mais tarde.");
  }
}

export default criarSorteio;
