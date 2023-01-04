import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o sorteio</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome dos participantes" />
                <CampoTexto obrigatorio={true} label="Email" placeholder="Digite seu email dos participantes" />
                <CampoTexto label="Presente" placeholder="De alguma sugestão para presente" />
                <Botao>
                    Criar Sorteio
                </Botao>
            </form>
        </section>
    )
}

export default Formulario