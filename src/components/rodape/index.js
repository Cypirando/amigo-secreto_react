//src/componentes/Rodape/index.js

import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="../../../public/images/fb.png" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="../../../public/images/tw.png" alt="twitter" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="../../../public/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Botdesigner.
            </p>
        </section>
    </footer>)
}

export default Rodape