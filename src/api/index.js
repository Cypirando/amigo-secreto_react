

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
    return await axios.post(rota, { nomes }, config);
  } catch (error) {
    throw error
  }
}

export default criarSorteio;
