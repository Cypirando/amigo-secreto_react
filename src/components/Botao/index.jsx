import './Botao.css'

const Botao = (props) => {
    return (
    <button 
    onClick={props.onClick}
    className='botao'>
        {props.texto}
    </button>
    )
}

export default Botao