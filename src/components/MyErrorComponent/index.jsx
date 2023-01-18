import './MyErrorComponent.css'

const MyErrorComponent = (props) => {
    return (
    <button 
    className='texto'>
        {props.texto}
    </button>
    )
}

export default MyErrorComponent