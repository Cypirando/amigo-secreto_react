import Participante from '../Participante'
import './Participantes.css'

const Participantes = (props) => {
    const primaria = {backgroundColor: props.corPrimaria}
    const secundaria = {borderColor:props.corSecundaria}
    return (
        <section className='participantes' style={primaria}>
            <h3 style={secundaria}>{props.nome}</h3>
            {props.colaboradores.map(participante => <Participante />)}  
        </section>
    )

}

export default Participantes