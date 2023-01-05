import './Participante.css'

const Participante = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/cypirando.png' alt="perfil"/>
            </div>
            <div className='rodape'>
                <h4>Fábio Cypriano</h4>
                <h5>fabiocypriano@gmail.com</h5>
            </div>
        </div>
    )

}

export default Participante