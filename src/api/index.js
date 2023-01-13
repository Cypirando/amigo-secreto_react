const rota = "http://localhost:5000/nomes-sortados";

async function criarSorteio(nomes) {
  try {
    let header = new Headers({
      "Content-Type": "application/json",
    });
    let request = await fetch(rota, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ nomes }),
    });
    request
      .json()
      .then((sorteados) => {})
      .catch((err) => console.log("err=", err));
  } catch (error) {
    console.log("eror");
  }
}

export default criarSorteio;
