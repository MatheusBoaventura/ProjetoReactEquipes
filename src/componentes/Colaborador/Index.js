import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h3 style={{color:corDeFundo}}>{nome}</h3>
                <h4>{cargo}</h4>
            </div>
        </div>
    )
}

export default Colaborador 