import './Participante.css'

const Participante = (props) => {
    return (
        <div className='colaborador'>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.email}</h5>
            </div>
        </div>
    )

}

export default Participante