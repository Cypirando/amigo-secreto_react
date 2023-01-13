import './Botao.css'

const Botao = (props) => {
    console.log("teste=", props)
    return (
    <button 
    onClick={props.onClick}
    className='botao'>
        {props.teste}
    </button>
    )
}

export default Botao