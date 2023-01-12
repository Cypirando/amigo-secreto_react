import './Botao.css'

const Botao = (props) => {
    return (
    <button 
    onClick={props.onClick}
    className='botao'>
        {props.children}
    </button>
    )
}

export default Botao