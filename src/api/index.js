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


// import { useState } from "react";

// const rota = "http://localhost:5000/nomes-sortados";
// const CriarNovoSorteio = () => {
//   const [erro, setErro] = useState(false);
//   const [mensagemErro, setMensagemErro] = useState("");

//   async function criarSorteio(nomes) {
//     try {
//       let header = new Headers({
//         "Content-Type": "application/json",
//       });
//       let request = await fetch(rota, {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify({ nomes }),
//       });
//       request
//         .json()
//         .then((sorteados) => {})
//         .catch((err) => console.log("err=", err));
//     } catch (error) {
//       setErro(true);
//       setMensagemErro(
//         "Ocorreu um erro ao criar o sorteio. Por favor, tente novamente mais tarde."
//       );
//     }
//   }

//   return (
//     <div>
//       {erro && <div className="mensagem-erro">{mensagemErro}</div>}
//       <form onSubmit={criarSorteio}>...</form>
//     </div>
//   );
// };
// export default CriarNovoSorteio;