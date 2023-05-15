import { useState } from 'react'
import Botao from '../Botao/Index'
import CampoTexto from '../CampoTexto/index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            cargo
        })
        setNome('')
        setImagem('')
        setCargo('')
    }

    return (
        <section className="login">
            <form onSubmit={aoSalvar}>
                <h2>Monte sua tripulação :D</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Cargo" 
                    itens={props.cargos}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Botao>
                    Recrutar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario