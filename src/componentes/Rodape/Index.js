import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/MatheusBoaventura" target="_blank">
                        <img src="/imagens/git.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/matheus-boaventura-prieto/" target="_blank">
                        <img src="/imagens/linkedin.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <a href='https://github.com/MatheusBoaventura'>
                Desenvolvido por Matheus Boaventura Prieto.
            </a>
        </section>
    </footer>)
}

export default Rodape