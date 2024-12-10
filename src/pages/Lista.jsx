
import ConteudoLista from "./ConteudoLista"
import Footer from "./Footer"
import Usuario from "./Usuario"

function Lista(){
    return(
        <body className="body-lista">
            
            <header>
                <a href="https://upbase.com.br" target="_blank">
                    <img src="./upbase-header.png" alt="Logo Marca da UpBase com Link para outra Aba para a página da UpBase Consultoria Digital" loading="lazy"/>
                </a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cadastro">+ Cadastrar Imóvel</a></li>
                        <li className="lista">Lista de Imóveis</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/reginaldo-luiz-formoso-junior-5aa23539/" target="_blank"><img src="./reginaldo-luiz.png" alt="Imagem de Reginaldo Luiz com link para sua página no LinkedIn" /></a>
                </nav>
            </header>

            <main className="main-lista">
                {/* <h1>Lista de Imóveis</h1> */}
                <a href="./"><img className="seta-lista" src="./seta-esquerda.png" alt="Icone de Volta para Página Home" /></a>

                <Usuario/>
                <section className="botao">
                <a className="flats" href="/lista">Todos os flates</a>
                <a className="indisponivel" href="#">Indisponíveis</a>
                </section>

                <ConteudoLista/>
            </main>

            <Footer/>
        </body>
    )
}

export default Lista
