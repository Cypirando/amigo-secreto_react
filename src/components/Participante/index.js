import { MdPersonRemoveAlt1 } from "react-icons/md";
import './Participante.css'

const Participante = (props) => {
    return (
        <div className='colaborador'>

<MdPersonRemoveAlt1
        size={25}
        className="deletar"
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.imagem} alt={props.nome} />
      </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.email}</h5>
            </div>
        </div>
    )

}

export default Participante